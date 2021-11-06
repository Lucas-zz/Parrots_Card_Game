let quantity = 0;

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

    const board = document.querySelector(".board");

    imgArray.sort(comparador);

    let game = [];

    for (let i = 0; i < quantity / 2; i++) {
        game.push(imgArray[i]);
        game.push(imgArray[i]);

        game.sort(comparador);
    }

    for (let i = 0; i < quantity; i++) {

        let source = game[i].outerHTML;

        board.innerHTML += `
        <div class="container">
            <div class="card" onclick="flip(event)" data-identifier="card">
                <div class="front" data-identifier="front-face">
                    <figure><img src="/assets/img/front.png" alt=""></figure>
                </div>
                <div class="back" data-identifier="back-face">
                    ${source}
                </div>
            </div>
        </div>
        `

    }
}

function comparador() {
    return Math.random() - 0.5;
}

startTheGame();

// const board = document.querySelector(".board");
// let source = imgArray[0].outerHTML;
// board.innerHTML = source;

function flip(event) {
    let card = event.currentTarget;


    if (card.style.transform == "rotateY(180deg)") {
        card.style.transform = "rotateY(0deg)";
    }
    else {
        card.style.transform = "rotateY(180deg)";
    }

}