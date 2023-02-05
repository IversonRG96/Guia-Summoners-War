let menu = document.getElementById ('menu');
let menuHamb = document.getElementById('menuHamb');

function expardirMenu() {
    if (menu.style.display=='block') {
        menu.style.display  = 'none'
    } else{
        menu.style.display = 'block'
    }
}

menuHamb.addEventListener('click', expardirMenu);