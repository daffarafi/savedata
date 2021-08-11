let xold = document.querySelector(".x");
let yold = document.querySelector(".y");
let kotak = document.querySelector(".kotak");

xold.innerHTML = 0;
yold.innerHTML = 0;

window.addEventListener("mousemove", (e) => {
    xold.innerHTML = e.clientX - window.innerWidth / 2;
    yold.innerHTML = e.clientY - window.innerHeight / 2;
    kotak.style.left = (e.clientX - window.innerWidth / 2) * 0.8;
    kotak.style.top = (e.clientY - window.innerHeight / 2) * 0.8;
    console.log(window.innerWidth);
});
