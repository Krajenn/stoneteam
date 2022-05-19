// SCROLL BUTTON ON MAIN PAGE (section1)
$('.scrollDown').on('click', function () {
    let headerHeight = 0;
    if (window.innerWidth < 1024) {
        headerHeight = $('header').height() / 12 * 9.9;
    } else if (window.innerWidth >= 1024 && window.innerHeight > 1000) {
        headerHeight = $('header').height() / 8 * 5.9;
    } else if (window.innerWidth >= 1024 && window.innerHeight <= 1000) {
        headerHeight = $('header').height() / 10 * 7.9;
    }

    $('body, html').animate({
        scrollTop: $('.sectionOffer').offset().top - headerHeight
    }, 500)
})

// STICKY HEADER + mobile bg fixed delete
let bgFixed = document.querySelector('.bgFixed') !== null ? document.querySelector('.bgFixed') : null;
let galleryPosition = document.querySelector('.sectionAbout') !== null ? document.querySelector('.sectionAbout').offsetTop + 20 : null;
window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

    if (galleryPosition) {
        if (window.scrollY > galleryPosition) {
            bgFixed.classList.add('active');
        } else if (window.scrollY < galleryPosition) {
            bgFixed.classList.remove('active');
        }
    }
})

// MOBILE SIDE MENU
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.topnav');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', handleClick);