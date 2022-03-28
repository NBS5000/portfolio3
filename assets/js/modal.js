
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
        }else if(proj == "cricket"){
            return;
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
    console.log(url);
    fetch(url)
    .then(
        res => res.json(),
    )
    .then(function(res){
        repoName = res.name;
        let repoTitle, repoTitle2;
        var about = res.description;
        var page = res.homepage;
        if(!about || !page){
            setTimeout(function(){},1000);
        }
        if(!page){
                page = gitLink + repoName;
        }
        if(repoName == "Ecommerce-fullstack"){
            page = "https://mosespamarketplace.herokuapp.com/";
            visit.value = page;
            git.value = "https://github.com/cn-kp/Ecommerce-fullstack";

        }else{
            visit.value = repoName;
            git.value = repoName;
        }
        console.log(visit.value);
        console.log(git.value);
        console.log(repoName);
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
function visitPage(x){
    if(x == "https://mosespamarketplace.herokuapp.com/"){
        var link = x;
    }else{
        var link = gitLink + x + "/index.html";
    }
    console.log(link);
    window.open(link, '_blank');
}
// go to repo
function visitGit(x){
    if(x == "https://github.com/cn-kp/Ecommerce-fullstack"){
        var link = x;
    }else{
        var link = repoLink + x;
    }
    console.log(link);
    window.open(link, '_blank');
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