let bg = document.querySelector("#bg");
let mountain = document.querySelector("#mountain");
let moon = document.querySelector("#moon");
let text = document.querySelector("#text");
let road = document.querySelector("#road");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    bg.style.top = `${scroll * 0.5}px`;
    mountain.style.top = `${-scroll * 0.15}px`;
    road.style.top = `${scroll * 0.15}px`;
    moon.style.left = `${-scroll * 0.2}px`;
    text.style.top = `${scroll * 0.5}px`;

    // bg.style.transform = `translateY(${scroll * 0.5}px`;
    // mountain.style.transform = `translateY(${-scroll * 0.15}px`;
    // road.style.transform = `translateY(${scroll * 0.15}px`;
    // moon.style.transform = `translateX(${-scroll * 0.2}px`;
    // text.style.transform = `translateY(${scroll * 0.5}px`;
});
