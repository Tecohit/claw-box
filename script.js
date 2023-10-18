let ham=document.querySelector(".ham")
let nav=document.querySelector(".mob-links")
ham.addEventListener("click",()=>{
    console.log("clicked")
    ham.classList.toggle("active")
    nav.classList.toggle("show")

})