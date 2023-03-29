const btn = document.querySelector('.btnt')
const btnticon = document.querySelector('.btnt i')
const menu = document.querySelector('.menu')

btn.onclick = function () {
    menu.classList.toggle('op')
    const isOpen = menu.classList.toggle('open')

    btnticon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}