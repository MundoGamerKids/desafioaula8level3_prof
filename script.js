//  1. Variáveis
let numeroCorreto = Math.floor(Math.random() * 10) + 1;   //numeroCorreto: Esta variável armazena o número que o jogador deve adivinhar. Math.random() gera um número decimal aleatório entre 0 e 1, e multiplicamos por 10 e usamos Math.floor() para obter um número inteiro entre 1 e 10.
let tentativas = [];    //tentativas: Um array que guarda todas as tentativas feitas pelo jogador.
let contadorTentativas = 0;  //contadorTentativas: Contador para rastrear o número de tentativas feitas pelo jogador.

// 4. Strings
let mensagem = "";  //mensagem: Esta variável guarda a mensagem a ser exibida ao jogador, como "Parabéns! Você adivinhou o número!" ou "O número é maior/menor. Tente novamente."
let tentativasAnteriores = "";   //tentativasAnteriores: Esta variável armazena uma string que mostra todas as tentativas anteriores do jogador.

// 8. Funções
function verificarTentativa() { //Esta função é chamada quando o jogador clica no botão "Enviar Tentativa".
    let tentativa = parseInt(document.getElementById("tentativa").value);  //tentativa: Obtém o valor digitado pelo jogador e converte para um número inteiro
    tentativas.push(tentativa);  //tentativas.push(tentativa): Adiciona a tentativa atual ao array tentativas
    contadorTentativas++; //contadorTentativas++: Incrementa o contador de tentativas.

    if (tentativa === numeroCorreto) { //Verifica se a tentativa do jogador está correta. Se sim, atualiza a mensagem para "Parabéns! Você adivinhou o número...".
        mensagem = "Parabéns! Você adivinhou o número em " + contadorTentativas + " tentativas.";
    } else if (tentativa < numeroCorreto) {  //Verifica se a tentativa é menor que o número correto e atualiza a mensagem.
        mensagem = "O número é maior. Tente novamente.";
    } else {  //Se a tentativa for maior que o número correto, atualiza a mensagem
        mensagem = "O número é menor. Tente novamente.";
    }

    tentativasAnteriores = "Suas tentativas foram: " + tentativas.join(", ");   // Cria uma string com todas as tentativas anteriores do jogador.
    atualizarMensagens();  //Chama a função para atualizar as mensagens na tela.
}

function atualizarMensagens() {  //Atualiza o conteúdo dos elementos HTML mensagem e tentativasAnteriores com as respectivas variáveis.
    document.getElementById("mensagem").textContent = mensagem;
    document.getElementById("tentativasAnteriores").textContent = tentativasAnteriores;
}

// 5. Eventos
document.getElementById("enviarTentativa").addEventListener("click", verificarTentativa);  //Adiciona um ouvinte de eventos ao botão "Enviar Tentativa". Quando o botão é clicado, a função verificarTentativa() é chamada.

// 3. Matemática e 6.Loops e 7. Condicionais estão integrados na função verificarTentativa









