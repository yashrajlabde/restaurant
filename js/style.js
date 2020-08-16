        //    CAROUSAL FUNCTION
      
        // CAROUSAL FUNCTION START 

const track = document.querySelector('.carousal-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousal-button-right');
const prevButton = document.querySelector('.carousal-button-left');
const dotsNav = document.querySelector('.carousal-nav');
const dots = Array.from(dotsNav.children);

const slideWidth= slides[0].getBoundingClientRect().width;


// arranging the slides next to each other

const setSlidePosition = (slide,index) =>{
    slide.style.left= slideWidth * index +'px';
};

slides.forEach(setSlidePosition);

const moveToSlide =(track,currentSlide,targetSlide) =>{
    track.style.transform= 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    
};

const updateDots = (currentDot,targetDot)=>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

// moving slide to left

prevButton.addEventListener('click',e => {

    const currentSlide = track.querySelector('.current-slide');
    const prevSlide= currentSlide.previousElementSibling;
    const currentDot= dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track,currentSlide,prevSlide);
    updateDots(currentDot,prevDot);
});



// moving slide to right

nextButton.addEventListener('click',e => {

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide= currentSlide.nextElementSibling;
    const currentDot= dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot);
});


// cariusal navbar functinality

dotsNav.addEventListener('click',e =>{
    const targetDot = e.target.closest('button');  // specifically look for button only inside the  carousal nav 
    
    if(!targetDot) return;    // if click other than those button then further function wont be executed
     
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex( dot => dot=== targetDot);
    const targetSlide= slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
});