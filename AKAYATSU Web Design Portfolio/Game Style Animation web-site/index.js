const click = document.querySelector(".click-box");
console.log(click);
const clickRect = click.getBoundingClientRect();
console.log(clickRect);

const human = document.querySelector(".human");
console.log(human);
const humanRect = human.getBoundingClientRect();
console.log(humanRect);

const about = document.querySelector(".about");
console.log(about);

click.addEventListener("click", () => {
    human.classList.toggle("active")
    click.classList.toggle("active")
    about.classList.toggle("active")

});


