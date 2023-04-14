
/* Extras */
window.location.hash = "";
history.replaceState(null, null, ' ');
let CvSpan = document.querySelector(".CV-change")





var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'black';
body.style.transitionDuration = '2s'
let x = 600
let P1 = document.querySelector(".P1")
let P2 = document.querySelector(".P2")
let P3 = document.querySelector(".P3")
let P4 = document.querySelector(".P4")
let P5 = document.querySelector(".P5")
let P6 = document.querySelector(".P6")



function BigScreen() {
    CvSpan.innerText = 'on the left'
    window.onscroll = function (event) {
        var scroll = window.pageYOffset;

        if (scroll < 1200) {
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
        } else if (scroll >= 4500 && scroll < 7500) {
            P1.style.color = "gray"
            P2.style.color = "gray"
            P3.style.color = "gray"
            P4.style.color = "gray"
            P5.style.color = "white"
            P6.style.color = "gray"
            body.style.backgroundColor = 'black';
        }
        else {
            P1.style.color = "gray"
            P2.style.color = "gray"
            P3.style.color = "gray"
            P4.style.color = "gray"
            P5.style.color = "white"
            P6.style.color = "gray"
            body.style.backgroundColor = 'white';
        }
    }
}

function SmallScreen() {
    CvSpan.innerText = 'on the top'
    window.onscroll = function (event) {
        var scroll = window.pageYOffset;

        if (scroll < 1250) {

            body.style.backgroundColor = 'black';


        } else if (scroll >= 1250 && scroll < 2000) {

            body.style.backgroundColor = '#238c2a'
        } else if (scroll >= 2000 && scroll < 4700) {


            body.style.backgroundColor = 'black';

        } else if (scroll >= 4700 && scroll < 5800) {

            body.style.backgroundColor = '#93C572';

        } else if (scroll >= 5800 && scroll < 10000) {

            body.style.backgroundColor = 'black';

        }

        else {

            body.style.backgroundColor = 'white';
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
let redisplay = document.querySelector(".demontime");


menu.addEventListener('click', function () {

    redisplay.classList.toggle('demontimesupreme');
    menu.classList.toggle('orami');

})


let home = document.querySelector(".home")
let homepages = document.querySelector(".homechanges")
let about = document.querySelector(".About")
let Exp = document.querySelector(".Exp")
let Resume = document.querySelector(".Resum")
home.addEventListener('click', function () {
    homepages.classList.toggle('homechanges2')
})

home.addEventListener('click', function () {
    redisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
about.addEventListener("click", () => {
    redisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
Exp.addEventListener("click", () => {
    redisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
Resume.addEventListener('click', function () {
    redisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})


/* Animations */
let object = new IntersectionObserver((Entries) => {
    Entries.forEach((View) => {
        if (View.isIntersecting) {
            View.target.classList.add("show")
        }
    })
})
let hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((element) => {
    object.observe(element)
})
let hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((element) => {
    object.observe(element)
})
let hiddenElementsUp = document.querySelectorAll('.hidden-up');
hiddenElementsUp.forEach((element) => {
    object.observe(element)
})
let hiddenElementsDown = document.querySelectorAll('.hidden-down');
hiddenElementsDown.forEach((element) => {
    object.observe(element)
})

