const black = document.getElementById('black')
const openedMenu = document.getElementById('opened-menu')
const menu = document.getElementById('menu')
const closed = document.getElementById('close')

menu.onclick = () =>{
    openedMenu.classList.add('active')
    black.classList.add('active')
}

closed.onclick = () =>{
    openedMenu.classList.remove('active')
    black.classList.remove('active')
}