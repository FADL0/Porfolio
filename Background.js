var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'black';
body.style.transitionDuration = '2s'
// trigger this function every time the user scrolls



function myFunction(x) {
if (x.matches) { // If media query matches
window.onscroll = function (event) {
    var scroll = window.pageYOffset;

    if (scroll < 950) {
        // mainpage
        body.style.backgroundColor = 'black';
         
    }  else if (scroll >= 1500 && scroll < 2500) {
        // yellow
        body.style.backgroundColor = '#238c2a'
    } else if (scroll >= 2500 && scroll < 5000) {
        // blue
       
        body.style.backgroundColor = 'black';
    } else if (scroll >= 5000 && scroll < 6000) {
        // orange
        body.style.backgroundColor = '#93C572';
    } else {
        // purple
        body.style.backgroundColor = 'black';
    }
    
}
} else  {
    window.onscroll = function (event) {
    var scroll = window.pageYOffset;

    if (scroll < 1250) {
        // mainpage
        body.style.backgroundColor = 'black';
     
    }  else if (scroll >= 1250 && scroll < 2000) {
        // page2
        body.style.backgroundColor = '#238c2a'
    } else if (scroll >= 2000 && scroll < 3850) {
        // page3
       
        body.style.backgroundColor = 'black';
    
    } else if (scroll >= 3850 && scroll < 6000) {
        // page4
        body.style.backgroundColor = '#93C572';
    
    } else {
        // black
        body.style.backgroundColor = 'black';
    }
    
}


}
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/* Burger */
let menu = document.querySelector(".imlosingit");
let menudisplay = document.querySelector(".demontime");


menu.addEventListener('click', function(){
    
    menudisplay.classList.toggle('demontimesupreme');
    menu.classList.toggle('orami');
  
})


let home = document.querySelector(".home")
let homechanges = document.querySelector(".homechanges")
let about = document.querySelector(".About")
let Exp = document.querySelector(".Exp")
let Resum = document.querySelector(".Resum")
home.addEventListener('click',function(){
    homechanges.classList.toggle('homechanges2')
})

home.addEventListener('click' , function(){
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
about.addEventListener("click", ()=>{
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
Exp.addEventListener("click", ()=>{
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})
Resum.addEventListener('click', function(){
    menudisplay.classList.remove('demontimesupreme');
    menu.classList.remove('orami');
})