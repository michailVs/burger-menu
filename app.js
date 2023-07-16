let toggle = document.querySelector('.header__toggle')
let header = document.querySelector('.header')
let body = document.querySelector('body')

toggle.addEventListener('click', () => {
    if (body.classList.value === 'noscroll') {
        body.classList.remove('noscroll')
        header.classList.remove('open')
    } else {
        body.classList.add('noscroll')
        header.classList.add('open')
    }
})