let x = 1;
const loaderElement = document.querySelector(".loader");
const spanElement = document.querySelectorAll(".loader span")[0];

// Animacja niebieskich kwadracików
let int = setInterval(() => {
    if (x >= loaderElement.offsetWidth) x = 0;
    x += 1;
    spanElement.style.marginLeft = x + "px";
}, 10);

// Przekierowanie na pulpit po 4.5 sekundy
setTimeout(() => {
    clearInterval(int); // Zatrzymuje animację w tle
    window.location.href = "desktop.html";
}, 4500);