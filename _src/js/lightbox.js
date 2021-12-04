

var lightboxListener = () => {
    var images = document.querySelectorAll('.gallery_photo')
    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active')
            var slug = image.dataset.slug
            var category = image.dataset.category
            var imgTag = e.target.parentElement.parentElement.querySelector('img')

            var img = document.createElement('img')
            img.src = image.src
            img.srcset = ` https://ik.imagekit.io/gavin/kellyfizardo/${category}/tr:w-400,pr-true/${slug} 300w,
            https://ik.imagekit.io/gavin/kellyfizardo/${category}/tr:w-500,pr-true/${slug} 700w,
            https://ik.imagekit.io/gavin/kellyfizardo/${category}/tr:w-700,pr-true/${slug} 1000w,
            `
            lightbox.innerHTML = ''
            lightbox.appendChild(img)
        })
    })
}

var lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.append(lightbox)
lightboxListener()



lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})



window.addEventListener('keydown', e => {
    if (e.keyCode == '27') {
        lightbox.classList.remove('active')
    }
})
