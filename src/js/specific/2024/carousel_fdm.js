document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector('.the-infusions__splide')) {
        const splide = new Splide('.the-infusions__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 6,
                breakpoints: {
                    767: {
                        perPage: 1,
                    },
                    1440: {
                        perPage: 5,
                    },
                }
            });
        splide.mount();
    }
    if(document.querySelector('.accessoires__splide')) {
        const splide2 = new Splide('.accessoires__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 6,
                breakpoints: {
                    767: {
                        perPage: 1,
                    },
                    1440: {
                        perPage: 5,
                    },
                }
            });
        splide2.mount();
    }
})