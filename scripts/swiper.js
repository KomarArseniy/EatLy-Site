export default function initSwiper() {
    return new Swiper(".mySwiper", {
        spaceBetween: 20,
        slidesPerView: 'auto',
        speed: 800,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            // when window width is >= 1024px
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

        }
    });
}
