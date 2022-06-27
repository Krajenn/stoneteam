galery = document.querySelector('.my-gallery')

for (let i = 1; i <= 128; i++) {
    div = document.createElement('DIV')
    a = document.createElement('a')
    img = document.createElement('IMG')
    span = document.createElement('span')
    icon = document.createElement('i')

    galery.appendChild(div)
    a.setAttribute('href', '../img/gallery/nagrobki/nagrobek' + i + '.jpg')
    a.setAttribute('data-lightbox', 'nagrobki')
    div.appendChild(a)

    img.src = '../img/gallery/nagrobki/nagrobek' + i + '.jpg'
    img.setAttribute('alt', img.src)
    img.setAttribute('loading', 'lazy')

    span.setAttribute('class', 'zoomIcon')
    icon.setAttribute('class', 'icon-search')
    span.appendChild(icon)

    a.appendChild(img)
    a.appendChild(span)
}