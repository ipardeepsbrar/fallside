// Menu toggle

const burger = document.querySelector('.burger i');
const nav = document.querySelector('nav');

burger.addEventListener('click', function(){
    burger.classList.toggle('fa-xmark');
    if(burger.classList.contains('fa-xmark')){
        nav.classList.add('nav-show');
    }else{
        nav.classList.remove('nav-show');
    }
});

// Image slider

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let counter = 1;
const imageNum = document.querySelectorAll('.slider-small-box').length-1;
const slider = document.querySelector('.slider-big-box');
slider.style.transform = 'translateX(' + (-100*counter) + 'vw)';

nextBtn.addEventListener('click', () => {
    counter++;
    if(counter > imageNum) {
        counter = 1;
        return;
    }
    if(counter < imageNum){
    slider.style.transition = 'all 0.5s ease-in-out';
    slider.style.transform = 'translateX(' + (-100*counter) + 'vw)';
    }
    else if(counter === imageNum){
        slider.style.transition = 'all 0.5s ease-in-out';
        slider.style.transform = 'translateX(' + (-100*counter) + 'vw)';
    };
});
prevBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0) {
        counter = 4;
        return;
    }
    if(counter > 0){
        slider.style.transition = 'all 0.5s ease-in-out';
        slider.style.transform = 'translateX(' + (-100*counter) + 'vw)';
        }
    else if(counter === 0){
            slider.style.transition = 'all 0.5s ease-in-out';
            slider.style.transform = 'translateX(' + (100*counter) + 'vw)';
        };
});

slider.addEventListener('transitionend', () => {
    if(counter === imageNum){
        counter = 1;
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(' + (-100*counter) + 'vw)';
    }
    if(counter === 0){
        counter = 4;
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(' + (-100*counter) + 'vw)';
    }
    });   