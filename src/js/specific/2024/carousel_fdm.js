document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector('.the-infusions__splide')) {
        const splide = new Splide('.the-infusions__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 6,
            perMove: 1,
            pagination: false,
            gap: '.5rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                        gap: '.5rem',
                    },
                    1024: {
                        perPage: 4,
                        gap: '.5rem',
                    },
                    1440: {
                        perPage: 5,
                        gap: '.5rem',
                    },
                },
            classes: {
                arrows: 'splide__arrows custom__arrows',
                arrow : 'splide__arrow custom__arrow',
                prev  : 'splide__arrow--prev custom__prev',
                next  : 'splide__arrow--next custom__next',
            },
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
            perMove: 1,
            pagination: false,
            gap: '.5rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                        gap: '.5rem',
                    },
                    1024: {
                        perPage: 4,
                        gap: '.5rem',
                    },
                    1440: {
                        perPage: 5,
                        gap: '.5rem',
                    },
                },
            classes: {
                arrows: 'splide__arrows custom__arrows',
                arrow : 'splide__arrow custom__arrow',
                prev  : 'splide__arrow--prev custom__prev',
                next  : 'splide__arrow--next custom__next',
            },
        });
        splide2.mount();
    }
})