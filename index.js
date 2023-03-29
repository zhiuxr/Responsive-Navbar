const btnt = document.querySelector('.btnt')
const btnticon = document.querySelector('.btn2 i')
const menu = document.querySelector('.menu')

btnt.onclick = function () {
    menu.classList.toggle('op')
    const isOpen = menu.classList.toggle('op')

    btnticon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}