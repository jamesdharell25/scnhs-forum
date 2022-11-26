//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReplies(id){
    var replyArea = document.getElementById(id);
    replyArea.classList.remove("hide");
}

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open")
})

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open")
})
var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

