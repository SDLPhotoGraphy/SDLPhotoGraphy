/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Sdl PhotoGraphy', 'videographer', 'photographer' , 'Video Editor ',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");
window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 

    
}


const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
  
});











  
     