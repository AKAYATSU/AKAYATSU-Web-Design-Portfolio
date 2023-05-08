var typed = new Typed('#typewriter', {
    strings: ['HTML', 'CSS', 'Javascript', 'WordPress'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });

const content2 = document.querySelector(".content2");
let colors = Array('#d2d200','#00a096','#00aaff','#ff006f','#ffbf1f');
content2.onclick = function(e){
  const contentDistance = content2.getBoundingClientRect().top;
  let x = e.pageX;
  let y = e.pageY - window.pageYOffset - contentDistance;
  // console.log(e.pageY);
  // console.log(window.pageYOffset);
  // console.log(contentDistance);

  let splash = document.createElement('span');
  splash.classList.add("splash")
  splash.style.left = x + 'px';
  splash.style.top = y + 'px';
  splash.style.width = Math.floor(Math.random() * 300) + 'px';
  splash.style.height = splash.style.width;
  splash.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

  this.appendChild(splash);

  setTimeout(() => {
    splash.remove()
  },4000);
}

