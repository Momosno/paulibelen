const botonOk = document.getElementById("botonOK");
const adultMenu= document.querySelector(".adult-menu")
const adultContent = document.querySelectorAll(".adult-content")
const modal = document.querySelector(".modal")

// console.log(adultMenu)
// console.log(adultContent)

adultMenu.addEventListener("click", (e)=>{
    modal.style.display = "flex";
})



botonOk.addEventListener("click",(e) =>{
    console.log(adultContent);
    adultContent.forEach(element => {
        element.classList.toggle("adult-content");
    });
    
    modal.style.display = "none";
    adultMenu.style.display = "none";
    

})

