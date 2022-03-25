

// Get the modal
var modal = document.getElementById("myModal");

// global vars
var linkFrame = document.getElementById("modalView");
var linkTitle = document.getElementById("modalTitle");
var linkAbout = document.getElementById("modalAbout");

// set and set info when clicking on individual links and show modal
var dateBtn = document.getElementById("img_dateNight");
dateBtn.addEventListener("click",function(){
    var type = "dateNight";
    var link = gitLink + type;
    linkFrame.src = link;
    linkTitle.innerHTML = "Date Night!";
    getInfo(type);
});



// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn = document.getElementById("canx");
canxBtn.addEventListener("click",function(){
    linkAbout.innerHTML = "";
    linkTitle.innerHTML = "";
    visit.value = "";
    git.value = "";
    linkFrame.src = "";
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        linkAbout.innerHTML = "";
        linkTitle.innerHTML = "";
        visit.value = "";
        git.value = "";
        linkFrame.src = "";
        modal.style.display = "none";
    }
}