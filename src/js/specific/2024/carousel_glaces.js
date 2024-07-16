document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector('.carafes-xsell__splide')) {
        const splide = new Splide('.carafes-xsell__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 4,
            perMove: 1,
            pagination: false,
            gap: '1rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                    },
                    1024: {
                        perPage: 4,
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
})