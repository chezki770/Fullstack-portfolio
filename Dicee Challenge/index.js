
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDice1 = "./images/dice" + randomNumber1 + ".png";


document.querySelector(".img1").src = randomDice1;


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDice2 = "./images/dice" + randomNumber2 + ".png";


document.querySelector(".img2").src = randomDice2;

if(randomNumber1 >  randomNumber2){
    document.querySelector("h1").innerText = "player 1 wins!"
}
else if(randomNumber1 <  randomNumber2){
    document.querySelector("h1").innerText = "player 2 wins!"
}
else{
    document.querySelector("h1").innerText = "Draw!"
}