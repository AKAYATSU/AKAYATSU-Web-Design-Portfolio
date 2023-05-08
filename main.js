const menu = document.querySelector(".menu"),
  menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn");
  menuContent = document.querySelectorAll(".menu ul li a");
menuBtn.addEventListener('click',function(){
  menu.classList.add("active");
})
closeBtn.addEventListener('click',function(){
  menu.classList.remove("active");
})
for(let i = 0; i < menuContent.length; i++){
    menuContent[i].addEventListener('click',function(){
      menu.classList.remove("active");
  })
}



var typed = new Typed('#typewriter', {
    strings: ['HTML.', 'CSS.', 'Javascript.', 'WordPress.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });


const header = document.querySelector(".header"),
  aboutSection = document.querySelector(".about-section"),
  aboutTitle = document.querySelector(".about-section h2"),
  aboutTexts = document.querySelectorAll(".about-text"),
  newsSection = document.querySelector(".news-section");

window.addEventListener('scroll', function () {
    const aboutTitleTop = aboutTitle.getBoundingClientRect().top;
  if(window.innerHeight > aboutTitleTop){
    header.classList.add("fixed");
  }else{
    header.classList.remove("fixed");
  }
})
  
aboutTitle.addEventListener('click',function(){
  aboutSection.classList.toggle("opacity");
  for(let i = 0; i < aboutTexts.length; i++){
    aboutTexts[i].classList.toggle("active");
    aboutTitle.classList.toggle("active");
  }
})









