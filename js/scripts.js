const buttons = document.getElementById('buttons');
const slides = document.querySelectorAll('.slide');
const image = document.querySelector('.slide__image');

const slideClass = [
    ['slide--left', 'slide--show', 'slide--right', 'slide--right-200'],
    ['slide--show', 'slide--right', 'slide--right-200', 'slide--left']
] ;

let sliding = false;

const slidePrev = () => {
    if (!sliding) {
        slides.forEach((slide) => {
            let index = slideClass[0].indexOf(slide.classList[1]);
            if (slide.classList.contains(slideClass[0][0])) slide.classList.add('slide--transition');
            slide.classList.replace(slideClass[0][index], slideClass[1][index]);
            if (slide.classList.contains(slideClass[0][0])) slide.classList.remove('slide--transition');
        });
        sliding = true;
        setTimeout(() => {
            sliding = false;
        }, 500);
    }
    
}

const slideNext = () => {
    if (!sliding) {
        slides.forEach((slide) => {
            let index = slideClass[1].indexOf(slide.classList[1]);
            if (slide.classList.contains(slideClass[0][2])) slide.classList.add('slide--transition');
            slide.classList.replace(slideClass[1][index], slideClass[0][index]);
            if (slide.classList.contains(slideClass[0][3])) slide.classList.remove('slide--transition');
        });
        sliding = true;
        setTimeout(() => {
            sliding = false;
        }, 500);
    } 
}

window.addEventListener('load', () => {
    buttons.style.top = image.clientHeight + ((image.clientHeight * 11) / 100) - (buttons.clientHeight / 2) + 'px';
});

window.addEventListener('resize', () => {
    buttons.style.top = image.clientHeight + ((image.clientHeight * 11) / 100) - (buttons.clientHeight / 2) + 'px';
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        slidePrev();
    }
    else if (e.code === 'ArrowRight' || e.code === 'Space') {
        slideNext();
    }
});

buttons.addEventListener('click', (e) => {
    if (e.target.matches('#prev')) {
        slidePrev();
    } else if (e.target.matches('#next')) {
        slideNext();
    }
});
