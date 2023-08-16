function genearteRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = genearteRandomNumber();
var randomNumber2 = genearteRandomNumber();

var image1 = "./images/dice" + randomNumber1 + ".png";
var image2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".player-one img").setAttribute("src", image1);
document.querySelector(".player-two img").setAttribute("src", image2);

if (randomNumber1 > randomNumber2)
  document.querySelector(".heading h1").textContent = "🚩Player 1 Wins!";
else if (randomNumber1 < randomNumber2)
  document.querySelector(".heading h1").textContent = "Player 2 Wins!🚩";
else document.querySelector(".heading h1").textContent = "Draw!";
