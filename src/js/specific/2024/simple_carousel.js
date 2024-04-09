document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector('.splide--pdp')) {
        const splide = new Splide('.splide--pdp', {
            type: 'loop',
                perPage: 4,
                drag: false,
                arrows: false,
                pagination: false,
                breakpoints: {
                    767: {
                        perPage: 1,
                        arrows: true,
                        autoplay: true,
                        speed: 1000,
                        easing: 'ease',
                        drag: true,
                    },
                }
            });
        splide.mount();
    }
})