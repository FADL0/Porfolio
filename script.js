var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'black';
body.style.transitionDuration = '2s'

var x = 600


function BigScreen() {

    window.onscroll = function (event) {
        var scroll = window.pageYOffset;

        if (scroll < 950) {

            body.style.backgroundColor = 'black';

        } else if (scroll >= 1200 && scroll < 1800) {

            body.style.backgroundColor = '#238c2a'
        } else if (scroll >= 1800 && scroll < 3600) {


            body.style.backgroundColor = 'black';
        } else if (scroll >= 3600 && scroll < 6000) {

            body.style.backgroundColor = '#93C572';
        } else {

            body.style.backgroundColor = 'black';
        }

    }
}

function SmallScreen() {
    window.onscroll = function (event) {
        var scroll = window.pageYOffset;

        if (scroll < 1250) {

            body.style.backgroundColor = 'black';

        } else if (scroll >= 1250 && scroll < 2000) {

            body.style.backgroundColor = '#238c2a'
        } else if (scroll >= 2000 && scroll < 3850) {


            body.style.backgroundColor = 'black';

        } else if (scroll >= 4700 && scroll < 6000) {

            body.style.backgroundColor = '#93C572';

        } else {

            body.style.backgroundColor = 'black';
        }

    }

}
function BodyColor() {
    let w = innerWidth
    if (w < x) {

        SmallScreen();

    } else if (w > x) {

        BigScreen();


    }
}
BodyColor()
window.addEventListener("resize", function () {
    BodyColor()
})




/* Burger */
let menu = document.querySelector(".imlosingit");
let menudisplay = document.querySelector(".demontime");


menu.addEventListener('click', function () {

    menudisplay.classList.toggle('demontimesupreme');
    menu.classList.toggle('orami');

})


let home = document.querySelector(".home")
let homechanges = document.querySelector(".homechanges")
let about = document.querySelector(".About")
let Exp = document.querySelector(".Exp")
let Resum = document.querySelector(".Resum")
home.addEventListener('click', function () {
    homechanges.classList.toggle('homechanges2')
})

home.addEventListener('click', function () {
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
about.addEventListener("click", () => {
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
Exp.addEventListener("click", () => {
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
Resum.addEventListener('click', function () {
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})