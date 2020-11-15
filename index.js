let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//find the left and right images
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");

//find the winner text element
let text = document.querySelector("h1");

//change the left and right image to one of the 5 other dice images available
image1.setAttribute("src", `images/dice${randomNumber1}.png`);
image2.setAttribute("src", `images/dice${randomNumber2}.png`);

//change the text to
if (randomNumber1 > randomNumber2) {
  text.innerHTML = "Player 1 wins!";
}

if (randomNumber1 < randomNumber2) {
  text.innerHTML = "Player 2 wins!";
}

if (randomNumber1 == randomNumber2) {
  text.innerHTML = "Draw!";
}
