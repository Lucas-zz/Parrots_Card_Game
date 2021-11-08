let quantity = 0;
let qtdClicks = 0;
let seconds = 0;
let idInterval;

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
    while (quantity < 4 || quantity > 14 || quantity % 2 !== 0 || quantity === '') {
        quantity = prompt("Com quantas cartas você gostaria de jogar?\robs: entre 4 e 14 cartas, somente nº pares.");
    }

    timer();

    let game = [];

    for (let i = 0; i < quantity / 2; i++) {
        game.push(imgArray[i]);
        game.push(imgArray[i]);
    }

    game.sort(comparator);

    const board = document.querySelector(".board");
    for (let i = 0; i < quantity; i++) {

        let source = game[i].outerHTML;

        board.innerHTML += `
        <div class="container">
            <div class="card" onclick="flip(this)" data-identifier="card">
                <div class="front-face face no-flip" data-identifier="front-face">
                    <figure><img src="/assets/img/front.png" alt=""></figure>
                </div>
                <div class="back-face face no-flip" data-identifier="back-face">
                    ${source}
                </div>
            </div>
        </div>
        `
    }
}

function comparator() {
    return Math.random() - 0.5;
}

startTheGame();

function flip(card) {
    // if (!card.classList.contains(".flip")) {
    //     card.classList.add(".flip");
    // }
    qtdClicks++;

    let front = card.querySelector(".front-face.face");
    let back = card.querySelector(".back-face.face");

    front.classList.add("flip");
    back.classList.add("flip");

    front.classList.remove("no-flip");
    back.classList.remove("no-flip");

    card.removeAttribute("onclick");

    timeOut();
}

function timeOut() {
    setTimeout(endGame, 1000);
}

function endGame() {

    if (document.querySelector(".no-flip") === null) {
        alert(`Você ganhou em ${qtdClicks} jogadas e ${seconds} segundos`);
        if (confirm("Você gostaria de reiniciar o jogo?")) {
            location.reload(true);
        } else {
            window.close();
        }
    }
}




// const board = document.querySelector(".board");
// let source = imgArray[0].outerHTML;
// board.innerHTML = source;

// function flip(event) {
//     let card = event.currentTarget;
//     if (card.style.transform == "rotateY(180deg)") {
//         card.style.transform = "rotateY(0deg)";
//     }
//     else {
//         card.style.transform = "rotateY(180deg)";
//     }

// }