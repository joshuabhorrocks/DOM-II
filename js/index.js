// function clickEventHandler(e) {
//     console.log(e.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(e.target)
//   }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)


// Actual Project
const h1Hover = document.querySelector("h1")

h1Hover.addEventListener("mouseover", e => {
    e.target.style.color = "dodgerBlue";
})
h1Hover.addEventListener("mouseout", e => {
    e.target.style.color = "black";
})

const navColor = document.querySelector("nav")

navColor.addEventListener("click", e => {
        e.target.style.color = "orange";
}) // Click nav items to change them orange

const headBorder = document.querySelector("header")

headBorder.addEventListener("keydown", e => {
    e.target.style.border = "3px solid aqua";
    })//e + click on nav items adds border 
headBorder.addEventListener("keyup", e => {
    e.target.style.border = "3px solid black";
})

const adventImg = document.querySelector(".adventure-img")


const funImg = document.querySelector(".img-fluid")

funImg.addEventListener("dblclick", e => {
    e.target.style.transform = "rotate(90deg)";
})

const boatImg = document.querySelector(".destination-img")

boatImg.addEventListener("auxclick", e => {
    e.target.style.transform = "rotate(180deg)";
})

const btnChange = document.querySelector(".btn")

btnChange.addEventListener("mouseenter", e => {
    e.target.style.border = "5px dotted orange";
})
btnChange.addEventListener("mouseleave", e => {
    e.target.style.border = "0px dotted orange";
})

const footerChange = document.querySelector("footer")

footerChange.addEventListener("wheel", e => {
    e.target.style.color = "dodgerBlue";
})   

