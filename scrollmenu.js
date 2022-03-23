$('.scrollDown').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#sectionScrollTo').offset().top - $('header').height() / 12 * 9.9
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