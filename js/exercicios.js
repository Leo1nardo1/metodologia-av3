const questoes = [

    // =====================================
    // ETAPA 1 — AQUECIMENTO (QUESTÕES 1 A 8)
    // =====================================

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Conjuntos e elementos",

        enunciado: "Uma turma montou um grupo com os esportes que seus estudantes praticam: S = {futebol, vôlei, natação}. Qual alternativa apresenta um elemento desse conjunto?",

        conteudo: `
            <p>Um elemento é cada item que faz parte do conjunto.</p>
        `,

        alternativas: [
            "Basquete",
            "Vôlei",
            "Xadrez",
            "Patinação"
        ],

        correta: 1,

        explicacao:
            "Vôlei aparece dentro do conjunto S. Por isso, é um de seus elementos. Os outros esportes não foram listados."
    },

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Tipos de conjuntos",

        enunciado: "Qual alternativa apresenta um conjunto unitário e um conjunto vazio, nessa ordem?",

        conteudo: `
            <p>
                Um conjunto unitário tem exatamente um elemento.
                Um conjunto vazio não tem nenhum.
            </p>
        `,

        alternativas: [
            "A = {2, 4} e B = {7}",
            "A = {Lua} e B = ∅",
            "A = ∅ e B = {Sol, Lua}",
            "A = {1, 2, 3} e B = {4, 5}"
        ],

        correta: 1,

        explicacao:
            "A = {Lua} é unitário porque tem um único elemento. B = ∅ é vazio porque não tem elementos."
    },

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Pertinência",

        enunciado: "Considere C = {caderno, lápis, borracha}. Qual afirmação está correta?",

        conteudo: `
            <p>
                O símbolo ∈ significa “pertence”.
                O símbolo ∉ significa “não pertence”.
            </p>
        `,

        alternativas: [
            "régua ∈ C",
            "lápis ∉ C",
            "borracha ∈ C",
            "tesoura ∈ C"
        ],

        correta: 2,

        explicacao:
            "Borracha está listada no conjunto C, portanto borracha ∈ C. Régua e tesoura não aparecem no conjunto."
    },

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Inclusão",

        enunciado: "Considere A = {2, 4} e B = {2, 4, 6, 8}. Qual relação é verdadeira?",

        conteudo: `
            <p>
                Um conjunto está contido em outro quando todos os elementos
                do primeiro também aparecem no segundo.
            </p>
        `,

        alternativas: [
            "B ⊆ A",
            "A ⊆ B",
            "8 ∈ A",
            "6 ∈ A"
        ],

        correta: 1,

        explicacao:
            "Os elementos 2 e 4 de A também estão em B. Assim, A está contido em B: A ⊆ B."
    },

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Frases e proposições",

        enunciado: "Qual das frases abaixo é uma proposição lógica?",

        conteudo: `
            <p>
                Uma proposição é uma frase declarativa que pode ser
                classificada como verdadeira ou falsa.
            </p>
        `,

        alternativas: [
            "Você gosta de matemática?",
            "Feche o caderno!",
            "O número 12 é par.",
            "Que dia bonito!"
        ],

        correta: 2,

        explicacao:
            "“O número 12 é par” é uma afirmação que pode ser julgada verdadeira ou falsa. Perguntas e ordens não são proposições."
    },

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Negação",

        enunciado: "A frase p = “A biblioteca está aberta” é verdadeira. Qual é o valor lógico de ¬p?",

        conteudo: `
            <p>
                O símbolo ¬ significa NÃO. A negação troca o valor lógico:
                verdadeiro passa a falso e falso passa a verdadeiro.
            </p>
        `,

        alternativas: [
            "Verdadeiro",
            "Falso",
            "Verdadeiro e falso ao mesmo tempo",
            "Não é possível saber"
        ],

        correta: 1,

        explicacao:
            "Como p é verdadeira, sua negação ¬p — “A biblioteca não está aberta” — é falsa."
    },

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Conectivo E (∧)",

        enunciado: "Considere p verdadeira e q falsa. Qual é o valor lógico de p ∧ q?",

        conteudo: `
            <p>
                O conectivo E (∧) só produz verdadeiro quando
                as duas partes são verdadeiras.
            </p>
        `,

        alternativas: [
            "Verdadeiro",
            "Falso",
            "Depende apenas de p",
            "Não é uma proposição"
        ],

        correta: 1,

        explicacao:
            "Como q é falsa, as duas partes não são verdadeiras. Portanto, p ∧ q é falsa."
    },

    {
        etapa: "Aquecimento",
        nivel: "Básico",
        categoria: "Conectivo OU (∨)",

        enunciado: "Considere p falsa e q verdadeira. Qual é o valor lógico de p ∨ q?",

        conteudo: `
            <p>
                Na lógica, o OU (∨) é inclusivo:
                basta pelo menos uma das partes ser verdadeira.
            </p>
        `,

        alternativas: [
            "Verdadeiro",
            "Falso",
            "Depende apenas de p",
            "Não possui valor lógico"
        ],

        correta: 0,

        explicacao:
            "Como q é verdadeira, pelo menos uma das partes é verdadeira. Assim, p ∨ q é verdadeira."
    },


    // =====================================
    // ETAPA 2 — PRATICANDO (QUESTÕES 9 A 16)
    // =====================================

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "União e interseção",

        enunciado: "Em uma turma, A representa quem gosta de cinema e B representa quem gosta de música. Considere A = {Ana, Beto, Caio} e B = {Beto, Duda, Eva}. Quais são A ∪ B e A ∩ B?",

        conteudo: `
            <p>
                A união reúne todos os elementos, sem repetir.
                A interseção reúne apenas os elementos que aparecem
                nos dois conjuntos.
            </p>
        `,

        alternativas: [
            "A ∪ B = {Beto} e A ∩ B = {Ana, Caio, Duda, Eva}",

            "A ∪ B = {Ana, Beto, Caio, Duda, Eva} e A ∩ B = {Beto}",

            "A ∪ B = {Ana, Caio, Duda, Eva} e A ∩ B = ∅",

            "A ∪ B = {Ana, Beto, Caio} e A ∩ B = {Duda, Eva}"
        ],

        correta: 1,

        explicacao:
            "A união contém os cinco nomes, sem repetição. Beto aparece nos dois conjuntos, então A ∩ B = {Beto}."
    },

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "Diferença entre conjuntos",

        enunciado: "Considere A = {1, 2, 3, 4} e B = {3, 4, 5}. Qual é o resultado de A − B?",

        conteudo: `
            <p>
                A diferença A − B guarda os elementos que estão em A,
                mas não estão em B.
            </p>
        `,

        alternativas: [
            "{3, 4}",
            "{1, 2}",
            "{1, 2, 3, 4, 5}",
            "{5}"
        ],

        correta: 1,

        explicacao:
            "Os números 3 e 4 aparecem em B, então são retirados de A. Restam 1 e 2."
    },

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "Complemento",

        enunciado: "O universo é U = {a, b, c, d, e} e A = {a, c, e}. Qual é o complemento de A em U?",

        conteudo: `
            <p>
                O complemento de A contém os elementos do universo U
                que não pertencem a A.
            </p>
        `,

        alternativas: [
            "{a, c, e}",
            "{a, b, c, d, e}",
            "{b, d}",
            "∅"
        ],

        correta: 2,

        explicacao:
            "Os elementos de U que ficaram fora de A são b e d. Portanto, Aᶜ = {b, d}."
    },

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "Quantificador universal",

        enunciado: "Considere U = {2, 4, 6, 8}. Qual afirmação com o quantificador universal é verdadeira?",

        conteudo: `
            <p>
                O símbolo ∀ significa “para todo”.
                A afirmação só é verdadeira quando todos os elementos
                atendem à condição.
            </p>

            <p>
                <strong>Dica:</strong> para mostrar que uma afirmação com ∀
                é falsa, basta encontrar um elemento que não cumpra
                a condição. Ele é chamado de contraexemplo.
            </p>
        `,

        alternativas: [
            "∀x ∈ U, x é ímpar",
            "∀x ∈ U, x é par",
            "∀x ∈ U, x é maior que 10",
            "∀x ∈ U, x = 4"
        ],

        correta: 1,

        explicacao:
            "Todos os elementos de U — 2, 4, 6 e 8 — são pares. Por isso, a afirmação é verdadeira."
    },

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "Quantificador existencial",

        enunciado: "Considere U = {1, 3, 5, 8}. Qual afirmação com o quantificador existencial é verdadeira?",

        conteudo: `
            <p>
                O símbolo ∃ significa “existe pelo menos um”.
                Basta um elemento atender à condição.
            </p>
        `,

        alternativas: [
            "∃x ∈ U, x é menor que 0",
            "∃x ∈ U, x é par",
            "∃x ∈ U, x = 2",
            "∃x ∈ U, x é maior que 10"
        ],

        correta: 1,

        explicacao:
            "O número 8 pertence a U e é par. Basta encontrar um elemento que atenda à condição para a afirmação existencial ser verdadeira."
    },

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "Condicional (→)",

        enunciado: "Considere p verdadeira e q falsa. Qual é o valor lógico de p → q?",

        conteudo: `
            <p>
                O condicional é lido “se p, então q”.
                Ele só é falso quando p é verdadeira e q é falsa.
            </p>
        `,

        alternativas: [
            "Verdadeiro",
            "Falso",
            "Sempre verdadeiro",
            "Não pode ser calculado"
        ],

        correta: 1,

        explicacao:
            "Esta é justamente a única combinação que torna o condicional falso: a condição p acontece, mas a consequência q não acontece."
    },

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "Bicondicional (↔)",

        enunciado: "Considere p verdadeira e q falsa. Qual é o valor lógico de p ↔ q?",

        conteudo: `
            <p>
                O bicondicional é lido “p se, e somente se, q”.
                Ele é verdadeiro quando as duas partes têm o mesmo
                valor lógico.
            </p>
        `,

        alternativas: [
            "Verdadeiro",
            "Falso",
            "Sempre verdadeiro",
            "Não possui valor lógico"
        ],

        correta: 1,

        explicacao:
            "Uma parte é verdadeira e a outra é falsa. Como os valores são diferentes, p ↔ q é falso."
    },

    {
        etapa: "Praticando",
        nivel: "Intermediário",
        categoria: "Tabela-verdade: conjunção",

        enunciado: "Qual sequência completa a coluna de p ∧ q na tabela-verdade?",

        conteudo: `
            <p>Use a ordem das linhas apresentada:</p>

            <div class="table-responsive">
                <table class="table table-bordered table-sm text-center align-middle">

                    <thead>
                        <tr>
                            <th>p</th>
                            <th>q</th>
                            <th>p ∧ q</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr><td>V</td><td>V</td><td>?</td></tr>
                        <tr><td>V</td><td>F</td><td>?</td></tr>
                        <tr><td>F</td><td>V</td><td>?</td></tr>
                        <tr><td>F</td><td>F</td><td>?</td></tr>
                    </tbody>

                </table>
            </div>
        `,

        alternativas: [
            "V, V, F, F",
            "V, F, F, F",
            "F, V, V, V",
            "V, F, V, F"
        ],

        correta: 1,

        explicacao:
            "A conjunção só é verdadeira na primeira linha, quando p e q são verdadeiras. Nas outras três linhas, pelo menos uma é falsa."
    },


    // =====================================
    // ETAPA 3 — DESAFIO (QUESTÕES 17 A 24)
    // =====================================

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Tabela-verdade: condicional",

        enunciado: "Qual é a sequência correta da coluna de p → q?",

        conteudo: `
            <p>Considere as quatro combinações possíveis:</p>

            <div class="table-responsive">
                <table class="table table-bordered table-sm text-center align-middle">

                    <thead>
                        <tr>
                            <th>p</th>
                            <th>q</th>
                            <th>p → q</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr><td>V</td><td>V</td><td>?</td></tr>
                        <tr><td>V</td><td>F</td><td>?</td></tr>
                        <tr><td>F</td><td>V</td><td>?</td></tr>
                        <tr><td>F</td><td>F</td><td>?</td></tr>
                    </tbody>

                </table>
            </div>
        `,

        alternativas: [
            "V, V, F, F",
            "V, F, V, V",
            "F, V, V, V",
            "V, F, F, V"
        ],

        correta: 1,

        explicacao:
            "O condicional só é falso quando p é verdadeira e q é falsa. Por isso, a sequência é V, F, V, V."
    },

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Tautologia",

        enunciado: "A expressão p ∨ ¬p é verdadeira em todas as possibilidades. Como ela é classificada?",

        conteudo: `
            <p>
                Uma tautologia é uma expressão que termina sempre
                com valor verdadeiro, qualquer que seja a combinação
                dos valores iniciais.
            </p>
        `,

        alternativas: [
            "Contradição",
            "Contingência",
            "Tautologia",
            "Sentença aberta"
        ],

        correta: 2,

        explicacao:
            "Ou p é verdadeira, ou sua negação é verdadeira. Assim, p ∨ ¬p sempre resulta em verdadeiro: é uma tautologia."
    },

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Contradição",

        enunciado: "A expressão p ∧ ¬p é falsa em todas as possibilidades. Como ela é classificada?",

        conteudo: `
            <p>
                Uma contradição é uma expressão que termina sempre
                com valor falso.
            </p>
        `,

        alternativas: [
            "Tautologia",
            "Contradição",
            "Contingência",
            "Equivalência"
        ],

        correta: 1,

        explicacao:
            "Uma proposição e sua negação não podem ser verdadeiras ao mesmo tempo. Portanto, p ∧ ¬p sempre resulta em falso: é uma contradição."
    },

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Contingência",

        enunciado: "A expressão p ∨ q pode ser verdadeira ou falsa, dependendo dos valores de p e q. Como ela é classificada?",

        conteudo: `
            <p>
                Uma contingência apresenta pelo menos um resultado
                verdadeiro e pelo menos um resultado falso
                na tabela-verdade.
            </p>
        `,

        alternativas: [
            "Tautologia",
            "Contradição",
            "Contingência",
            "Conjunto vazio"
        ],

        correta: 2,

        explicacao:
            "p ∨ q é verdadeira quando pelo menos uma das proposições é verdadeira, mas é falsa quando ambas são falsas. Por isso, é uma contingência."
    },

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Equivalência: dupla negação",

        enunciado: "Qual expressão é equivalente a ¬(¬p)?",

        conteudo: `
            <p>
                Negar uma proposição duas vezes faz com que ela
                volte ao seu valor lógico original.
            </p>
        `,

        alternativas: [
            "¬p",
            "p",
            "p ∧ ¬p",
            "p ∨ ¬p"
        ],

        correta: 1,

        explicacao:
            "A dupla negação cancela as duas negações: ¬(¬p) ≡ p. As duas expressões sempre têm o mesmo valor lógico."
    },

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Equivalência: Lei de De Morgan",

        enunciado: "Qual expressão é equivalente a ¬(p ∧ q)?",

        conteudo: `
            <p>
                Uma das leis de De Morgan mostra como a negação
                de uma conjunção pode ser reescrita usando
                o conectivo OU.
            </p>
        `,

        alternativas: [
            "¬p ∧ ¬q",
            "¬p ∨ ¬q",
            "p ∧ q",
            "p ∨ q"
        ],

        correta: 1,

        explicacao:
            "Pela Lei de De Morgan, negar p E q equivale a negar p OU negar q: ¬(p ∧ q) ≡ ¬p ∨ ¬q."
    },

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Equivalência: condicional",

        enunciado: "Qual expressão produz os mesmos resultados que o condicional p → q em todas as linhas da tabela-verdade?",

        conteudo: `
            <p>
                Expressões equivalentes possuem a mesma coluna
                de resultados na tabela-verdade.
            </p>
        `,

        alternativas: [
            "p ∧ q",
            "p ∨ q",
            "¬p ∨ q",
            "¬p ∧ q"
        ],

        correta: 2,

        explicacao:
            "O condicional p → q é logicamente equivalente a ¬p ∨ q. As duas expressões têm os mesmos resultados em todas as combinações."
    },

    {
        etapa: "Desafio",
        nivel: "Avançado",
        categoria: "Tabela-verdade: bicondicional",

        enunciado: "Qual é a sequência correta da coluna de p ↔ q?",

        conteudo: `
            <p>
                O bicondicional é verdadeiro quando p e q
                têm o mesmo valor lógico.
            </p>

            <div class="table-responsive">
                <table class="table table-bordered table-sm text-center align-middle">

                    <thead>
                        <tr>
                            <th>p</th>
                            <th>q</th>
                            <th>p ↔ q</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr><td>V</td><td>V</td><td>?</td></tr>
                        <tr><td>V</td><td>F</td><td>?</td></tr>
                        <tr><td>F</td><td>V</td><td>?</td></tr>
                        <tr><td>F</td><td>F</td><td>?</td></tr>
                    </tbody>

                </table>
            </div>
        `,

        alternativas: [
            "V, F, F, V",
            "V, V, F, F",
            "F, V, V, F",
            "V, F, V, F"
        ],

        correta: 0,

        explicacao:
            "Na primeira e na última linha, p e q têm valores iguais, então o resultado é verdadeiro. Nas duas linhas do meio, os valores são diferentes, então o resultado é falso."
    }

];


// =====================================
// ELEMENTOS DO HTML
// =====================================

const etapa = document.querySelector("#etapa");
const nivel = document.querySelector("#nivel");
const categoria = document.querySelector("#categoria");
const contador = document.querySelector("#contador");

const progresso = document.querySelector("#progresso");
const barraProgresso = document.querySelector("#barraProgresso");

const enunciado = document.querySelector("#tituloQuestao");
const conteudoQuestao = document.querySelector("#conteudoQuestao");
const alternativas = document.querySelector("#alternativas");

const feedback = document.querySelector("#feedback");

const btnVerificar = document.querySelector("#btnVerificar");
const btnProxima = document.querySelector("#btnProxima");

const respondidas = document.querySelector("#respondidas");
const acertos = document.querySelector("#acertos");
const erros = document.querySelector("#erros");
const pontuacao = document.querySelector("#pontuacao");

const areaQuestao = document.querySelector("#areaQuestao");
const resultadoFinal = document.querySelector("#resultadoFinal");

const mensagemFinal = document.querySelector("#mensagemFinal");
const notaFinal = document.querySelector("#notaFinal");
const resumoFinal = document.querySelector("#resumoFinal");

const btnReiniciar = document.querySelector("#btnReiniciar");


// =====================================
// ESTADO DO QUESTIONÁRIO
// =====================================

let indiceAtual = 0;

let totalAcertos = 0;
let totalRespondidas = 0;

let respostaSelecionada = null;
let respostaVerificada = false;

let respostasCorretas = [];


// =====================================
// ESTATÍSTICAS E PROGRESSO
// =====================================

function atualizarEstatisticas() {

    const percentual = totalRespondidas === 0
        ? 0
        : Math.round((totalAcertos / totalRespondidas) * 100);

    respondidas.textContent =
        `${totalRespondidas} de ${questoes.length}`;

    acertos.textContent = totalAcertos;

    erros.textContent =
        totalRespondidas - totalAcertos;

    pontuacao.textContent =
        `${percentual}%`;


    const percentualProgresso =
        (totalRespondidas / questoes.length) * 100;

    progresso.style.width =
        `${percentualProgresso}%`;

    barraProgresso.setAttribute(
        "aria-valuenow",
        String(Math.round(percentualProgresso))
    );

}


// =====================================
// IDENTIFICAR ETAPA
// =====================================

function obterEtapa(indice) {

    if (indice < 8) {
        return "ETAPA 1 · AQUECIMENTO";
    }

    if (indice < 16) {
        return "ETAPA 2 · PRATICANDO";
    }

    return "ETAPA 3 · DESAFIO";

}


// =====================================
// EXIBIR QUESTÃO
// =====================================

function renderizarQuestao() {

    const questao = questoes[indiceAtual];

    respostaSelecionada = null;
    respostaVerificada = false;


    etapa.textContent = obterEtapa(indiceAtual);

    nivel.textContent = questao.nivel;

    categoria.textContent = questao.categoria;

    contador.textContent =
        `Questão ${indiceAtual + 1} de ${questoes.length}`;

    enunciado.textContent = questao.enunciado;

    conteudoQuestao.innerHTML = questao.conteudo;


    alternativas.replaceChildren();


    // Criar alternativas dinamicamente

    questao.alternativas.forEach((texto, indice) => {

        const label = document.createElement("label");

        label.className = "opcao-resposta";


        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "resposta";
        radio.value = String(indice);

        radio.setAttribute(
            "aria-label",
            `Alternativa ${String.fromCharCode(65 + indice)}: ${texto}`
        );


        const letra = document.createElement("span");

        letra.className = "opcao-letra";

        letra.textContent =
            String.fromCharCode(65 + indice);


        const textoAlternativa = document.createElement("span");

        textoAlternativa.className = "opcao-texto";

        textoAlternativa.textContent = texto;


        // Quando o aluno seleciona uma alternativa

        radio.addEventListener("change", () => {

            respostaSelecionada = indice;

            btnVerificar.disabled = false;

            alternativas
                .querySelectorAll(".opcao-resposta")
                .forEach(opcao => {
                    opcao.classList.remove("selecionada");
                });

            label.classList.add("selecionada");

        });


        label.append(
            radio,
            letra,
            textoAlternativa
        );

        alternativas.appendChild(label);

    });


    // Limpar feedback anterior

    feedback.className = "feedback-box d-none";

    feedback.replaceChildren();


    btnVerificar.classList.remove("d-none");

    btnVerificar.disabled = true;

    btnProxima.classList.add("d-none");


    btnProxima.textContent =
        indiceAtual === questoes.length - 1
            ? "Ver resultado →"
            : "Próxima questão →";

}


// =====================================
// CORRIGIR RESPOSTA
// =====================================

function verificarResposta() {

    if (
        respostaSelecionada === null ||
        respostaVerificada
    ) {
        return;
    }


    const questao = questoes[indiceAtual];

    const acertou =
        respostaSelecionada === questao.correta;


    respostasCorretas[indiceAtual] = acertou;

    respostaVerificada = true;

    totalRespondidas++;


    if (acertou) {
        totalAcertos++;
    }


    // Impedir mudanças depois da correção

    const opcoes = alternativas.querySelectorAll(
        ".opcao-resposta"
    );


    opcoes.forEach((opcao, indice) => {

        const radio = opcao.querySelector("input");

        radio.disabled = true;

        opcao.classList.add("bloqueada");


        if (indice === questao.correta) {

            opcao.classList.add("correta");

        } else if (indice === respostaSelecionada) {

            opcao.classList.add("incorreta");

        }

    });


    // Mostrar explicação

    feedback.className = acertou
        ? "feedback-box feedback-correto"
        : "feedback-box feedback-incorreto";


    const tituloFeedback = document.createElement("h3");

    tituloFeedback.textContent = acertou
        ? "Muito bem! Resposta correta."
        : "Quase! Vamos entender.";


    const textoFeedback = document.createElement("p");

    textoFeedback.textContent = questao.explicacao;


    feedback.replaceChildren(
        tituloFeedback,
        textoFeedback
    );


    btnVerificar.classList.add("d-none");

    btnProxima.classList.remove("d-none");


    atualizarEstatisticas();

}


// =====================================
// RESULTADOS POR ETAPA
// =====================================

function contarAcertosDaEtapa(inicio, fim) {

    return respostasCorretas
        .slice(inicio, fim)
        .filter(Boolean)
        .length;

}


// =====================================
// RESULTADO FINAL
// =====================================

function mostrarResultadoFinal() {

    areaQuestao.classList.add("d-none");

    feedback.classList.add("d-none");

    btnVerificar.classList.add("d-none");

    btnProxima.classList.add("d-none");

    resultadoFinal.classList.remove("d-none");


    const percentual = Math.round(
        (totalAcertos / questoes.length) * 100
    );


    notaFinal.textContent =
        `${totalAcertos}/${questoes.length}`;


    mensagemFinal.textContent =
        `Você acertou ${totalAcertos} de ${questoes.length} questões (${percentual}%).`;


    const resultadoPorEtapa = [

        `Aquecimento: ${contarAcertosDaEtapa(0, 8)}/8`,

        `Praticando: ${contarAcertosDaEtapa(8, 16)}/8`,

        `Desafio: ${contarAcertosDaEtapa(16, 24)}/8`

    ].join(" · ");


    if (percentual === 100) {

        resumoFinal.textContent =
            `Excelente! Você acertou todas as questões. ${resultadoPorEtapa}.`;

    } else if (percentual >= 70) {

        resumoFinal.textContent =
            `Ótimo trabalho! Reveja as explicações das questões que errou. ${resultadoPorEtapa}.`;

    } else {

        resumoFinal.textContent =
            `Continue praticando: revise os conteúdos na página Aprender e tente novamente. ${resultadoPorEtapa}.`;

    }

}


// =====================================
// AVANÇAR QUESTÃO
// =====================================

function avancarQuestao() {

    if (!respostaVerificada) {
        return;
    }


    if (indiceAtual < questoes.length - 1) {

        indiceAtual++;

        renderizarQuestao();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        mostrarResultadoFinal();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


// =====================================
// REINICIAR QUESTIONÁRIO
// =====================================

function reiniciarQuestionario() {

    indiceAtual = 0;

    totalAcertos = 0;
    totalRespondidas = 0;

    respostaSelecionada = null;
    respostaVerificada = false;

    respostasCorretas = [];


    resultadoFinal.classList.add("d-none");

    areaQuestao.classList.remove("d-none");


    atualizarEstatisticas();

    renderizarQuestao();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================
// EVENTOS
// =====================================

btnVerificar.addEventListener(
    "click",
    verificarResposta
);

btnProxima.addEventListener(
    "click",
    avancarQuestao
);

btnReiniciar.addEventListener(
    "click",
    reiniciarQuestionario
);


// =====================================
// INICIALIZAÇÃO
// =====================================

atualizarEstatisticas();

renderizarQuestao();