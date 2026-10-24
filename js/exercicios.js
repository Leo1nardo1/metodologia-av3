
const questoes = [
    {
        categoria: "Teoria dos conjuntos",
        enunciado: "Qual é a interseção dos conjuntos A e B?",
        conteudo: `
            <p>Considere:</p>
            <p><strong>A = {1, 2, 3, 4}</strong></p>
            <p><strong>B = {3, 4, 5, 6}</strong></p>
        `,
        alternativas: [
            "A ∪ B = {1, 2, 3, 4, 5, 6}",
            "A ∩ B = {3, 4}",
            "A ∩ B = {1, 2}",
            "A ∩ B = {5, 6}"
        ],
        correta: 1,
        explicacao:
            "A interseção contém os elementos que aparecem nos dois conjuntos. " +
            "Os elementos comuns a A e B são 3 e 4."
    },
    {
        categoria: "Operações entre conjuntos",
        enunciado: "Considere U = {1, 2, 3, 4, 5} e A = {1, 3, 5}. Qual é o complemento de A em U?",
        conteudo: `
            <p>O complemento de A contém os elementos de U que não pertencem a A.</p>
        `,
        alternativas: [
            "{1, 3, 5}",
            "{1, 2, 3, 4, 5}",
            "{2, 4}",
            "{2, 3, 4}"
        ],
        correta: 2,
        explicacao:
            "Retirando de U os elementos 1, 3 e 5, restam 2 e 4. " +
            "Portanto, o complemento de A é {2, 4}."
    },
    {
        categoria: "Frases e proposições",
        enunciado: "Qual das alternativas é uma proposição lógica?",
        conteudo: `
            <p>Uma proposição é uma sentença declarativa à qual se pode atribuir
            um valor lógico: verdadeiro ou falso.</p>
        `,
        alternativas: [
            "Qual é a sua idade?",
            "Feche a janela!",
            "O número 8 é par.",
            "Estude matemática."
        ],
        correta: 2,
        explicacao:
            "A frase 'O número 8 é par' é declarativa e possui valor lógico verdadeiro. " +
            "Perguntas e ordens não são proposições."
    },
    {
        categoria: "Quantificadores",
        enunciado: "Qual símbolo representa o quantificador universal?",
        conteudo: `
            <p>Os quantificadores indicam se uma propriedade vale para todos
            os elementos de um universo ou para pelo menos um deles.</p>
        `,
        alternativas: [
            "∃ — existe pelo menos um",
            "∀ — para todo",
            "∈ — pertence a",
            "∧ — e"
        ],
        correta: 1,
        explicacao:
            "O símbolo ∀ significa 'para todo' e representa o quantificador universal. " +
            "O símbolo ∃ representa o quantificador existencial."
    },
    {
        categoria: "Conectivos lógicos",
        enunciado: "Se p é verdadeira e q é falsa, qual é o valor lógico de p ∧ q?",
        conteudo: `
            <p>O conectivo ∧ representa a conjunção, lida como 'p e q'.</p>
            <p>Considere: <strong>p = V</strong> e <strong>q = F</strong>.</p>
        `,
        alternativas: [
            "Verdadeiro",
            "Falso",
            "Não é possível determinar",
            "A expressão não é uma proposição"
        ],
        correta: 1,
        explicacao:
            "A conjunção só é verdadeira quando ambas as proposições são verdadeiras. " +
            "Como q é falsa, p ∧ q é falsa."
    },
    {
        categoria: "Conectivos lógicos",
        enunciado: "Se p e q são falsas, qual é o valor lógico de p → q?",
        conteudo: `
            <p>O condicional p → q é lido como 'se p, então q'.</p>
        `,
        alternativas: [
            "Verdadeiro",
            "Falso",
            "Depende do valor de p apenas",
            "Não possui valor lógico"
        ],
        correta: 0,
        explicacao:
            "O condicional só é falso quando p é verdadeira e q é falsa. " +
            "Quando ambas são falsas, p → q é verdadeiro."
    },
    {
        categoria: "Tabelas-verdade",
        enunciado: "Em qual linha a disjunção p ∨ q é falsa?",
        conteudo: `
            <p>A disjunção ∨ representa 'p ou q'. Observe a tabela:</p>

            <table class="tabela-verdade">
                <thead>
                    <tr><th>p</th><th>q</th><th>p ∨ q</th></tr>
                </thead>
                <tbody>
                    <tr><td>V</td><td>V</td><td>V</td></tr>
                    <tr><td>V</td><td>F</td><td>V</td></tr>
                    <tr><td>F</td><td>V</td><td>V</td></tr>
                    <tr><td>F</td><td>F</td><td>F</td></tr>
                </tbody>
            </table>
        `,
        alternativas: [
            "Quando p e q são verdadeiras",
            "Quando p é verdadeira e q é falsa",
            "Quando p é falsa e q é verdadeira",
            "Quando p e q são falsas"
        ],
        correta: 3,
        explicacao:
            "A disjunção inclusiva é verdadeira quando pelo menos uma proposição é verdadeira. " +
            "Ela só é falsa quando p e q são ambas falsas."
    },
    {
        categoria: "Equivalências lógicas",
        enunciado: "Qual expressão é logicamente equivalente a p → q?",
        conteudo: `
            <p>Duas expressões são logicamente equivalentes quando apresentam
            o mesmo valor lógico para todas as combinações possíveis de valores
            das proposições.</p>
        `,
        alternativas: [
            "p ∧ q",
            "p ∨ q",
            "¬p ∨ q",
            "¬p ∧ q"
        ],
        correta: 2,
        explicacao:
            "O condicional p → q é logicamente equivalente a ¬p ∨ q. " +
            "As duas expressões possuem os mesmos valores na tabela-verdade."
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
