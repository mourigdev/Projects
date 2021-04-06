// transform: scale3d(1.5, 1.5, 1.5);
var play = document.getElementById("playMe");
document.querySelector(".LeftButPlay").addEventListener("mouseenter",()=>{
  
    play.style = "transform: scale3d(1.35, 1.35, 1.35); transition-duration: 0.3s;"
})

document.querySelector(".LeftButPlay").addEventListener("mouseleave",()=>{
  
    play.style = "transform: none"
})


// 
var Nisba100 = 210


var num1 = 148;
var Nisba1 = `${num1*(100/Nisba100)}%`
document.querySelector("#nisba1").style.height = Nisba1;


var num2 = 171;
var Nisba2 = `${num2*(100/Nisba100)}%`
document.querySelector("#nisba2").style.height = Nisba2;

var num3 = 180;
var Nisba3 = `${num3*(100/Nisba100)}%`
document.querySelector("#nisba3").style.height = Nisba3;

var num4 = 90;
var Nisba4 = `${num4*(100/Nisba100)}%`
document.querySelector("#nisba4").style.height = Nisba4;

var num5 = 210;
var Nisba5 = `${num5*(100/Nisba100)}%`
document.querySelector("#nisba5").style.height = Nisba5;



document.querySelectorAll(".Knisba")[0].append(`${num1}K`)
document.querySelectorAll(".Knisba")[1].append(`${num2}K`)
document.querySelectorAll(".Knisba")[2].append(`${num3}K`)
document.querySelectorAll(".Knisba")[3].append(`${num4}K`)
document.querySelectorAll(".Knisba")[4].append(`${num5}K`)


document.querySelector(".LeftMusicPlay").addEventListener("animationend", function(){
    document.getElementById("nisba1").style.display = "flex"
}
)

document.getElementById("nisba1").addEventListener("animationend", function(){
    document.getElementById("nisba2").style.display = "flex"
}
)

document.getElementById("nisba2").addEventListener("animationend", function(){
    document.getElementById("nisba3").style.display = "flex"
}
)

document.getElementById("nisba3").addEventListener("animationend", function(){
    document.getElementById("nisba4").style.display = "flex"
}
)

document.getElementById("nisba4").addEventListener("animationend", function(){
    document.getElementById("nisba5").style.display = "flex"
}
)