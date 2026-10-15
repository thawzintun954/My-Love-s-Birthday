/*
  PERSONALIZE THIS FILE:
  1) Change herName to her name.
  2) Change yourName to your name.
  3) Edit letterMessage to make it sound like you.
*/
const herName = "My Love";
const yourName = "Your Love";
const letterMessage = `Happy Birthday, my love. I wish I could be there beside you today, but until that day comes, I hope this little surprise reminds you how loved you are.

Thank you for being part of my life. I’m always cheering for you, from wherever I am. May this new year bring you peace, laughter, good health, and beautiful moments.

I love you. ♡`;

const heroName = document.querySelector("#hero-name");
const sectionName = document.querySelector("#section-name");
const footerName = document.querySelector("#footer-name");
const senderName = document.querySelector("#sender-name");
const letterText = document.querySelector("#letter-text");

heroName.textContent = herName;
sectionName.textContent = herName;
footerName.textContent = herName;
senderName.textContent = yourName;
letterText.textContent = letterMessage;

const openGiftButton = document.querySelector("#open-gift");
const surpriseContent = document.querySelector("#surprise-content");
const wishButton = document.querySelector("#wish-button");
const wishMessage = document.querySelector("#wish-message");
const heartLayer = document.querySelector("#heart-layer");
const video = document.querySelector("#birthday-video");
const videoPlaceholder = document.querySelector("#video-placeholder");

openGiftButton.addEventListener("click", () => {
  surpriseContent.classList.add("revealed");
  openGiftButton.innerHTML =
    'Your surprise is open <span aria-hidden="true">♥</span>';
  openGiftButton.disabled = true;
  openGiftButton.style.opacity = ".75";
  burstHearts(60);
  setTimeout(
    () =>
      surpriseContent.scrollIntoView({ behavior: "smooth", block: "start" }),
    120,
  );
});

wishButton.addEventListener("click", () => {
  wishMessage.textContent =
    "Sending you the biggest hug across all those miles. Happy Birthday, my love! ♡";
  burstHearts(60);
});

function burstHearts(amount = 60) {
  const symbols = ["♥", "♡", "💗", "💕", "💖"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${18 + Math.random() * 35}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    heart.style.animationDelay = `${Math.random() * 1.5}s`;

    heartLayer.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove(), {
      once: true,
    });
  }
}
/* If birthday-video.mp4 exists and can be loaded, show the player instead of the placeholder. */
video.addEventListener("loadedmetadata", () => {
  video.classList.remove("hidden");
  videoPlaceholder.classList.add("hidden");
});
video.querySelector("source").addEventListener("error", () => {
  video.classList.add("hidden");
  videoPlaceholder.classList.remove("hidden");
});
