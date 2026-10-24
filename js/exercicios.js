

const questoes = [
    {
        categoria: "Tipos de conjuntos",
        enunciado: "Qual alternativa apresenta corretamente um conjunto unitário e um conjunto vazio?",
        conteudo: `
            <p>Um conjunto unitário possui exatamente um elemento.
            Um conjunto vazio não possui nenhum elemento.</p>
        `,
        alternativas: [
            "A = {1, 2} e B = {0}",
            "A = {5} e B = ∅",
            "A = ∅ e B = {1, 2, 3}",
            "A = {1, 2, 3} e B = {4, 5}"
        ],
        correta: 1,
        explicacao:
            "A = {5} é unitário porque possui um elemento. B = ∅ é vazio porque não possui elementos."
    },
    {
        categoria: "Pertinência e inclusão",
        enunciado: "Considere A = {1, 2} e B = {1, 2, 3}. Qual afirmação é verdadeira?",
        conteudo: `
            <p>Pertinência relaciona um elemento a um conjunto.
            Inclusão relaciona um conjunto a outro conjunto.</p>
        `,
        alternativas: [
            "3 ∈ A",
            "A ⊆ B",
            "B ⊆ A",
            "{3} ⊆ A"
        ],
        correta: 1,
        explicacao:
            "Todos os elementos de A também pertencem a B, portanto A está contido em B. O elemento 3 pertence a B, mas não a A."
    },
    {
        categoria: "União e interseção",
        enunciado: "Considere A = {1, 2, 3, 4} e B = {3, 4, 5, 6}. Quais são A ∪ B e A ∩ B?",
        conteudo: `
            <p>A união reúne os elementos que pertencem a pelo menos um dos conjuntos.
            A interseção reúne os elementos comuns aos dois conjuntos.</p>
        `,
        alternativas: [
            "A ∪ B = {3, 4} e A ∩ B = {1, 2, 5, 6}",
            "A ∪ B = {1, 2, 3, 4, 5, 6} e A ∩ B = {3, 4}",
            "A ∪ B = {1, 2, 5, 6} e A ∩ B = {3, 4}",
            "A ∪ B = {1, 2, 3, 4, 5, 6} e A ∩ B = ∅"
        ],
        correta: 1,
        explicacao:
            "A união contém todos os elementos de A e B, sem repetições. A interseção contém apenas os elementos comuns: 3 e 4."
    },
    {
        categoria: "Diferença e complemento",
        enunciado: "Considere U = {1, 2, 3, 4, 5, 6}, A = {1, 2, 3} e B = {3, 4}. Quais são A − B e o complemento de A em U?",
        conteudo: `
            <p>A − B contém os elementos de A que não pertencem a B.
            O complemento de A contém os elementos de U que não pertencem a A.</p>
        `,
        alternativas: [
            "A − B = {3} e Aᶜ = {1, 2, 3}",
            "A − B = {1, 2} e Aᶜ = {4, 5, 6}",
            "A − B = {1, 2, 3, 4} e Aᶜ = {4, 5, 6}",
            "A − B = {4} e Aᶜ = {1, 2, 3}"
        ],
        correta: 1,
        explicacao:
            "O elemento 3 está em A e B, então é retirado de A − B, restando {1, 2}. Os elementos de U que não estão em A são {4, 5, 6}."
    },
    {
        categoria: "Frases e proposições",
        enunciado: "Qual alternativa é uma proposição lógica?",
        conteudo: `
            <p>Uma proposição é uma sentença declarativa que pode ser classificada como verdadeira ou falsa.</p>
        `,
        alternativas: [
            "Qual é o seu nome?",
            "Feche a porta!",
            "O número 8 é par.",
            "Que dia bonito!"
        ],
        correta: 2,
        explicacao:
            "A frase 'O número 8 é par' é declarativa e tem valor lógico verdadeiro. Perguntas e ordens não são proposições."
    },
    {
        categoria: "Negação",
        enunciado: "Se p é verdadeira, qual é o valor lógico de ¬p?",
        conteudo: `
            <p>O símbolo ¬ representa a negação: inverte o valor lógico da proposição.</p>
        `,
        alternativas: [
            "Verdadeiro",
            "Falso",
            "Verdadeiro e falso ao mesmo tempo",
            "Não é possível determinar"
        ],
        correta: 1,
        explicacao:
            "A negação inverte o valor lógico. Se p é verdadeira, ¬p é falsa."
    },
    {
        categoria: "Conjunção",
        enunciado: "Se p é verdadeira e q é falsa, qual é o valor lógico de p ∧ q?",
        conteudo: `
            <p>O conectivo ∧ significa 'p e q'.</p>
        `,
        alternativas: [
            "Verdadeiro",
            "Falso",
            "Depende apenas de p",
            "A expressão não é uma proposição"
        ],
        correta: 1,
        explicacao:
            "A conjunção só é verdadeira quando ambas as proposições são verdadeiras. Como q é falsa, p ∧ q é falsa."
    },
    {
        categoria: "Disjunção",
        enunciado: "Se p é falsa e q é verdadeira, qual é o valor lógico de p ∨ q?",
        conteudo: `
            <p>O conectivo ∨ representa a disjunção inclusiva, lida como 'p ou q'.</p>
        `,
        alternativas: [
            "Verdadeiro",
            "Falso",
            "Não é possível determinar",
            "A expressão não possui valor lógico"
        ],
        correta: 0,
        explicacao:
            "A disjunção inclusiva é verdadeira quando pelo menos uma das proposições é verdadeira. Como q é verdadeira, p ∨ q é verdadeira."
    },
    {
        categoria: "Condicional",
        enunciado: "Se p e q são falsas, qual é o valor lógico de p → q?",
        conteudo: `
            <p>O condicional p → q é lido como 'se p, então q'.</p>
        `,
        alternativas: [
            "Verdadeiro",
            "Falso",
            "Depende apenas de q",
            "Não é uma proposição"
        ],
        correta: 0,
        explicacao:
            "O condicional só é falso quando p é verdadeira e q é falsa. Quando ambas são falsas, p → q é verdadeira."
    },
    {
        categoria: "Bicondicional",
        enunciado: "Se p e q são verdadeiras, qual é o valor lógico de p ↔ q?",
        conteudo: `
            <p>O bicondicional p ↔ q é lido como 'p se e somente se q'.</p>
        `,
        alternativas: [
            "Verdadeiro",
            "Falso",
            "Depende de uma terceira proposição",
            "Não possui valor lógico"
        ],
        correta: 0,
        explicacao:
            "O bicondicional é verdadeiro quando p e q têm o mesmo valor lógico. Como ambas são verdadeiras, p ↔ q é verdadeira."
    },
    {
        categoria: "Quantificador universal",
        enunciado: "Considere U = {1, 2, 3}. Qual sentença é verdadeira?",
        conteudo: `
            <p>O quantificador universal ∀ significa 'para todo'.</p>
        `,
        alternativas: [
            "∀x ∈ U, x > 2",
            "∀x ∈ U, x > 0",
            "∀x ∈ U, x = 2",
            "∀x ∈ U, x < 2"
        ],
        correta: 1,
        explicacao:
            "Todos os elementos de U (1, 2 e 3) são maiores que zero. As demais sentenças falham para pelo menos um elemento do universo."
    },
    {
        categoria: "Quantificador existencial",
        enunciado: "Considere U = {1, 2, 3, 4}. Qual sentença existencial é verdadeira?",
        conteudo: `
            <p>O quantificador existencial ∃ significa 'existe pelo menos um elemento'.</p>
        `,
        alternativas: [
            "∃x ∈ U, x > 4",
            "∃x ∈ U, x = 3",
            "∃x ∈ U, x < 0",
            "∃x ∈ U, x = 5"
        ],
        correta: 1,
        explicacao:
            "A sentença é verdadeira porque 3 pertence a U. Para o quantificador existencial ser verdadeiro, basta um elemento satisfazer a condição."
    },
    {
        categoria: "Tabelas-verdade",
        enunciado: "Qual é a coluna correta da tabela-verdade de p → q?",
        conteudo: `
            <p>Considere as combinações de valores na ordem apresentada.</p>
            <table class="table table-bordered tabela-verdade">
                <thead>
                    <tr><th>p</th><th>q</th><th>p → q</th></tr>
                </thead>
                <tbody>
                    <tr><td>V</td><td>V</td><td>?</td></tr>
                    <tr><td>V</td><td>F</td><td>?</td></tr>
                    <tr><td>F</td><td>V</td><td>?</td></tr>
                    <tr><td>F</td><td>F</td><td>?</td></tr>
                </tbody>
            </table>
        `,
        alternativas: [
            "V, V, F, F",
            "V, F, V, V",
            "F, V, V, V",
            "V, F, F, V"
        ],
        correta: 1,
        explicacao:
            "O condicional só é falso quando o antecedente p é verdadeiro e o consequente q é falso. A coluna correta é V, F, V, V."
    },
    {
        categoria: "Equivalências lógicas",
        enunciado: "Qual expressão é logicamente equivalente a p → q?",
        conteudo: `
            <p>Duas expressões são equivalentes quando apresentam os mesmos valores lógicos em todas as combinações possíveis.</p>
        `,
        alternativas: [
            "p ∧ q",
            "p ∨ q",
            "¬p ∨ q",
            "¬p ∧ q"
        ],
        correta: 2,
        explicacao:
            "O condicional p → q é equivalente a ¬p ∨ q. As duas expressões produzem a mesma coluna na tabela-verdade."
    },
    {
        categoria: "Contingência lógica",
        enunciado: "Uma expressão lógica é uma contingência quando...",
        conteudo: `
            <p>Uma tautologia é sempre verdadeira; uma contradição é sempre falsa.</p>
        `,
        alternativas: [
            "É verdadeira em todas as combinações.",
            "É falsa em todas as combinações.",
            "É verdadeira em algumas combinações e falsa em outras.",
            "Não possui valores lógicos."
        ],
        correta: 2,
        explicacao:
            "Uma contingência assume valores verdadeiros e falsos, dependendo dos valores das proposições que a compõem."
    }
];

const categoria = document.querySelector("#categoria");
const contador = document.querySelector("#contador");
const progresso = document.querySelector("#progresso");
const barraProgresso = document.querySelector("#barraProgresso");

const enunciado = document.querySelector("#enunciado");
const conteudoQuestao = document.querySelector("#conteudoQuestao");
const alternativas = document.querySelector("#alternativas");

const feedback = document.querySelector("#feedback");
const btnVerificar = document.querySelector("#btnVerificar");
const btnProxima = document.querySelector("#btnProxima");

const respondidas = document.querySelector("#respondidas");
const acertos = document.querySelector("#acertos");
const erros = document.querySelector("#erros");
const pontuacao = document.querySelector("#pontuacao");

const resultadoFinal = document.querySelector("#resultadoFinal");
const mensagemFinal = document.querySelector("#mensagemFinal");
const notaFinal = document.querySelector("#notaFinal");
const resumoFinal = document.querySelector("#resumoFinal");
const btnReiniciar = document.querySelector("#btnReiniciar");

let indiceAtual = 0;
let totalAcertos = 0;
let totalRespondidas = 0;
let respostaSelecionada = null;
let respostaVerificada = false;

function atualizarEstatisticas() {
    const percentual = totalRespondidas === 0
        ? 0
        : Math.round((totalAcertos / totalRespondidas) * 100);

    respondidas.textContent = `${totalRespondidas} de ${questoes.length}`;
    acertos.textContent = totalAcertos;
    erros.textContent = totalRespondidas - totalAcertos;
    pontuacao.textContent = `${percentual}%`;

    const percentualProgresso =
        (totalRespondidas / questoes.length) * 100;

    progresso.style.width = `${percentualProgresso}%`;
    barraProgresso.setAttribute(
        "aria-valuenow",
        String(Math.round(percentualProgresso))
    );
}

function renderizarQuestao() {
    const questao = questoes[indiceAtual];

    respostaSelecionada = null;
    respostaVerificada = false;

    categoria.textContent = questao.categoria;
    contador.textContent =
        `Questão ${indiceAtual + 1} de ${questoes.length}`;

    enunciado.textContent = questao.enunciado;
    conteudoQuestao.innerHTML = questao.conteudo;

    alternativas.innerHTML = "";

    questao.alternativas.forEach((texto, indice) => {
        const label = document.createElement("label");
        label.className = "alternativa";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "resposta";
        radio.value = indice;
        radio.className = "form-check-input";

        const textoAlternativa = document.createElement("span");
        textoAlternativa.textContent = texto;

        radio.addEventListener("change", () => {
            respostaSelecionada = indice;
            btnVerificar.disabled = false;
        });

        label.append(radio, textoAlternativa);
        alternativas.appendChild(label);
    });

    feedback.className = "mt-4 d-none";
    feedback.textContent = "";

    btnVerificar.classList.remove("d-none");
    btnVerificar.disabled = true;

    btnProxima.classList.add("d-none");
    btnProxima.textContent =
        indiceAtual === questoes.length - 1
            ? "Ver resultado"
            : "Próxima questão";
}

function verificarResposta() {
    if (respostaSelecionada === null || respostaVerificada) {
        return;
    }

    const questao = questoes[indiceAtual];
    const acertou = respostaSelecionada === questao.correta;

    respostaVerificada = true;
    totalRespondidas++;

    if (acertou) {
        totalAcertos++;
    }

    // Bloqueia alterações após a correção.
    const radios = alternativas.querySelectorAll("input");

    radios.forEach(radio => {
        radio.disabled = true;
    });

    const labels = alternativas.querySelectorAll(".alternativa");

    labels.forEach((label, indice) => {
        label.classList.add("bloqueada");

        if (indice === questao.correta) {
            label.classList.add("correta");
        } else if (indice === respostaSelecionada && !acertou) {
            label.classList.add("incorreta");
        }
    });

    feedback.className = acertou
        ? "feedback-box feedback-correto mt-4"
        : "feedback-box feedback-incorreto mt-4";

    const tituloFeedback = document.createElement("h3");
    tituloFeedback.className = "h6 fw-bold";
    tituloFeedback.textContent = acertou
        ? "Resposta correta!"
        : "Resposta incorreta.";

    const textoFeedback = document.createElement("p");
    textoFeedback.className = "mb-0";
    textoFeedback.textContent = questao.explicacao;

    feedback.replaceChildren(tituloFeedback, textoFeedback);

    btnVerificar.classList.add("d-none");
    btnProxima.classList.remove("d-none");

    atualizarEstatisticas();
}

function mostrarResultadoFinal() {
    document.querySelector("#areaQuestao").classList.add("d-none");
    feedback.classList.add("d-none");
    btnVerificar.classList.add("d-none");
    btnProxima.classList.add("d-none");

    resultadoFinal.classList.remove("d-none");

    const percentual = Math.round(
        (totalAcertos / questoes.length) * 100
    );

    notaFinal.textContent = `${totalAcertos}/${questoes.length}`;
    mensagemFinal.textContent = `Você acertou ${percentual}% das questões.`;

    if (percentual === 100) {
        resumoFinal.textContent =
            "Excelente! Você acertou todas as questões.";
    } else if (percentual >= 70) {
        resumoFinal.textContent =
            "Bom resultado! Revise as explicações das questões que errou.";
    } else {
        resumoFinal.textContent =
            "Revise o módulo Aprender e tente novamente para reforçar os conceitos.";
    }
}

function avancarQuestao() {
    if (!respostaVerificada) {
        return;
    }

    if (indiceAtual < questoes.length - 1) {
        indiceAtual++;
        renderizarQuestao();
    } else {
        mostrarResultadoFinal();
    }
}

function reiniciarQuestionario() {
    indiceAtual = 0;
    totalAcertos = 0;
    totalRespondidas = 0;
    respostaSelecionada = null;
    respostaVerificada = false;

    resultadoFinal.classList.add("d-none");
    document.querySelector("#areaQuestao").classList.remove("d-none");

    atualizarEstatisticas();
    renderizarQuestao();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

btnVerificar.addEventListener("click", verificarResposta);
btnProxima.addEventListener("click", avancarQuestao);
btnReiniciar.addEventListener("click", reiniciarQuestionario);

atualizarEstatisticas();
renderizarQuestao();
