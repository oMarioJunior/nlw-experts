const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para criar páginas web estáticas.",
            "Um framework popular para desenvolvimento mobile.",
            "Uma linguagem de programação utilizada para criar interatividade em páginas web.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "vari x = 10;",
            "let x = 10;",
            "const x = 10;",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado que armazena apenas um valor por vez.",
            "Uma estrutura de dados que armazena uma coleção de elementos, acessíveis por um índice.",
            "Um objeto utilizado para armazenar funções em JavaScript.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de igualdade estrita, que compara apenas os valores, sem conversão de tipo.",
            "Concatenação de strings.",
            "Operador de atribuição.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "add()",
            "push()",
            "append()",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Uma variável que armazena um valor.",
            "Um tipo de dado que representa uma coleção de elementos.",
            "Um bloco de código reutilizável que executa uma tarefa específica.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Isso é um comentário",
            "' Isso é um comentário",
            "/* Isso é um comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "O que é DOM em JavaScript?",
        respostas: [
            "Document Object Model - Uma representação da estrutura de uma página web que permite interagir com ela.",
            "Data Object Model - Uma forma de armazenar dados em JavaScript.",
            "Direct Output Mechanism - Um método para exibir informações diretamente no console do navegador.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador utilizado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "-",
            "*",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
        respostas: [
            "Selecionar um elemento HTML pela sua classe.",
            "Selecionar um elemento HTML pelo seu ID.",
            "Selecionar um elemento HTML pelo seu tipo.",
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')


// repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let respostas of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = respostas
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(respostas)

        dt.querySelector('input').onchange = (event) =>  {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        } 

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}