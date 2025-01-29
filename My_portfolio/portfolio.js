let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const backgrounds = [
    'url(https://thumbs.dreamstime.com/z/devices-white-display-responsive-web-promotion-computer-laptop-tablet-smart-phone-desk-70213325.jpg?ct=jpeg)',
    'url(https://thumbs.dreamstime.com/z/robot-htaccess-sign-holding-wrench-white-background-copy-space-concept-web-development-server-configuration-326736342.jpg?ct=jpeg)',
    'url(https://thumbs.dreamstime.com/z/python-programming-web-development-coding-concept-software-concepts-various-devices-engineer-computer-process-chart-data-326724126.jpg?ct=jpeg)'
];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    
    document.body.style.backgroundImage = backgrounds[index];
}

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}


showSlide(currentSlide);


setInterval(() => {
    changeSlide(1);
}, 3000);

