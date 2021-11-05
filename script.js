let quantity = 0;

function startTheGame() {
    while (quantity < 4 || quantity > 14 || quantity % 2 !== 0 || quantity === '') {
        quantity = prompt("Com quantas cartas você gostaria de jogar?\robs: entre 4 e 14 cartas, somente nº pares.");
        console.log(quantity);
    }

}

function flip(event) {
    let card = event.currentTarget;


    if (card.style.transform == "rotateY(180deg)") {
        card.style.transform = "rotateY(0deg)";
    }
    else {
        card.style.transform = "rotateY(180deg)";
    }

}