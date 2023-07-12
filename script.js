// typing text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Seeker of Miracle", "Junior Web-Developer", "Freelancer", "Designer"], typingDelay = 250, erasingDelay = 150, newTextDelay = 2250;
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

let move=25;
if(window.innerWidth<=900)
move=0;
function navDefault(layer){
    switch(layer){
        case 1:
        document.querySelector("main").style.zIndex="";
        home.style.right= "";
        logo.style='';
        sidebarBtn.style.right='';
        if(move==25)
        sidebar.style.right="";
        aboutSec.style.left="";
        case 2:
        skillsSec.style.right="";
        case 3:
        portfolioSec.style.bottom= "";
        case 4:
        // contactSec.style.zIndex = '';
        if(move!=25)
        sidebar.style.right="";
        contactSec.style.opacity="";
        contactSec.style.top="";
        
            break;
    }
}

//Home IMMAGE and SIDEBAR
const sidebar = document.querySelector(".sidebar")
const home = document.querySelector(".home")
const logo = document.querySelector(".logo")
const sidebarBtn=document.querySelector(".sidebar-btn")
sidebarBtn.addEventListener("click",()=>{
    
    navDefault(1);
    home.style.right=0
    sidebar.style.right=0;
    logo.style='';
    logo.style.filter="blur(6px)"
})
logo.addEventListener("click", ()=>{
    sidebar.style.right=0;
    logo.style.transform= `translate(${move==25?28:50}%, -50%)`
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
    sidebar.style.right= `-${move}vw`;
    navDefault(1);
})

aboutbtn.addEventListener("click", function(){
    aboutSec.style.left= "0";
    sidebarBtn.style.right="0";
    navDefault(2);
})
skillsbtn.addEventListener("click", function(){
    skillsSec.style.right=`${move==25?20.5:0}vw`;
    sidebarBtn.style.right="0";
    navDefault(3);
})
portfoliobtn.addEventListener("click", function(){
    portfolioSec.style.bottom= "0";
    sidebarBtn.style.right="0";
    navDefault(4);
})
contactbtn.addEventListener("click", function(){
    sidebarBtn.style.right="0";
    navDefault(4);
    contactSec.style.opacity="100%";
    contactSec.style.top="50%";
})