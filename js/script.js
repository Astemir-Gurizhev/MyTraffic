let qstnItem = document.querySelectorAll('.qstn-item')
let qstnText = document.querySelectorAll('.qstn-item__text')
let qstnImg = document.querySelectorAll('.qstn-item__arrow')


qstnItem.forEach(item => {
    item.addEventListener('click', (e) => {
        qstnText.forEach(text => {
            text.classList.toggle('qstn-item__text-active')
        })
        qstnImg.forEach(img => {
            img.classList.toggle('qstn-item__arrow-active')
        })
    })
})