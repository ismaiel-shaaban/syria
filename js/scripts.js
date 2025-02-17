// ============== OPEN & REMOVE NAVBAR MOBILE
let openNav = document.querySelector(".tabs")
let menu = document.querySelector(".menu")

openNav.onclick = function() {
  openNav.classList.toggle("active")
  if (openNav.classList.contains("active")) {
    openNav.classList.add("active")
    menu.classList.add("active")
  } else {
    openNav.classList.remove("active")
    menu.classList.remove("active")
  }
}

let header = document.querySelector("header")
window.onscroll = function() {
  if (this.scrollY >= header.offsetTop) {
    header.classList.add("sticky")
  } 
}

let allLinks = document.querySelectorAll(".menu li a");
allLinks.forEach(el=> {
  el.onclick = function (e) {
    e.preventDefault();
    allLinks.forEach(el=> el.classList.remove("active"))
    this.classList.add("active")
    let scroll = document.querySelector("#" + this.getAttribute("data-scroll")).offsetTop
    scrollTo({
      top: scroll - header.clientHeight,
      behavior: 'smooth'
    })
  }
})