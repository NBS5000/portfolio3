

// Get the modal
const modal = document.querySelector("#myModal_menu");

// cancel buttons
const canx = document.querySelector(".canx");



// show menu
const burger = document.querySelector("#burger");
const burger2 = document.querySelector("#burger2");
burger.addEventListener("click",function(){
    if(modal.style.display != "block"){
        modal.style.display = "block";
    }else{
        modal.style.display = "none";
    }
});
burger2.addEventListener("click",function(){
    if(modal.style.display != "block"){
        modal.style.display = "block";
    }else{
        modal.style.display = "none";
    }
});


// When the user clicks the "Cancel" button, close the modal
// canx.addEventListener("click",function(){
//     modal.style.display = "none";
//     console.log("close");
// });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        console.log("close");
    }
}



const modalBtn_proj = document.querySelectorAll('.projViewBtn');
modalBtn_proj.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const att = event.target.getAttribute("data-value");
        const iImg = "img_" + att;
        const iName = "name_" + att;
        const iPrice = "price_" + att;
        const iDesc = "desc_" + att;
        
        document.getElementById("name2").value = document.getElementById(iName).innerHTML;
        document.getElementById("price2").value = document.getElementById(iPrice).innerHTML;
        document.getElementById("description2").value = document.getElementById(iDesc).innerHTML;
        document.getElementById("image_link2").value = document.getElementById(iImg).src;
        modal2.style.display = "block";
    });
});