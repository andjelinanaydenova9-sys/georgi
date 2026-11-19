
const card = document.getElementById("card");
const music = document.getElementById("music");
const instruction = document.getElementById("instruction");
const hearts = document.getElementById("hearts");

let opened = false;

// YouTube ID на песента
const videoID = "Tp1q4CuBTFJntrcW";

// Отваряне на картичката
card.addEventListener("click", function () {

    if (opened) return;

    opened = true;

    card.classList.add("open");

    instruction.textContent = "Не умея нито да пиша четливо, нито да рисувам красиво. Затова ти програмирам ❤️";

    // Стартиране на музиката
    music.src =
        "https://youtu.be/qFIl186O_8s?si=6genjUj3exxcfQ4-" +
        videoID +
        "?autoplay=1&controls=0&loop=1&playlist=" +
        videoID +
        "&playsinline=1";

    // Стартиране на сърчицата
    setInterval(createHeart, 350);
});

// Генериране на летящи сърца
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const symbols = ["❤️", "💕", "💗", "💖", "💘"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}
