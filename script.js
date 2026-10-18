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
// Background music
const bgMusic = document.getElementById("bgMusic");
document.addEventListener("DOMContentLoaded", () => {
  bgMusic.play().catch(() => {
    console.log("Autoplay Blocked by browser");
  });
});
document.addEventListener(
  "click",
  () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(console.error);
    }
  },
  { one: true },
);
// Website ဖွင့်ပြီး 10 seconds အကြာမှာ သီချင်းဖွင့်မယ်
setTimeout(() => {
  if (video.paused && !bgMusic.ended) {
    bgMusic.play().catch(() => {
      console.log("Tap the page to start music.");
    });
  }
}, 3000);

// Birthday video ဖွင့်ရင် သီချင်းရပ်မယ်
video.addEventListener("play", () => {
  bgMusic.pause();
});

// Birthday video ပြီးသွားရင် သီချင်းပြန်ဖွင့်မယ်
video.addEventListener("ended", () => {
  if (!bgMusic.ended) {
    bgMusic.play().catch(() => {});
  }
});

// Birthday video ကို ပိတ်ပြီး hidden class ပြန်ထည့်ရင်
// သီချင်းပြန်ဖွင့်မယ်
const videoObserver = new MutationObserver(() => {
  if (video.classList.contains("hidden") && video.paused && !bgMusic.ended) {
    bgMusic.play().catch(() => {});
  }
});

videoObserver.observe(video, {
  attributes: true,
  attributeFilter: ["class"],
});
// Birthday video play button
videoPlaceholder.addEventListener("click", async () => {
  videoPlaceholder.classList.add("hidden");
  video.classList.remove("hidden");

  try {
    await video.play();
  } catch (error) {
    console.error("Video playback failed:", error);
    video.classList.add("hidden");
    videoPlaceholder.classList.remove("hidden");
  }
});
// Love letter photo popup
const loveButton = [...document.querySelectorAll("button")].find((button) =>
  button.textContent.includes("Send a little love"),
);

function showLovePhoto() {
  // Avoid opening duplicate popups
  if (document.querySelector(".love-photo-overlay")) return;

  // Keep your existing heart animation
  if (typeof burstHearts === "function") {
    burstHearts(60);
  }

  const overlay = document.createElement("div");
  overlay.className = "love-photo-overlay";

  overlay.innerHTML = `<div class="love-photo-card">
      <button class="love-photo-close"
        aria-label="Close photo">&times;</button>
      <img src="./love-letter.jpg"
        alt="A handwritten birthday letter for my love"
                class="love-letter-image"
>
    </div>`;

  document.body.appendChild(overlay);

  const closePhoto = () => overlay.remove();

  overlay
    .querySelector(".love-photo-close")
    .addEventListener("click", closePhoto);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closePhoto();
  });

  document.addEventListener("keydown", function handleEscape(event) {
    if (event.key === "Escape") {
      closePhoto();
      document.removeEventListener("keydown", handleEscape);
    }
  });
}

if (loveButton) {
  loveButton.addEventListener("click", showLovePhoto);
}
