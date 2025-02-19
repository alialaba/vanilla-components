"use strict";


const testimonialSlider = function () {
    let slideEls = document.querySelectorAll(".slide");
    let rightBtn  = document.querySelector(".slider__btn--right")
    let leftBtn = document.querySelector(".slider__btn--left")
    let curSlide = 0;
    let maxSlides = slideEls.length;


    console.log(slideEls)


//Functions

function goToSlide (slide) {
 slideEls.forEach((el, i) =>{
   let n = el.style.transform = `translateX(${100 * (i - slide)}%)`
   console.log(n)
 })
}

function nextSlide () {
  curSlide == (maxSlides - 1) ? curSlide = 0 : curSlide++
  goToSlide(curSlide)
}


function prevSlide () {
    curSlide == 0 ? curSlide = (maxSlides - 1) : curSlide--
    goToSlide(curSlide)
}

goToSlide(0)

//Event handlers
rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click" , prevSlide)
}

testimonialSlider()