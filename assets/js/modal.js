
// global vars
const gitLink = "https://nbs5000.github.io/";
const linkFrame = document.getElementById("modalView");
const linkTitle = document.getElementById("modalTitle");
const linkAbout = document.getElementById("modalAbout");
const requestUrl = 'https://api.github.com/repos/nbs5000/';
const repoLink = "https://github.com/NBS5000/";
const visit = document.getElementById("visit");
const git = document.getElementById("git");

// Get the modal
const modal = document.querySelector("#myModal_menu");
const modalProj = document.querySelector("#myModal_proj");


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

// adding listener to all repo buttons
const modalBtn_proj = document.querySelectorAll('.projViewBtn');
modalBtn_proj.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const proj = event.target.getAttribute("data-value");
        var link = gitLink + proj;
        linkFrame.src = link;
        linkTitle.innerHTML = "Date Night!";
        getInfo(proj);
    });
});


//get repo info for display
function getInfo(repoName){
    var url = requestUrl + repoName;
    fetch(url)
    .then(
        res => res.json(),
    )
    .then(function(res){
        var about = res.description;
        var page = res.homepage;
        if(!about || !page){
            setTimeout(function(){},1000);
        }
        if(!page){
            page = gitLink + repoName;
        }
        linkAbout.innerHTML = about;
        linkFrame.src = page;
        visit.value = repoName;
        git.value = repoName;
        modalProj.style.display = "block";
    })
    .catch(function (error) {
        alert('About did not work: ' + error);
    });
}
// go to page
function visitPage(){
    var goto = visit.value;
    var link = gitLink + goto + "/index.html";
    window.open(link, '_blank').focus();
}
// go to repo
function visitGit(){
    var goto = visit.value;
    var link = repoLink + goto;
    window.open(link, '_blank').focus();
}

// Closing the modal

// using cancel button
const canxBtn = document.querySelectorAll('.canx');
canxBtn.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        closeModal();
    });
});
// clicking outside target area
window.onclick = function(event) {
    if (event.target == modal || event.target == modalProj) {
        closeModal();
    }
}
// clear and close
function closeModal(){
    linkAbout.innerHTML = "";
    linkTitle.innerHTML = "";
    visit.value = "";
    git.value = "";
    linkFrame.src = "";
    modal.style.display = "none";
    modalProj.style.display = "none";
}