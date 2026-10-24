
const formTabela = document.getElementById("formTabelaVerdade");
const campoExpressao = document.getElementById("expressaoLogica");
const cabecalhoTabela = document.getElementById("cabecalhoTabela");
const corpoTabela = document.getElementById("corpoTabela");
const classificacaoTabela = document.getElementById("classificacaoTabela");
const erroTabela = document.getElementById("erroTabelaVerdade");

const btnConjuntos = document.getElementById("btnSimuladorConjuntos");
const btnLogica = document.getElementById("btnSimuladorLogica");
const painelConjuntos = document.getElementById("painelConjuntos");
const painelTabela = document.getElementById("painelTabelaVerdade");

const EXPRESSAO_INICIAL = "p ∧ q";

// Alterna entre os dois simuladores.
function mostrarSimulador(tipo) {
    const mostrarConjuntos = tipo === "conjuntos";

    painelConjuntos.classList.toggle("d-none", !mostrarConjuntos);
    painelTabela.classList.toggle("d-none", mostrarConjuntos);

    btnConjuntos.classList.toggle("btn-primary", mostrarConjuntos);
    btnConjuntos.classList.toggle("btn-outline-primary", !mostrarConjuntos);

    btnLogica.classList.toggle("btn-primary", !mostrarConjuntos);
    btnLogica.classList.toggle("btn-outline-primary", mostrarConjuntos);

    btnConjuntos.setAttribute("aria-pressed", String(mostrarConjuntos));
    btnLogica.setAttribute("aria-pressed", String(!mostrarConjuntos));
}

btnConjuntos.addEventListener("click", () => {
    mostrarSimulador("conjuntos");
});

btnLogica.addEventListener("click", () => {
    mostrarSimulador("logica");
});

// Normaliza operadores alternativos para os símbolos usados internamente.
function normalizarExpressao(expressao) {
    return expressao
        .replace(/<->|↔/g, " ↔ ")
        .replace(/->|→/g, " → ")
        .replace(/&&|∧/g, " ∧ ")
        .replace(/\|\||∨/g, " ∨ ")
        .replace(/!|¬/g, " ¬ ")
        .replace(/\(/g, " ( ")
        .replace(/\)/g, " ) ")
        .trim();
}

// Converte a expressão em uma lista de símbolos.
function tokenizar(expressao) {
    const normalizada = normalizarExpressao(expressao);

    if (!normalizada) {
        throw new Error("Digite uma expressão lógica.");
    }

    const tokens = normalizada.split(/\s+/);
    const validos = new Set([
        "p", "q", "r", "¬", "∧", "∨", "→", "↔", "(", ")"
    ]);

    for (const token of tokens) {
        if (!validos.has(token)) {
            throw new Error(
                `Símbolo inválido: "${token}". Use p, q, r, operadores lógicos e parênteses.`
            );
        }
    }

    return tokens;
}

// Analisa a expressão respeitando a precedência dos operadores.
function analisarExpressao(tokens) {
    let posicao = 0;

    function atual() {
        return tokens[posicao];
    }

    function consumir(esperado) {
        if (atual() !== esperado) {
            throw new Error(`Era esperado o símbolo "${esperado}".`);
        }

        posicao++;
    }

    // Átomo: variável ou expressão entre parênteses.
    function analisarAtomo() {
        const token = atual();

        if (token === "(") {
            consumir("(");
            const resultado = analisarBicondicional();
            consumir(")");
            return resultado;
        }

        if (["p", "q", "r"].includes(token)) {
            posicao++;
            return { tipo: "variavel", nome: token };
        }

        throw new Error(
            "Expressão incompleta. Verifique as variáveis e os parênteses."
        );
    }

    // Negação: ¬p
    function analisarNegacao() {
        if (atual() === "¬") {
            consumir("¬");
            return {
                tipo: "negacao",
                operando: analisarNegacao()
            };
        }

        return analisarAtomo();
    }

    // Conjunção: p ∧ q
    function analisarConjuncao() {
        let esquerda = analisarNegacao();

        while (atual() === "∧") {
            consumir("∧");
            esquerda = {
                tipo: "conjuncao",
                esquerda,
                direita: analisarNegacao()
            };
        }

        return esquerda;
    }

    // Disjunção: p ∨ q
    function analisarDisjuncao() {
        let esquerda = analisarConjuncao();

        while (atual() === "∨") {
            consumir("∨");
            esquerda = {
                tipo: "disjuncao",
                esquerda,
                direita: analisarConjuncao()
            };
        }

        return esquerda;
    }

    // Condicional: p → q (associativa à direita).
    function analisarCondicional() {
        const esquerda = analisarDisjuncao();

        if (atual() === "→") {
            consumir("→");

            return {
                tipo: "condicional",
                esquerda,
                direita: analisarCondicional()
            };
        }

        return esquerda;
    }

    // Bicondicional: p ↔ q
    function analisarBicondicional() {
        let esquerda = analisarCondicional();

        while (atual() === "↔") {
            consumir("↔");

            esquerda = {
                tipo: "bicondicional",
                esquerda,
                direita: analisarCondicional()
            };
        }

        return esquerda;
    }

    const arvore = analisarBicondicional();

    if (posicao < tokens.length) {
        throw new Error(
            `Não foi possível interpretar o símbolo "${atual()}". Verifique a expressão.`
        );
    }

    return arvore;
}

// Obtém as variáveis utilizadas na expressão.
function obterVariaveis(arvore, variaveis = new Set()) {
    if (arvore.tipo === "variavel") {
        variaveis.add(arvore.nome);
    } else if (arvore.tipo === "negacao") {
        obterVariaveis(arvore.operando, variaveis);
    } else {
        obterVariaveis(arvore.esquerda, variaveis);
        obterVariaveis(arvore.direita, variaveis);
    }

    return [...variaveis].sort();
}

// Calcula o valor lógico de cada parte da expressão.
function avaliar(arvore, valores) {
    switch (arvore.tipo) {
        case "variavel":
            return valores[arvore.nome];

        case "negacao":
            return !avaliar(arvore.operando, valores);

        case "conjuncao":
            return avaliar(arvore.esquerda, valores) &&
                   avaliar(arvore.direita, valores);

        case "disjuncao":
            return avaliar(arvore.esquerda, valores) ||
                   avaliar(arvore.direita, valores);

        case "condicional":
            return !avaliar(arvore.esquerda, valores) ||
                    avaliar(arvore.direita, valores);

        case "bicondicional":
            return avaliar(arvore.esquerda, valores) ===
                   avaliar(arvore.direita, valores);

        default:
            throw new Error("Operação lógica desconhecida.");
    }
}

// Cria uma célula segura para a tabela.
function criarCelula(texto, cabecalho = false) {
    const celula = document.createElement(cabecalho ? "th" : "td");
    celula.textContent = texto;

    if (cabecalho) {
        celula.scope = "col";
    }

    return celula;
}

// Gera a tabela-verdade completa.
function gerarTabela(expressao) {
    const tokens = tokenizar(expressao);
    const arvore = analisarExpressao(tokens);
    const variaveis = obterVariaveis(arvore);

    if (variaveis.length === 0) {
        throw new Error("A expressão deve conter pelo menos uma variável: p, q ou r.");
    }

    const totalLinhas = 2 ** variaveis.length;
    const resultados = [];

    cabecalhoTabela.replaceChildren();
    corpoTabela.replaceChildren();

    // Colunas das variáveis.
    for (const variavel of variaveis) {
        cabecalhoTabela.appendChild(criarCelula(variavel, true));
    }

    // Coluna da expressão completa.
    cabecalhoTabela.appendChild(
        criarCelula(expressao.trim(), true)
    );

    // Gera todas as combinações de V e F.
    for (let i = 0; i < totalLinhas; i++) {
        const valores = {};

        variaveis.forEach((variavel, indice) => {
            valores[variavel] =
                (i & (1 << (variaveis.length - indice - 1))) === 0;
        });

        const resultado = avaliar(arvore, valores);
        resultados.push(resultado);

        const linha = document.createElement("tr");

        for (const variavel of variaveis) {
            linha.appendChild(
                criarCelula(valores[variavel] ? "V" : "F")
            );
        }

        const celulaResultado = criarCelula(resultado ? "V" : "F");
        celulaResultado.classList.add(
            resultado ? "table-success" : "table-danger"
        );

        linha.appendChild(celulaResultado);
        corpoTabela.appendChild(linha);
    }

    // Classifica a expressão pelos resultados obtidos.
    const todosVerdadeiros = resultados.every(Boolean);
    const todosFalsos = resultados.every(resultado => !resultado);

    let classificacao;

    if (todosVerdadeiros) {
        classificacao = "Tautologia: a expressão é verdadeira em todas as combinações.";
    } else if (todosFalsos) {
        classificacao = "Contradição: a expressão é falsa em todas as combinações.";
    } else {
        classificacao = "Contingência: a expressão é verdadeira em algumas combinações e falsa em outras.";
    }

    classificacaoTabela.textContent = classificacao;
    erroTabela.classList.add("d-none");
}

// Envia a expressão digitada para o simulador.
formTabela.addEventListener("submit", evento => {
    evento.preventDefault();

    try {
        gerarTabela(campoExpressao.value);
        erroTabela.classList.add("d-none");
    } catch (erro) {
        erroTabela.textContent = erro.message;
        erroTabela.classList.remove("d-none");
    }
});

// Botões para inserir operadores no campo de expressão.
document.querySelectorAll(".operador").forEach(botao => {
    botao.addEventListener("click", () => {
        const inicio = campoExpressao.selectionStart;
        const fim = campoExpressao.selectionEnd;
        const texto = campoExpressao.value;

        let insercao = botao.dataset.operador;

        if (botao.dataset.parenteses === "true") {
            insercao = "()";
            campoExpressao.value =
                texto.slice(0, inicio) + insercao + texto.slice(fim);
            campoExpressao.focus();
            campoExpressao.setSelectionRange(inicio + 1, inicio + 1);
            return;
        }

        campoExpressao.value =
            texto.slice(0, inicio) + insercao + texto.slice(fim);

        campoExpressao.focus();
        campoExpressao.setSelectionRange(
            inicio + insercao.length,
            inicio + insercao.length
        );
    });
});

// Restaura a expressão inicial.
document.getElementById("btnLimparTabela").addEventListener("click", () => {
    campoExpressao.value = EXPRESSAO_INICIAL;
    gerarTabela(EXPRESSAO_INICIAL);
    erroTabela.classList.add("d-none");
});

// O painel inicial continua sendo o simulador de conjuntos.
mostrarSimulador("conjuntos");
