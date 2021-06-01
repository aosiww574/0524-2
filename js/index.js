const swiper = new Swiper('#a1', {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    observer: true,
    observeParents: true
});