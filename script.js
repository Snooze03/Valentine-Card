let no_btn = document.getElementsByClassName("card__no")[0];
let yes_btn = document.getElementsByClassName("card__yes")[0];
var img = document.getElementsByClassName("card__image")[0];
var message = document.getElementsByClassName("card__message")[0];
var defaultMsg = "Will you be my valentine beb?";

yes_btn.addEventListener("click", () => {
    // Image section
    if (img.src.match("imgs/no_btn_pressed.gif") || img.src.match("imgs/default.gif")) {
        img.src = "imgs/yes_btn_pressed.gif";
    }

    message.textContent = "💖 See you soon my love 💖";

    // Fire works
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };


    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
});

no_btn.addEventListener("mouseenter", () => {
    if (img.src.match("imgs/default.gif")) {
        img.src = "imgs/no_hover.gif";
    }
    message.textContent = "babe wag";
});

yes_btn.addEventListener("mouseenter", () => {
    if (img.src.match("imgs/no_hover.gif")) {
        img.src = "imgs/default.gif";
    }

    if (!message.textContent.match(defaultMsg)) {
        message.textContent = "yes na kasi eto naman";
    }
});

no_btn.addEventListener("click", () => {
    img.src = "imgs/no_btn_pressed.gif";
    message.textContent = "iyak ako :<";
});
