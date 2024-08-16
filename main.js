const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é maravilhos!",
                afirmacao: "Ficou fascinado com as possibilidades dessa tecnologia e como ela poderia transformar a forma como você aprende."
            },
            {
                texto: "Isso é pavoroso.",
                afirmacao: "Sentiu uma certa inquietação com o potencial da tecnologia de substituir atividades humanas."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Explorar uma ferramenta de IA para auxiliar na pesquisa e sintetizar informações complexas em um formato compreensível.",
                afirmacao: "Utilizou a IA para tornar a pesquisa mais eficiente e acessível."
            },
            {
                texto: "prefiro confiar em mim e nas minhas habilidades.",
                afirmacao: "Preferiu confiar em suas próprias habilidades e conhecimentos ao invés de depender da IA."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Preocupa-se com o impacto da IA sobre o mercado de trabalho e a necessidade de garantir segurança para os trabalhadores.",
                afirmacao: "Destacou a importância de criar políticas que protejam os empregos e ajustem as novas tecnologias."
            },
            {
                texto: "Acredita que a IA pode gerar novas oportunidades de emprego e desenvolver habilidades que antes não eram possíveis.",
                afirmacao: "Enfatizou que a IA pode ser um motor para inovação e crescimento profissional."
            }            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Usar um software básico de design para criar a imagem.",
                afirmacao: "Optou por utilizar ferramentas simples para criar uma representação clara de suas ideias sobre IA."
            },
            {
                texto: "ja usei  varias vezes a tecnologia para criar imagem.",
                afirmacao: "Decidiu usar a tecnologia para criar uma imagem rapidamente e explorar a criatividade oferecida pelos recursos de IA."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Revisar o trabalho e adicionar insights e personalizações para garantir que o projeto reflita o esforço do grupo.",
                afirmacao: "Entendeu a importância de personalizar e revisar o trabalho gerado pela IA para manter a originalidade."
            },
            {
                texto: "Usar o texto gerado pela IA como base e ajustar o conteúdo conforme necessário.",
                afirmacao: "Reconheceu que a IA pode fornecer um ponto de partida útil, mas deve ser adaptada para atender às suas próprias necessidades e ideias."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){09
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();