let moon = document.querySelector("#moon");
let stars = document.querySelector("#stars");
let mb = document.querySelector("#mb");
let mf = document.querySelector("#mf");
let master = document.querySelector("#master");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    moon.style.bottom = `${-scroll * 0.4}px`;
    mb.style.bottom = `${scroll * 0.05}px`;
    mf.style.bottom = `${-scroll * 0.2}px`;
    stars.style.left = `${-scroll * 0.2}px`;
    master.style.transform = `translateY(${scroll * 0.3}%)`;
});
