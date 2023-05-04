var typed = new Typed('#typewriter', {
    strings: ['HTML', 'CSS', 'Javascript', 'WordPress'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });

const collection = document.querySelector(".collection");
let colors = Array('#d2d200','#00a096','#00aaff','#ff006f','#ffbf1f');
collection.onclick = function(e){
  let x = e.pageX;
  let y = e.pageY - window.innerHeight;
  console.log(e.pageY);
  console.log(window.innerHeight)


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