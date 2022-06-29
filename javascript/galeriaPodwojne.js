galery = document.querySelector('.my-gallery');

for (let i = 1; i <= 20; i++) {
    div = document.createElement('DIV')
    a = document.createElement('a')
    img = document.createElement('IMG')
    span = document.createElement('span')
    icon = document.createElement('i')

    galery.appendChild(div)
    a.setAttribute('href', '../img/gallery/nagrobki/podwojne/nagrobek' + i + '.jpg')
    a.setAttribute('data-lightbox', 'nagrobki')
    div.appendChild(a)

    img.setAttribute('data-src', '../img/gallery/nagrobki/podwojne/nagrobek' + i + '.jpg')
    img.setAttribute('alt', img.src)
    img.setAttribute('class', 'lazy')

    span.setAttribute('class', 'zoomIcon')
    icon.setAttribute('class', 'icon-search')
    span.appendChild(icon)

    a.appendChild(img)
    a.appendChild(span)
};

const images = document.querySelectorAll('.lazy');

let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            img.setAttribute('src', img.getAttribute('data-src'))
            observer.unobserve(entry.target);
        }
    })
}, imageOptions);

images.forEach(image => {
    observer.observe(image)
})