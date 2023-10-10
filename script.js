const getheader = document.querySelector("header");
window.addEventListener("scroll",() => {
    if (window.scrollY > 80){
        getheader.classList.add("nowsticky")    
        //alert("yes")
    }
    else{
        getheader.classList.remove("nowsticky") 
    }
});


const cancelIcon = document.querySelector("header nav > ul .x-icon")
const headertag = document.querySelector("header");
const menuIcon =  document.querySelector("header .menu");
menuIcon.addEventListener("click", () => {    
    headertag.classList.add("rightnav")
})

cancelIcon.addEventListener("click", () => {    
    headertag.classList.remove("rightnav")
})






// if(headertag.classList.contains("rightnav")){
//     headertag.classList.remove("rightnav")
// }else{
//     headertag.classList.add("rightnav");    
// }