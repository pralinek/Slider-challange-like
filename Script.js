const slider = document.querySelector(".slider");
const pic = document.querySelector(".pic");
const txt = [...document.querySelectorAll(".text")];





var toggle =false; 

slider.addEventListener("click", changeSlide)

function changeSlide(){
toggle = !toggle
if(toggle){
    pic.style.backgroundSize = "0px, 100%";
    
    txt.forEach(x=>{
        x.classList.toggle("hidden")
    })    
}
else{
    pic.style.backgroundSize = "100%, 0px";
    
    txt.forEach(x=>{
        x.classList.toggle("hidden")
    })
    
}
}
