//burger menu activation
const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
//navigate through menu sections
const menuLinks =document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => 
    link.addEventListener('click', (e) => {
        const key = e.target.dataset.key;
    const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({top: section, behavior: 'smooth'});
    burgerBtn.classList.remove('active');
    menu.classList.remove('active');
}));
//slider show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'flex';
}
