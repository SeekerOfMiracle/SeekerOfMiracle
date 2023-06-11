// typing text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Problem solver", "Junior Web-Developer", "Freelancer", "Designer"], typingDelay = 250, erasingDelay = 150, newTextDelay = 2250;
let textArrayIndex = 0, charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", 
function() { 
        if(textArray.length) 
        setTimeout(type, newTextDelay);
    }
);
//typing text (end)

//Sidebar buttons
const homebtn = document.querySelector("#home")
const aboutbtn = document.querySelector("#about")
const aboutSec = document.querySelector(".about")
const skillsbtn = document.querySelector("#skills")
const skillsSec = document.querySelector(".skills")
const portfoliobtn = document.querySelector("#portfolio")
const portfolioSec = document.querySelector(".portfolio")
const contactbtn = document.querySelector("#contact")
const contactSec = document.querySelector(".contact")

function navDefault(layer){
    switch(layer){
        case 1:
        home.style.right= "";
        sidebar.style.right="";
        logo.style='';
        aboutSec.style.left="";
        case 2:
        skillsSec.style.top="";
        case 3:
        portfolioSec.style.bottom= "";
        case 4:
        contactSec.style.display = '';
        contactSec.style.opacity="";
        home.style.right= "";
            break;
    }
}

//Home IMMAGE and SIDEBAR
const sidebar = document.querySelector(".sidebar")
const home = document.querySelector(".home")
const logo = document.querySelector(".logo")
logo.addEventListener("click", ()=>{
    sidebar.style.right=0;
    logo.style.transform= "translate(28%, -50%)"
    logo.style.filter="blur(6px)"
    home.style.zIndex= 50;
    home.style.right= 0;
})
home.addEventListener("click", ()=>{
    navDefault(1);
})




homebtn.addEventListener("click", function(){
    logo.style.transform="translate(50%, -50%)"
    logo.style.filter="blur(0px)"
    sidebar.style.right= "-25vw"
    navDefault(1);
})

aboutbtn.addEventListener("click", function(){
    aboutSec.style.left= "0";
    navDefault(2);
})
skillsbtn.addEventListener("click", function(){
    skillsSec.style.top="0";
    navDefault(3);
})
portfoliobtn.addEventListener("click", function(){
    portfolioSec.style.bottom= "0";
    navDefault(4);
})
contactbtn.addEventListener("click", function(){
    contactSec.style.display = "flex";
    contactSec.style.opacity="100%";
})