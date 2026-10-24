
const form = document.querySelector("#formSimulador");

const inputUniverso = document.querySelector("#universo");
const inputA = document.querySelector("#conjuntoA");
const inputB = document.querySelector("#conjuntoB");
const selectOperacao = document.querySelector("#operacao");

const diagrama = document.querySelector("#diagramaVenn");
const expressaoResultado = document.querySelector("#expressaoResultado");
const cardinalidade = document.querySelector("#cardinalidade");
const explicacaoResultado = document.querySelector("#explicacaoResultado");
const rotuloOperacao = document.querySelector("#rotuloOperacao");

const mensagemErro = document.querySelector("#mensagemErro");
const btnLimpar = document.querySelector("#btnLimpar");

const valoresIniciais = {
    universo: "1, 2, 3, 4, 5, 6, 7, 8",
    A: "1, 2, 3, 4",
    B: "3, 4, 5, 6"
};

const operacoes = {
    uniao: {
        simbolo: "A ∪ B",
        descricao: "A união reúne os elementos que pertencem a A, a B ou a ambos."
    },
    intersecao: {
        simbolo: "A ∩ B",
        descricao: "A interseção contém somente os elementos comuns aos dois conjuntos."
    },
    diferencaAB: {
        simbolo: "A − B",
        descricao: "A diferença A − B contém os elementos de A que não pertencem a B."
    },
    diferencaBA: {
        simbolo: "B − A",
        descricao: "A diferença B − A contém os elementos de B que não pertencem a A."
    },
    complementoA: {
        simbolo: "Aᶜ",
        descricao: "O complemento de A contém os elementos do universo U que não pertencem a A."
    },
    complementoB: {
        simbolo: "Bᶜ",
        descricao: "O complemento de B contém os elementos do universo U que não pertencem a B."
    }
};

// Lê os elementos, remove espaços extras e elimina duplicatas.
function lerConjunto(valor) {
    if (valor.trim() === "") {
        return new Set();
    }

    const elementos = valor.split(",").map(elemento => elemento.trim());

    if (elementos.some(elemento => elemento === "")) {
        throw new Error(
            "Separe os elementos por vírgulas e não deixe elementos vazios."
        );
    }

    return new Set(elementos);
}

// União: elementos de A ou B.
function uniao(A, B) {
    return new Set([...A, ...B]);
}

// Interseção: elementos comuns a A e B.
function intersecao(A, B) {
    return new Set([...A].filter(elemento => B.has(elemento)));
}

// Diferença: elementos de A que não estão em B.
function diferenca(A, B) {
    return new Set([...A].filter(elemento => !B.has(elemento)));
}

// Complemento: elementos de U que não estão em A.
function complemento(A, U) {
    return diferenca(U, A);
}

function formatarConjunto(conjunto) {
    if (conjunto.size === 0) {
        return "∅";
    }

    return `{${[...conjunto].join(", ")}}`;
}

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[caractere]);
}

function obterResultado(A, B, U, operacao) {
    switch (operacao) {
        case "uniao":
            return uniao(A, B);

        case "intersecao":
            return intersecao(A, B);

        case "diferencaAB":
            return diferenca(A, B);

        case "diferencaBA":
            return diferenca(B, A);

        case "complementoA":
            return complemento(A, U);

        case "complementoB":
            return complemento(B, U);

        default:
            throw new Error("Selecione uma operação válida.");
    }
}

function desenharDiagrama(U, A, B, operacao) {
    const centroY = 165;
    const raio = 100;
    const centroA = 250;
    const centroB = 350;

    const xUniverso = 20;
    const yUniverso = 20;
    const larguraUniverso = 560;
    const alturaUniverso = 290;

    // Identifica a região de cada elemento.
    const somenteA = [...A].filter(
        elemento => !B.has(elemento)
    );

    const comuns = [...A].filter(
        elemento => B.has(elemento)
    );

    const somenteB = [...B].filter(
        elemento => !A.has(elemento)
    );

    const externos = [...U].filter(
        elemento => !A.has(elemento) && !B.has(elemento)
    );

    // Distribui os elementos em posições dentro de cada região.
    function desenharElementos(elementos, regiao) {
        const configuracoes = {
            A: { x: 205, y: 115, passoY: 30 },
            comum: { x: 300, y: 115, passoY: 30 },
            B: { x: 395, y: 115, passoY: 30 },
            externo: { x: 300, y: 280, passoY: 18 }
        };

        const config = configuracoes[regiao];

        return elementos.map((elemento, indice) => {
            let x = config.x;
            let y = config.y + indice * config.passoY;

            // Para muitos elementos, distribui em colunas.
            if (regiao === "externo") {
                x = 100 + (indice % 10) * 45;
                y = 280 + Math.floor(indice / 10) * 16;
            } else if (indice >= 5) {
                x += ((indice % 3) - 1) * 25;
                y = config.y + Math.floor(indice / 3) * 24;
            }

            return `
                <text
                    class="elemento"
                    x="${x}"
                    y="${y}"
                    font-size="14"
                >${escaparHTML(elemento)}</text>
            `;
        }).join("");
    }

    // Define qual região geométrica será destacada.
    let destaque = "";

    switch (operacao) {
        case "uniao":
            destaque = `
                <circle class="regiao-selecionada"
                    cx="${centroA}" cy="${centroY}" r="${raio}"/>
                <circle class="regiao-selecionada"
                    cx="${centroB}" cy="${centroY}" r="${raio}"/>
            `;
            break;

        case "intersecao":
            destaque = `
                <circle class="regiao-selecionada"
                    cx="${centroB}" cy="${centroY}" r="${raio}"
                    clip-path="url(#recorteA)"/>
            `;
            break;

        case "diferencaAB":
            destaque = `
                <circle class="regiao-selecionada"
                    cx="${centroA}" cy="${centroY}" r="${raio}"
                    mask="url(#mascaraAmenosB)"/>
            `;
            break;

        case "diferencaBA":
            destaque = `
                <circle class="regiao-selecionada"
                    cx="${centroB}" cy="${centroY}" r="${raio}"
                    mask="url(#mascaraBmenosA)"/>
            `;
            break;

        case "complementoA":
            destaque = `
                <rect class="regiao-selecionada"
                    x="${xUniverso}" y="${yUniverso}"
                    width="${larguraUniverso}" height="${alturaUniverso}"
                    mask="url(#mascaraComplementoA)"/>
            `;
            break;

        case "complementoB":
            destaque = `
                <rect class="regiao-selecionada"
                    x="${xUniverso}" y="${yUniverso}"
                    width="${larguraUniverso}" height="${alturaUniverso}"
                    mask="url(#mascaraComplementoB)"/>
            `;
            break;
    }

    diagrama.innerHTML = `
        <defs>
            <clipPath id="recorteA">
                <circle cx="${centroA}" cy="${centroY}" r="${raio}"/>
            </clipPath>

            <mask id="mascaraAmenosB" maskUnits="userSpaceOnUse"
                x="${xUniverso}" y="${yUniverso}"
                width="${larguraUniverso}" height="${alturaUniverso}">
                <rect x="${xUniverso}" y="${yUniverso}"
                    width="${larguraUniverso}" height="${alturaUniverso}"
                    fill="white"/>
                <circle cx="${centroB}" cy="${centroY}" r="${raio}"
                    fill="black"/>
            </mask>

            <mask id="mascaraBmenosA" maskUnits="userSpaceOnUse"
                x="${xUniverso}" y="${yUniverso}"
                width="${larguraUniverso}" height="${alturaUniverso}">
                <rect x="${xUniverso}" y="${yUniverso}"
                    width="${larguraUniverso}" height="${alturaUniverso}"
                    fill="white"/>
                <circle cx="${centroA}" cy="${centroY}" r="${raio}"
                    fill="black"/>
            </mask>

            <mask id="mascaraComplementoA" maskUnits="userSpaceOnUse"
                x="${xUniverso}" y="${yUniverso}"
                width="${larguraUniverso}" height="${alturaUniverso}">
                <rect x="${xUniverso}" y="${yUniverso}"
                    width="${larguraUniverso}" height="${alturaUniverso}"
                    fill="white"/>
                <circle cx="${centroA}" cy="${centroY}" r="${raio}"
                    fill="black"/>
            </mask>

            <mask id="mascaraComplementoB" maskUnits="userSpaceOnUse"
                x="${xUniverso}" y="${yUniverso}"
                width="${larguraUniverso}" height="${alturaUniverso}">
                <rect x="${xUniverso}" y="${yUniverso}"
                    width="${larguraUniverso}" height="${alturaUniverso}"
                    fill="white"/>
                <circle cx="${centroB}" cy="${centroY}" r="${raio}"
                    fill="black"/>
            </mask>
        </defs>

        <rect
            x="${xUniverso}" y="${yUniverso}"
            width="${larguraUniverso}" height="${alturaUniverso}"
            rx="10"
            class="universo-borda"
        />

        ${destaque}

        <circle class="circulo"
            cx="${centroA}" cy="${centroY}" r="${raio}"
            fill="#0d6efd" stroke="#0d6efd"/>

        <circle class="circulo"
            cx="${centroB}" cy="${centroY}" r="${raio}"
            fill="#6610f2" stroke="#6610f2"/>

        <text class="rotulo-conjunto" x="${centroA}" y="48">A</text>
        <text class="rotulo-conjunto" x="${centroB}" y="48">B</text>

        ${desenharElementos(somenteA, "A")}
        ${desenharElementos(comuns, "comum")}
        ${desenharElementos(somenteB, "B")}
        ${desenharElementos(externos, "externo")}

        <text x="35" y="40" font-size="12" fill="currentColor">U</text>
    `;
}

function simular() {
    mensagemErro.classList.add("d-none");
    mensagemErro.textContent = "";

    try {
        const U = lerConjunto(inputUniverso.value);
        const A = lerConjunto(inputA.value);
        const B = lerConjunto(inputB.value);

        // A e B precisam estar contidos no universo informado.
        const foraDoUniverso = [...A, ...B].filter(
            elemento => !U.has(elemento)
        );

        if (foraDoUniverso.length > 0) {
            throw new Error(
                "Todos os elementos de A e B precisam pertencer ao universo U. " +
                "Elementos fora de U: " +
                [...new Set(foraDoUniverso)].join(", ")
            );
        }

        const operacao = selectOperacao.value;
        const resultado = obterResultado(A, B, U, operacao);
        const dadosOperacao = operacoes[operacao];

        rotuloOperacao.textContent = dadosOperacao.simbolo;

        expressaoResultado.textContent =
            `${dadosOperacao.simbolo} = ${formatarConjunto(resultado)}`;

        cardinalidade.textContent =
            `Cardinalidade: ${resultado.size} elemento(s)`;

        explicacaoResultado.textContent = dadosOperacao.descricao;

        desenharDiagrama(U, A, B, operacao);
    } catch (erro) {
        mensagemErro.textContent = erro.message;
        mensagemErro.classList.remove("d-none");
    }
}

form.addEventListener("submit", evento => {
    evento.preventDefault();
    simular();
});

btnLimpar.addEventListener("click", () => {
    inputUniverso.value = valoresIniciais.universo;
    inputA.value = valoresIniciais.A;
    inputB.value = valoresIniciais.B;
    selectOperacao.value = "uniao";

    simular();
});

// Mostra o exemplo inicial quando a página abre.
simular();
