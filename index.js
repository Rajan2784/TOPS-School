
const toggleBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-items")
toggleBtn.addEventListener("click",()=>{
    toggleBtn.classList.toggle("active-btn")
    nav.classList.toggle("nav-items-active")
})
