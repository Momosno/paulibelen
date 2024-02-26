const botonOk = document.getElementById("botonOK");
const adultMenu= document.querySelector(".adult-menu");
const adultContent = document.querySelectorAll("li");
const modal = document.querySelector(".modal");
const backBtn = document.getElementById("back-btn");
const video = document.getElementById("background-video");
let mayor18 = false;

// console.log(adultMenu)



adultMenu.addEventListener("click", (e)=>{
    if(mayor18==false){
    modal.style.display = "flex";
    }
    else{
        adultContent.forEach(element => {
            element.classList.toggle("adult-content");
        });
        adultMenu.style.display = "none";
    }
})

botonOk.addEventListener("click",(e) =>{
    // console.log(adultContent);

    adultContent.forEach(element => {
        element.classList.toggle("adult-content");
    });
    
    modal.style.display = "none";
    adultMenu.style.display = "none";
    mayor18=true;

})

backBtn.addEventListener("click", (e)=>{
    adultContent.forEach(element => {
        element.classList.toggle("adult-content");
    });
    adultMenu.style.display = "block";


})


// Adult-content : display none;


