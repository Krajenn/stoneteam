window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

$('.scrollDown').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#sectionScrollTo').offset().top - 30
    }, 100)
})