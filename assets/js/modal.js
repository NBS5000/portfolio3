
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
        if(proj == "mosEspa"){
            var link = "https://mosespamarketplace.herokuapp.com/";
        }else{
            var link = gitLink + proj;
        }
        linkFrame.src = link;
        getInfo(proj);
    });
});


//get repo info for display
function getInfo(repoName){
    if(repoName == "mosEspa"){
        var url = "https://api.github.com/repos/cn-kp/Ecommerce-fullstack";
    }else{
        var url = requestUrl + repoName;
    }
    fetch(url)
    .then(
        res => res.json(),
    )
    .then(function(res){
        repoName = res.name;
        let repoTitle, repoTitle2, repoTitle3,repoTitle4,regX1,regX2;
        var about = res.description;
        var page = res.homepage;
        if(!about || !page){
            setTimeout(function(){},1000);
        }
        if(!page){
            if(repoName == "Ecommerce-fullstack"){
                page = "https://mosespamarketplace.herokuapp.com/";
                visit.value = page;
                git.value = "https://github.com/cn-kp/Ecommerce-fullstack";
            }else{
                page = gitLink + repoName;
                visit.value = repoName;
                git.value = repoName;
            }
        }
        linkAbout.innerHTML = about;
        linkFrame.src = page;

        repoTitle = repoName;

        repoTitle = repoName.replace(/([A-Z])/g, ' $1').trim();
        repoTitle2 = repoTitle.charAt(0).toUpperCase() + repoTitle.slice(1);
        
        linkTitle.innerHTML = repoTitle2;
        
        modalProj.style.display = "block";
    })
    .catch(function (error) {
        alert('About did not work: ' + error);
    });
}
// go to page
function visitPage(){
    var goto = visit.value;
    if(goto == "https://mosespamarketplace.herokuapp.com/"){
        var link = goto;
    }else{
        var link = gitLink + goto + "/index.html";
    }
    window.open(link, '_blank').focus();
}
// go to repo
function visitGit(){
    var goto = git.value;
    if(goto == "https://github.com/cn-kp/Ecommerce-fullstack"){
        var link = goto;
    }else{repoLink
        var link = gitLink + goto;
    }
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