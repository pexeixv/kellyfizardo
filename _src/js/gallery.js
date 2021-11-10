var colc = new Colcade('.gallery_grid', {
    columns: '.gallery_column',
    items: '.gallery_photo'
})

var images = document.querySelectorAll('.gallery_photo')

var filterGallery = (arg, el) => {
    document.querySelector('.gallery_filter-active').classList.remove('gallery_filter-active')
    el.classList.add('gallery_filter-active')
    if (arg === 'all') {
        images.forEach(image => image.classList.remove('hide'))
        return 0
    }
    images.forEach(image => {
        if (!image.classList.contains(`gallery_photo-${arg}`))
            image.classList.add('hide')
        else
            image.classList.remove('hide')
    })


}