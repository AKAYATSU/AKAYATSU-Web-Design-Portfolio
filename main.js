var video_src = new Array("videos/video1.mp4","videos/video2.mp4","videos/video3.mp4","videos/video4.mp4","videos/video5.mp4");
var num = -1;
slideshow_timer();
function slideshow_timer(){
    if (num == 4){
        num = 0;
    } 
    else {
        num ++;
    }
    document.getElementById("video").src=video_src[num];
    setTimeout("slideshow_timer()",3000); 
}



const subtitle = document.querySelector(".sub-title");

let set_position = 0;
window.addEventListener('scroll', function () {
	if (set_position < document.documentElement.scrollTop) {
		// console.log(`down`);
        subtitle.classList.add("active");
	} else {
		// console.log(`up`);
        subtitle.classList.remove("active");
	}
	set_position = document.documentElement.scrollTop;
});



const main =document.querySelector(".main"),
    title = document.querySelector(".title"),
    videoContainer = document.querySelector(".video-container"),
    sidebar =document.querySelector(".side-bar");
    sectionTitle = document.querySelectorAll(".section-title"),
    pTags = document.querySelectorAll(".about-p"),
    circles = document.querySelector(".circles"),
    worksSection = document.querySelector(".works-section"),
    work =document.querySelectorAll(".work"),
    footer = document.querySelector(".footer");



window.addEventListener("scroll",()=>{
    // console.log(window.pageYOffset); //
    if(window.pageYOffset >= title.offsetTop){
        main.classList.add("show");
        videoContainer.classList.add("small");
        sidebar.classList.add("active");
    }else{
        main.classList.remove("show");
        videoContainer.classList.remove("small");
        sidebar.classList.remove("active");

    }

    if(window.pageYOffset >= worksSection.offsetTop){
        main.classList.add("second");
        main.classList.remove("show");
    }else{
        main.classList.remove("second");
    }



    for(let i = 0; i < sectionTitle.length; i++){
        const sectionTitleDistance = sectionTitle[i].getBoundingClientRect().bottom
        // console.log(pTagsDistance);
        if(window.innerHeight >= sectionTitleDistance + 100){
            sectionTitle[i].classList.add("active");
        }
    }


    for(let i = 0; i < pTags.length; i++){
        const pTagsDistance = pTags[i].getBoundingClientRect().bottom
        // console.log(pTagsDistance);
        if(window.innerHeight >= pTagsDistance + 100){
            pTags[i].classList.add("active");
        }
    }


    const circlesDistance = circles.getBoundingClientRect().bottom;
    // console.log(aboutTarget);
    if(window.innerHeight >= circlesDistance - 100){
        circles.classList.add("active");
    }


    for(let i = 0; i < work.length; i++){
        const workDistance = work[i].getBoundingClientRect().bottom
        if(window.innerHeight >= workDistance){
            work[i].classList.add("active");
        }
    }

    const footerDistance = footer.getBoundingClientRect().top;
    if(window.innerHeight >= footerDistance){
        footer.classList.add("active");
    }



    
    


});








