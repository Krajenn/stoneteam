$('.scrollDown').on('click', function () {
    let headerHeight = 0;
    if (window.innerWidth < 1024) {
        headerHeight = $('header').height() / 12 * 9.9;
    } else if (window.innerWidth >= 1024) {
        headerHeight = $('header').height() / 8 * 5.9;
    }

    $('body, html').animate({
        scrollTop: $('#sectionScrollTo').offset().top - headerHeight
    }, 500)
})

window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

    let bgFixed = document.querySelector('.bgFixed');
    let galleryPosition = document.querySelector('#sectionScrollTo').offsetTop;
    if (window.scrollY > galleryPosition) {
        bgFixed.classList.add('active');
    } else if (window.scrollY < galleryPosition) {
        bgFixed.classList.remove('active');
    }
})