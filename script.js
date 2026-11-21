const envelope = document.getElementById("amplop-container");
const letter = document.getElementById("letter-container");

const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");

const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// BUKA AMPLOP
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// TOMBOL NO
noBtn.addEventListener("mouseenter", () => {
  const moveX = (Math.random() - 0.5) * 120;
  const moveY = (Math.random() - 0.5) * 80;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// TOMBOL YES
yesBtn.addEventListener("click", () => {
  catImg.src = "Kitty Kiss GIF.gif";

  buttons.style.display = "none";
  finalText.style.display = "block";
});