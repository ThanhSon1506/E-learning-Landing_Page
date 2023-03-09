/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.querySelector('#header');
    //khi keo man hinh lon hon 50 chieu cao cua viewporrt, them class
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});
sr.reveal(`.home-title, .home-description,.homer-image`);
sr.reveal(`.home-image__notification, .home-actions`, { delay: 500 });
sr.reveal(`.home-image__canlendar`, { delay: 600 });
sr.reveal(`.home-image__envelope`, { delay: 700 });
sr.reveal(`.home-image__info`, { delay: 800, origin: 'bottom' });

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".testimonial-slider", {
    spaceBetween: 32,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 'auto',
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

