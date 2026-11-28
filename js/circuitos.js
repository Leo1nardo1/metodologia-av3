// =============================================
// LABORATÓRIO DE CIRCUITOS LÓGICOS
// Portas AND, OR e NOT
// =============================================

const painelCircuitos = document.getElementById("painelCircuitos");

const botaoSimuladorConjuntos = document.getElementById("btnSimuladorConjuntos");
const btnTabela = document.getElementById("btnSimuladorLogica");
const btnCircuitos = document.getElementById("btnSimuladorCircuitos");

const paineisSimulador = {
    conjuntos: document.getElementById("painelConjuntos"),
    tabela: document.getElementById("painelTabelaVerdade"),
    circuitos: painelCircuitos
};

const botoesSimulador = {
    conjuntos: botaoSimuladorConjuntos,
    tabela: btnTabela,
    circuitos: btnCircuitos
};


// =============================================
// NAVEGAÇÃO ENTRE OS SIMULADORES
// =============================================

function selecionarPainelSimulador(tipo) {

    Object.entries(paineisSimulador).forEach(([nome, painel]) => {

        painel.classList.toggle("d-none", nome !== tipo);

    });

    Object.entries(botoesSimulador).forEach(([nome, botao]) => {

        const ativo = nome === tipo;

        botao.classList.toggle("btn-primary", ativo);
        botao.classList.toggle("btn-outline-primary", !ativo);

        botao.setAttribute("aria-pressed", String(ativo));

    });

}

botaoSimuladorConjuntos.addEventListener("click", () => {
    selecionarPainelSimulador("conjuntos");
});
btnTabela.addEventListener("click", () => {
    selecionarPainelSimulador("tabela");
});

btnCircuitos.addEventListener("click", () => {
    selecionarPainelSimulador("circuitos");
});


// =============================================
// CONTROLES DO CIRCUITO
// =============================================

const entradaA = document.getElementById("entradaA");
const entradaB = document.getElementById("entradaB");

const controleEntradaB = document.getElementById("controleEntradaB");

const btnResetCircuito = document.getElementById("btnResetCircuito");

const estadoEntradaA = document.getElementById("estadoEntradaA");
const estadoEntradaB = document.getElementById("estadoEntradaB");

const descricaoPorta = document.getElementById("descricaoPorta");
const nomePortaAtiva = document.getElementById("nomePortaAtiva");

const expressaoCircuito = document.getElementById("expressaoCircuito");
const resultadoCircuito = document.getElementById("resultadoCircuito");
const explicacaoCircuito = document.getElementById("explicacaoCircuito");

const fioA = document.getElementById("fioA");
const fioB = document.getElementById("fioB");
const fioSaida = document.getElementById("fioSaida");

const rotuloEntradaA = document.getElementById("rotuloEntradaA");
const rotuloEntradaB = document.getElementById("rotuloEntradaB");

const lampadaCircuito = document.getElementById("lampadaCircuito");

const desenhosPortas = {
    and: document.getElementById("desenhoAnd"),
    or: document.getElementById("desenhoOr"),
    not: document.getElementById("desenhoNot")
};

const cabecalhoCircuito = document.getElementById("cabecalhoCircuito");
const corpoCircuito = document.getElementById("corpoCircuito");

let portaAtual = "and";


// =============================================
// CONFIGURAÇÃO DAS PORTAS
// =============================================

const configuracaoPortas = {

    and: {

        nome: "AND",
        simbolo: "∧",

        descricao:
            "A saída só fica ligada quando as duas entradas estão ligadas. É como dizer: preciso de A E B.",

        explicacao(a, b, saida) {

            if (saida) {
                return "A e B estão ligadas. Como as duas condições são verdadeiras, a porta AND libera a saída.";
            }

            if (!a && !b) {
                return "A e B estão desligadas. Como nenhuma das duas condições foi atendida, a saída fica desligada.";
            }

            return `A entrada ${a ? "A" : "B"} está ligada, mas a outra está desligada. A porta AND exige que as duas estejam ligadas.`;

        }

    },

    or: {

        nome: "OR",
        simbolo: "∨",

        descricao:
            "A saída fica ligada quando pelo menos uma entrada está ligada. É como dizer: preciso de A OU B, ou das duas.",

        explicacao(a, b, saida) {

            if (saida && a && b) {
                return "A e B estão ligadas. A porta OR precisa de pelo menos uma entrada ligada; ter as duas também produz uma saída verdadeira.";
            }

            if (saida) {
                return `A entrada ${a ? "A" : "B"} está ligada. Isso já é suficiente para a porta OR liberar a saída.`;
            }

            return "As duas entradas estão desligadas. Como nenhuma condição foi atendida, a saída da porta OR também fica desligada.";

        }

    },

    not: {

        nome: "NOT",
        simbolo: "¬",

        descricao:
            "A porta NOT trabalha com uma entrada e inverte seu estado: ligada vira desligada; desligada vira ligada.",

        explicacao(a, b, saida) {

            return a

                ? "A entrada A está ligada (1). A porta NOT inverte esse valor, então a saída fica desligada (0)."

                : "A entrada A está desligada (0). A porta NOT inverte esse valor, então a saída fica ligada (1).";

        }

    }

};


// =============================================
// OPERAÇÕES LÓGICAS
// =============================================

function formatarValor(valor) {

    return valor ? "V" : "F";

}


function calcularSaida(a, b) {

    if (portaAtual === "and") {
        return a && b;
    }

    if (portaAtual === "or") {
        return a || b;
    }

    return !a;

}


// =============================================
// CONSTRUÇÃO DA TABELA-VERDADE
// =============================================

function criarCelulaTabela(texto, cabecalho = false) {

    const elemento = document.createElement(
        cabecalho ? "th" : "td"
    );

    elemento.textContent = texto;

    if (cabecalho) {
        elemento.scope = "col";
    }

    return elemento;

}


function obterLinhasTabela() {

    if (portaAtual === "not") {

        return [

            { a: false, b: null, saida: true },

            { a: true, b: null, saida: false }

        ];

    }

    return [

        {
            a: false,
            b: false,
            saida: calcularSaida(false, false)
        },

        {
            a: false,
            b: true,
            saida: calcularSaida(false, true)
        },

        {
            a: true,
            b: false,
            saida: calcularSaida(true, false)
        },

        {
            a: true,
            b: true,
            saida: calcularSaida(true, true)
        }

    ];

}


function renderizarTabela(aAtual, bAtual) {

    const config = configuracaoPortas[portaAtual];

    const cabecalhos = portaAtual === "not"

        ? ["A", "¬A"]

        : ["A", "B", `A ${config.simbolo} B`];


    cabecalhoCircuito.replaceChildren();
    corpoCircuito.replaceChildren();


    const linhaCabecalho = document.createElement("tr");

    cabecalhos.forEach(texto => {

        linhaCabecalho.appendChild(
            criarCelulaTabela(texto, true)
        );

    });

    cabecalhoCircuito.appendChild(linhaCabecalho);


    obterLinhasTabela().forEach(linha => {

        const elementoLinha = document.createElement("tr");

        const atual =
            linha.a === aAtual &&
            (portaAtual === "not" || linha.b === bAtual);


        if (atual) {
            elementoLinha.classList.add("linha-circuito-atual");
        }


        elementoLinha.appendChild(
            criarCelulaTabela(formatarValor(linha.a))
        );


        if (portaAtual !== "not") {

            elementoLinha.appendChild(
                criarCelulaTabela(formatarValor(linha.b))
            );

        }


        const celulaSaida = criarCelulaTabela(
            formatarValor(linha.saida)
        );

        celulaSaida.classList.add(
            linha.saida
                ? "valor-verdadeiro"
                : "valor-falso-tabela"
        );

        elementoLinha.appendChild(celulaSaida);

        corpoCircuito.appendChild(elementoLinha);

    });

}


// =============================================
// ATUALIZAÇÃO VISUAL DO CIRCUITO
// =============================================

function atualizarFio(elemento, ativo) {

    elemento.classList.toggle("fio-ativo", ativo);

}


function atualizarCircuito() {

    const a = entradaA.checked;
    const b = entradaB.checked;

    const saida = calcularSaida(a, b);

    const config = configuracaoPortas[portaAtual];


    // Estados das entradas

    estadoEntradaA.textContent = a
        ? "Ligada (1)"
        : "Desligada (0)";

    estadoEntradaB.textContent = b
        ? "Ligada (1)"
        : "Desligada (0)";


    // Expressão lógica

    expressaoCircuito.textContent = portaAtual === "not"

        ? `¬A = ${formatarValor(saida)}`

        : `A ${config.simbolo} B = ${formatarValor(saida)}`;


    // Resultado

    resultadoCircuito.textContent = saida
        ? "VERDADEIRO (1)"
        : "FALSO (0)";

    resultadoCircuito.classList.toggle(
        "valor-verdadeiro",
        saida
    );

    resultadoCircuito.classList.toggle(
        "valor-falso",
        !saida
    );


    // Explicação

    explicacaoCircuito.textContent =
        config.explicacao(a, b, saida);


    // Fios e lâmpada

    atualizarFio(fioA, a);

    atualizarFio(
        fioB,
        portaAtual !== "not" && b
    );

    atualizarFio(fioSaida, saida);

    lampadaCircuito.classList.toggle(
        "lampada-acesa",
        saida
    );


    // Tabela-verdade

    renderizarTabela(a, b);

}


// =============================================
// SELEÇÃO DA PORTA LÓGICA
// =============================================

function selecionarPorta(porta) {

    if (!configuracaoPortas[porta]) {
        return;
    }

    portaAtual = porta;

    const config = configuracaoPortas[porta];


    // Botões

    document.querySelectorAll(".seletor-porta")
        .forEach(botao => {

            const ativo = botao.dataset.porta === porta;

            botao.classList.toggle(
                "btn-primary",
                ativo
            );

            botao.classList.toggle(
                "btn-outline-primary",
                !ativo
            );

            botao.setAttribute(
                "aria-pressed",
                String(ativo)
            );

        });


    // Desenhos das portas

    Object.entries(desenhosPortas).forEach(
        ([nome, desenho]) => {

            desenho.classList.toggle(
                "d-none",
                nome !== porta
            );

        }
    );


    // NOT usa apenas uma entrada

    const usaDuasEntradas = porta !== "not";

    controleEntradaB.classList.toggle(
        "d-none",
        !usaDuasEntradas
    );

    rotuloEntradaB.classList.toggle(
        "d-none",
        !usaDuasEntradas
    );

    fioB.classList.toggle(
        "d-none",
        !usaDuasEntradas
    );


    // Ajusta as conexões do desenho

    if (porta === "not") {

        rotuloEntradaA.setAttribute("y", "122");

        fioA.setAttribute(
            "d",
            "M55 115 H210"
        );

        fioSaida.setAttribute(
            "d",
            "M365 115 H475"
        );

    } else {

        rotuloEntradaA.setAttribute("y", "79");

        fioA.setAttribute(
            "d",
            "M55 85 H185"
        );

        fioB.setAttribute(
            "d",
            "M55 160 H185"
        );

        fioSaida.setAttribute(
            "d",
            "M340 115 H475"
        );

    }


    nomePortaAtiva.textContent =
        `PORTA ${config.nome}`;

    descricaoPorta.textContent =
        config.descricao;


    atualizarCircuito();

}


// =============================================
// EVENTOS
// =============================================

// Interruptores
entradaA.addEventListener("change", atualizarCircuito);
entradaB.addEventListener("change", atualizarCircuito);


// Seleção das portas
document.querySelectorAll(".seletor-porta")
    .forEach(botao => {

        botao.addEventListener("click", () => {

            selecionarPorta(botao.dataset.porta);

        });

    });


// Restaurar entradas
btnResetCircuito.addEventListener("click", () => {

    entradaA.checked = false;
    entradaB.checked = false;

    atualizarCircuito();

});


// =============================================
// INICIALIZAÇÃO
// =============================================

selecionarPorta("and");

selecionarPainelSimulador("conjuntos");