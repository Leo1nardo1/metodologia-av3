# Modelagem-Projeto-AV3 — TautoLab

Aplicação web educativa para apoiar o aprendizado de conceitos de Teoria dos Conjuntos e Lógica Matemática por meio de explicações, exercícios, simuladores e um jogo.

## Estrutura do projeto

```text
Modelagem-Projeto-AV3/
├── index.html             # Página inicial e conteúdos de aprendizagem
├── exercicios.html        # Questionário interativo
├── simulador.html         # Simulador de conjuntos e tabelas-verdade
├── jogo.html              # Jogo de famílias numéricas
├── css/
│   ├── style.css          # Estilos compartilhados
│   ├── exercicios.css     # Estilos do questionário
│   └── simulador.css      # Estilos dos simuladores
└── js/
    ├── aprender.js        # Comportamentos da página inicial
    ├── exercicios.js      # Lógica do questionário
    ├── simulador.js       # Operações e diagrama de conjuntos
    └── tabela-verdade.js  # Análise e geração de tabelas-verdade
```

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta `Modelagem-Projeto-AV3`.
3. Abra `index.html` em um navegador atualizado.

O projeto é estático e não exige instalação de dependências ou banco de dados. O Bootstrap é carregado por CDN, portanto a conexão com a internet é necessária para carregar essa biblioteca.

## Funcionalidades

- **Aprender:** explicações sobre conjuntos, proposições, conectivos, quantificadores, operações, classificação de expressões e equivalências lógicas.
- **Exercícios:** questões interativas sobre os conteúdos estudados.
- **Simulador:** operações entre conjuntos com diagrama de Venn e construção de tabelas-verdade.
- **Jogo:** atividade de associação de números às famílias numéricas.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.8 (via CDN)

## Contexto acadêmico

Projeto desenvolvido para a disciplina de Modelagem e Simulação Matemática.
"