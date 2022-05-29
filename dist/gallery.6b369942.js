const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    effect: "cube",
    pagination: {
        el: ".swiper-pagination"
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});

//# sourceMappingURL=gallery.6b369942.js.map
