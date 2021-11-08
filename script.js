let quantity = 0;
let qtdClicks = 0;
let seconds = 0;
let idInterval;


//array de imagens populada com os gifs (banco de dados)
let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '/assets/gif/bobrossparrot.gif';
imgArray[1] = new Image();
imgArray[1].src = '/assets/gif/explodyparrot.gif';
imgArray[2] = new Image();
imgArray[2].src = '/assets/gif/fiestaparrot.gif';
imgArray[3] = new Image();
imgArray[3].src = '/assets/gif/metalparrot.gif';
imgArray[4] = new Image();
imgArray[4].src = '/assets/gif/revertitparrot.gif';
imgArray[5] = new Image();
imgArray[5].src = '/assets/gif/tripletsparrot.gif';
imgArray[6] = new Image();
imgArray[6].src = '/assets/gif/unicornparrot.gif';

function startTheGame() {
    //usuário entra com a qtd de cartas
    while (quantity < 4 || quantity > 14 || quantity % 2 !== 0 || quantity === '') {
        quantity = prompt("Com quantas cartas você gostaria de jogar?\robs: entre 4 e 14 cartas, somente nº pares.");

        if (confirm === false) {
            alert("Para jogar, recarregue a página.")
        }
    }

    //chama o timer
    timer();

    //novo array manipulável com a qtd de cartas 
    let game = [];

    for (let i = 0; i < quantity / 2; i++) {
        game.push(imgArray[i]);
        game.push(imgArray[i]);
    }

    game.sort(comparator);

    //população da board com as cartas dependendo da entrada do usuário (quantity)
    const board = document.querySelector(".board");
    board.innerHTML = "";

    for (let i = 0; i < quantity; i++) {

        let source = game[i].outerHTML;

        board.innerHTML += `
            <div class="card" onclick="flip(this)" data-identifier="card">
                <div class="front-face face no-flip" data-identifier="front-face">
                    <figure><img src="/assets/img/front.png" alt=""></figure>
                </div>
                <div class="back-face face no-flip" data-identifier="back-face">
                    ${source}
                </div>
            </div>
        `
    }
}

function comparator() {
    return Math.random() - 0.5;
}

//arrays para testes de comparação
let frontFace = [];
let backFace = [];

const cards = document.querySelector(".board");

function flip(card) {

    let front = card.querySelector(".front-face.face");
    let back = card.querySelector(".back-face.face");

    if (front.classList.contains("done") || cards.classList.contains("wait")) {
        return;

        //flipa a carta e mantém o conteúdo dela
    } else if (frontFace[0] === undefined) {
        front.classList.add("flip");
        back.classList.add("flip");

        front.classList.remove("no-flip");
        back.classList.remove("no-flip");

        frontFace[0] = front;
        backFace[0] = back.querySelector("img");

        qtdClicks++;

    } else if (backFace[0].parentNode === back) {
        return;

    } else if (backFace[0].src === back.querySelector("img").src) {
        front.classList.add("flip");
        back.classList.add("flip");

        card.classList.add("done");

        // frontFace[0].removeAttribute("onclick");
        // front.removeAttribute("onclick");

        front.classList.remove("no-flip");
        back.classList.remove("no-flip");

        frontFace = [];
        backFace = [];

        qtdClicks++;

        setTimeout(endGame, 500);

    } else {

        front.classList.add("flip");
        back.classList.add("flip");

        //classe para evitar do usuário virar outras cartas ao mesmo tempo
        cards.classList.add("wait");

        setTimeout(turnCards, 1500, backFace[0], frontFace[0], back, front);

        frontFace = [];
        backFace = [];

        qtdClicks++;
    }
    console.log(qtdClicks);
}

function turnCards(let1, let2, let3, let4) {
    let1.parentNode.classList.remove("flip");
    let2.classList.remove("flip");

    let3.classList.remove("flip");
    let4.classList.remove("flip");


    let1.parentNode.classList.add("no-flip");
    let2.classList.add("no-flip");

    let3.classList.add("no-flip");
    let4.classList.add("no-flip");

    cards.classList.remove("wait")

}

//função parar finalizar O JOGO
function endGame() {

    if (document.querySelector(".no-flip") === null) {
        alert(`Você ganhou em ${qtdClicks} jogadas e ${seconds} segundos!`);
        if (confirm("Você gostaria de reiniciar o jogo?")) {
            quantity = 0;
            qtdClicks = 0;
            seconds = 0;

            clearInterval(idInterval);

            startTheGame();
        } else {
            clearInterval(idInterval);
            const main = document.querySelector("main");
            main
            return;

        }
    }
}

//função timer + incremento
function timer() {

    const count = document.querySelector(".seconds")
    count.innerHTML = ` ${seconds} s`;

    idInterval = setInterval(incrementCounter, 1000);
}

function incrementCounter() {
    seconds++;

    const count = document.querySelector(".seconds")
    count.innerHTML = ` ${seconds} s`;
}

startTheGame();