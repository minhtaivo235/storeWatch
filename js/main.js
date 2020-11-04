function nav(url) {
    var getUrl = url.getAttribute("data-nav");
    window.location.href = getUrl;
}

const header = document.querySelector('.header');
const slider = document.querySelector('.slider');
let statusChangeHeader = false;
let scrollPos = 0;

if (window.innerWidth > 1023) {

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
            document.querySelector('.header').style.transform = 'skewX(1deg) translateY(-0.2rem)';
        else
            // document.querySelector('.header').setAttribute('data-animate', 'skewX(-8deg) rotateX(-5deg)');
            document.querySelector('.header').style.transform = 'skewX(-1deg) translateY(0.2rem)';
        // saves the new position for iteration.
        scrollPos = (document.body.getBoundingClientRect()).top;
        setTimeout(function () {
            document.querySelector('.header').style.transform = '';
        }, 200);
    })
}







