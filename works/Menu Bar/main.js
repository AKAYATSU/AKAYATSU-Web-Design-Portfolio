const menuBtn = document.querySelector(".menu-button"),
    closeBtn = document.querySelector(".close-button"),
    sideBar = document.querySelector(".side-bar"),
    snsContainer = document.querySelector(".sns-container");
// console.log(menuBtn,closeBtn,sideBar);

menuBtn.addEventListener('click',function(){
    sideBar.classList.add("active");
    snsContainer.classList.add("off");
});
closeBtn.addEventListener('click',function(){
    sideBar.classList.remove("active");
    snsContainer.classList.remove("off");
});

const snsBtn = document.querySelector(".sns-button"),
    sns = document.querySelectorAll(".sns");
// console.log(snsBtn,sns);
snsBtn.addEventListener('click',function(){
    snsBtn.classList.toggle("active");
    for(let i = 0; i < sns.length; i++){
    sns[i].classList.toggle("active")
    }
});
