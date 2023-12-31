
// typerwriter
var i = 0;
var txt = 'Coding the Future.'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
console.log('some shit');
function typeWriter() {
  if (i < 11) {
    const oldtxt=document.getElementById("typewriter").innerHTML;
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else if(i < txt.length)
  {
    if(i==11)
    {
      const spanel=document.createElement("span");
      spanel.setAttribute("id","typewritercolor");
      document.getElementById("typewriter").appendChild(spanel);
    }
    document.getElementById("typewritercolor").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload=function(){
    const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("clicked");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
typeWriter();
const navLink = document.querySelectorAll(".navbar ul li a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
  }

//   Scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 2000,
    reset: true,
  });
sr.reveal('h1');
sr.reveal('p');
sr.reveal('i');
sr.reveal('.timeline');



