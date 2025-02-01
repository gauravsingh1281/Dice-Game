let dice1, dice2, randomNumber1, randomNumber2, showResult;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
dice1 = document.querySelector(".img1");
dice2 = document.querySelector(".img2");
showResult = document.getElementById("show-result");
dice1.setAttribute("src", `./images/dice${randomNumber1}.png`);
dice2.setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  showResult.innerText = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  showResult.innerText = "Player 2 Wins! 🚩";
} else {
  showResult.innerText = "Draw!";
}
