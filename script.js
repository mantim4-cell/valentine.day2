document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    let noClickCount = 0;

    noBtn.addEventListener("click", function () {
        noClickCount++;

        // Move NO button
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";

        // Grow YES button
        yesBtn.style.position = "fixed";
        yesBtn.style.left = "50%";
        yesBtn.style.top = "60%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${1 + noClickCount * 0.3})`;

        // Redirect on 6th click
        if (noClickCount >= 6) {
            window.location.href = "second.html";
        }
    });

    yesBtn.addEventListener("click", function () {
        window.location.href = "second.html";
    });

});
