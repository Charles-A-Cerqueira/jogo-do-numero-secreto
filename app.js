//Manipular a variavel titulo, texto <h1>
//let titulo = document.querySelector('h1');
// Coloca o titulo dentro da variável do html
//titulo.innerHTML = 'Jogo do número secreto';

//Manipula a variável paragrafo
//let paragrafo = document.querySelector('p');
// Alterar conteúdo da variável paragráfo no HTML
//paragrafo.innerHTML = 'Escolha o número entre 1 e 10.';


//______________________________________________________________________________________________

//Lista uma lista de número sorteados
let listaDeNumerosSorteados = [];
//Limita a quantidade da lista 
let numeroLimite = 10;
//Variável pára número aleatório
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

//Manipula a variável tag do HTML, tem a função de diminuir o código, em relação aos anteriores
//Para acontecer, colocamos uma função com parâmetros
function exiberTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    //Altera o conteudo da tag
    campo.innerHTML = texto;
    // Speech, o compuatdor irá ler os textos, mas para isso acontece deve está dentro do HTML...  
    //...<script src="https://code.responsivevoice.org/responsivevoice.js"></script>, verificar sempre a documentação
    //rate, Controla a velocidade da fala do computador
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
    
}

// Criou está função, devido o texto será usado no reinciar do jjogo com botão.
function exibirMensagenInicial(){
    exiberTextoNaTela('h1', 'Jogo do número secreto');
    exiberTextoNaTela('p', 'Escolha um número de 1 a 10');
}
exibirMensagenInicial();

// Criar uma funçãop para habilitar os botões 1º no html em botão, onclick = " verificarChute()"
function verificarChute() {
    //Pega o valor que digitado na caixa de dialgo
    let chute = document.querySelector('input').value;
        //Para exibir no na página HTML, criando a condicional 
    if(chute == numeroSecreto){
        exiberTextoNaTela('h1', 'Acertou! ');
            //Muda a palavras para o plural ou  singular
            let palavraTentativa = tentativas > 1 ? 'tenativas' : 'tentativa';
                let mensagemTentativas = `Você acertou com ${tentativas} com ${palavraTentativa}!`;
                   exiberTextoNaTela('p',mensagemTentativas);
                   //Criando o botão reiniciar, Novo jogo e remove o atributo para habilita-lo. Sua referência é no id no HTML
                   document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
            if(chute> numeroSecreto){
                 exiberTextoNaTela('p', 'O número é menor.');
        }else{
                    exiberTextoNaTela('p', 'O número é maior.');
        }
        //Conatador de tentaivas
        tentativas++;
        //Limpa campo
        limparCampo();
    }
                  
   
          
    //Exibir na inspeção de código no navegador, F12, ferrementa do desenvolverdor
    //console.log(numeroSecreto==chute);
}

//Criar uma funcção em retorno da variavel nuemro secreto
function gerarNumeroAleatorio(){
    //Irá delimitar a quantidade de número sorteado para não gerar erro.
    let quantidadeDeElementoNaLIsta = listaDeNumerosSorteados.length;
    //Implementação da lista que já foram listados no chute
    let numeroSorteado = parseInt(Math.random()*numeroLimite +1);
//Verificar a quantidade de elelmentos lista, conforme a quantidade setada no math.random, neste caso numeroLimite
if(quantidadeDeElementoNaLIsta == 3){
    listaDeNumerosSorteados = [];
}       
    //Vai verificar se está na lista
    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        //Retornar com o número sorteado
        return gerarNumeroAleatorio();
    } else {
        //Pega o parametro, e coloca no final
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado;
    }


    //Gera numero aleatórios com multiplicador e paramento com +1; parseInt (transforma em núemro inteiro)
    //return, exibe a mensagem na tela.Retirei esta função, devido a marcação dos números sorteados
    //return parseInt(Math.random()*10 +1);
}

// Limpar o campo do unput
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

//Botão reiniciar no HTML
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    //Excluímos esse código, pois se repetem
    //exiberTextoNaTela('h1', 'Jogo do número secreto');
    //exiberTextoNaTela('p', 'Escolha um número de 1 a 10');
    exibirMensagenInicial();
    //Habilitar novamente o status de desabilitado
    document.getElementById('reiniciar').setAttribute('disabled',true);
   
}