function nav(url) {
    var getUrl = url.getAttribute("data-nav");
    window.location.href = getUrl;
}

window.addEventListener('DOMContentLoaded', function () {

    const header = document.querySelector('.header');
    const slider = document.querySelector('.slider');
    let statusChangeHeader = false;
    let owlSlider = $(".slider .owl-carousel");
    let owlSearch = $(".search .owl-carousel");
    let owlProduct = $('.new-product .owl-carousel, .best-sale-product .owl-carousel, .best-view-product .owl-carousel');

    if (window.innerWidth >= 1023) {

        owlSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000

        });
        owlSearch.owlCarousel({
            items: 5,
            loop: false,
            nav: true,
            dots: false
        });
        owlProduct.owlCarousel({
            items: 4,
            loop: false,
            nav: true,
            dots: false,
            margin: 10
        });

        let scrollPos = 0;

        document.addEventListener("scroll", function () {
            if (!statusChangeHeader) {
                if (window.scrollY >= (slider.offsetTop + 300)) {
                    header.classList.add('posi-fixed');
                    statusChangeHeader = true;
                }

            }
            else {
                if (window.scrollY < (slider.offsetTop + 300)) {
                    header.classList.remove('posi-fixed');
                    statusChangeHeader = false;
                }
            }
            // detects new state and compares it with the new one
            if ((document.body.getBoundingClientRect()).top > scrollPos)
                // document.querySelector('.header').setAttribute('data-animate', 'skewX(8deg) rotateX(5deg)');
                document.querySelector('.header').style.transform = 'skewX(2deg) translateY(-0.2rem)';
            else
                // document.querySelector('.header').setAttribute('data-animate', 'skewX(-8deg) rotateX(-5deg)');
                document.querySelector('.header').style.transform = 'skewX(-2deg) translateY(0.2rem)';
            // saves the new position for iteration.
            scrollPos = (document.body.getBoundingClientRect()).top;
            setTimeout(function () {
                document.querySelector('.header').style.transform = '';
            }, 200);
        })
    }
    if (window.innerWidth < 1023) {
        let subMenuMbDOM = document.querySelector('.navigation');
        let backgroundMask = document.querySelector('.background-mask');
        let backMenuDOM = document.querySelector('.navigation .nav-gender .nav-icon--back');
        let navMbDOM = document.querySelector('.header__middle .header__group-icon .header-bar');

        // handle show/hide menu mobile
        navMbDOM.onclick = function () {
            subMenuMbDOM.classList.add('active-nav');
            backgroundMask.classList.add('active-mask');
        }
        backgroundMask.onclick = backMenu;
        backMenuDOM.onclick = backMenu;

        function backMenu() {
            subMenuMbDOM.classList.remove('active-nav');
            backgroundMask.classList.remove('active-mask');
        }

        let header_bottom = document.querySelector('.header .header__bottom');
        document.addEventListener("scroll", function () {
            if (!statusChangeHeader) {
                if (window.scrollY > 50) {
                    header_bottom.classList.add('d-none');
                    header.classList.add('fixed');
                    statusChangeHeader = true;
                }

            }
            else {
                if (window.scrollY <= 50) {
                    header_bottom.classList.remove('d-none');
                    header.classList.remove('fixed');
                    statusChangeHeader = false;
                }
            }
        });
        if (window.innerWidth > 740) {

            owlSearch.owlCarousel({
                items: 3,
                loop: false,
                nav: true,
                dots: false
            });

            owlProduct.owlCarousel({
                items: 3,
                loop: false,
                nav: true,
                dots: false,
                margin: 10
            });


        }
        if (window.innerWidth <= 739) {
            owlSearch.owlCarousel({
                items: 2,
                loop: false,
                nav: true,
                dots: false
            });

            owlProduct.owlCarousel({
                items: 2,
                loop: false,
                nav: true,
                dots: false,
                margin: 10
            });

        }
    }

})











