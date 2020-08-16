  //    CAROUSAL FUNCTION
      
        // CAROUSAL FUNCTION START 

        const track1 = document.querySelector('.carousal-track1');
        const slides1 = Array.from(track1.children);
        const nextButton1 = document.querySelector('.carousal-button-right1');
        const prevButton1 = document.querySelector('.carousal-button-left1');
        const dotsNav1 = document.querySelector('.carousal-nav1');
        const dots1 = Array.from(dotsNav1.children);
        
        const slideWidth1= slides1[0].getBoundingClientRect().width;
        
        
        // arranging the slides next to each other
        
        const setSlidePosition1 = (slide,index) =>{
            slide.style.left= slideWidth1 * index +'px';
        };
        
        slides1.forEach(setSlidePosition1);
        
        const moveToSlide1 =(track1,currentSlide1,targetSlide1) =>{
            track1.style.transform= 'translateX(-' + targetSlide1.style.left +')';
            currentSlide1.classList.remove('current-slide1');
            targetSlide1.classList.add('current-slide1');
            
        };
        
        const updateDots1 = (currentDot1,targetDot1)=>{
            currentDot1.classList.remove('current-slide1');
            targetDot1.classList.add('current-slide1');
        };
        
        // moving slide to left
        
        prevButton.addEventListener('click',e => {
        
            const currentSlide1 = track1.querySelector('.current-slide1');
            const prevSlide1= currentSlide1.previousElementSibling;
            const currentDot1= dotsNav1.querySelector('.current-slide1');
            const prevDot1 = currentDot1.previousElementSibling;
        
            moveToSlide1(track1,currentSlide1,prevSlide1);
            updateDots1(currentDot1,prevDot1);
        });
        
        
        
        // moving slide to right
        
        nextButton.addEventListener('click',e => {
        
            const currentSlide1 = track1.querySelector('.current-slide1');
            const nextSlide1= currentSlide1.nextElementSibling;
            const currentDot1= dotsNav1.querySelector('.current-slide1');
            const nextDot1 = currentDot1.nextElementSibling;
        
            moveToSlide1(track1,currentSlide1,nextSlide1);
            updateDots1(currentDot1,nextDot1);
        });
        
        
        // cariusal navbar functinality
        
        dotsNav.addEventListener('click',e =>{
            const targetDot1 = e.target.closest('button');  // specifically look for button only inside the  carousal nav 
            
            if(!targetDot1) return;    // if click other than those button then further function wont be executed
             
            const currentSlide1= track1.querySelector('.current-slide1');
            const currentDot1 = dotsNav1.querySelector('.current-slide1');
            const targetIndex1 = dots1.findIndex( dot => dot=== targetDot1);
            const targetSlide1= slides1[targetIndex1];
        
            moveToSlide1(track1,currentSlide1,targetSlide1);
            updateDots1(currentDot1,targetDot1);
        });