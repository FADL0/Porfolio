var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'black';
body.style.transitionDuration = '2s'

let P1 = document.querySelector(".P1")
let P2 = document.querySelector(".P2")
let P3 = document.querySelector(".P3")
let P4 = document.querySelector(".P4")
let P5 = document.querySelector(".P5")
let P6 = document.querySelector(".P6")
console.log(P1);
var x = 600


function BigScreen() {

    window.onscroll = function (event) {
        var scroll = window.pageYOffset;

        if (scroll < 950) {
            body.style.backgroundColor = 'black';
            P1.style.color = "white"
            P2.style.color = "gray"
            P3.style.color = "gray"
            P4.style.color = "gray"
            P5.style.color = "gray"
            P6.style.color = "gray"
        } else if (scroll >= 1200 && scroll < 1800) {
            P1.style.color = "gray"
            P2.style.color = "white"
            P3.style.color = "gray"
            P4.style.color = "gray"
            P5.style.color = "gray"
            P6.style.color = "gray"
            body.style.backgroundColor = '#238c2a'
        } else if (scroll >= 1800 && scroll < 3600) {
            P1.style.color = "gray"
            P2.style.color = "gray"
            P3.style.color = "white"
            P4.style.color = "gray"
            P5.style.color = "gray"
            P6.style.color = "gray"
            body.style.backgroundColor = 'black';
        } else if (scroll >= 3600 && scroll < 4500) {
            P1.style.color = "gray"
            P2.style.color = "gray"
            P3.style.color = "gray"
            P4.style.color = "white"
            P5.style.color = "gray"
            P6.style.color = "gray"
            body.style.backgroundColor = '#93C572';
        } else {
            P1.style.color = "gray"
            P2.style.color = "gray"
            P3.style.color = "gray"
            P4.style.color = "gray"
            P5.style.color = "white"
            P6.style.color = "gray"
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

        } else if (scroll >= 4700 && scroll < 5000) {

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