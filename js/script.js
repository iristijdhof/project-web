// Bronnen:
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// https://www.w3schools.com/jsref/prop_node_parentelement.asp
// https://stackoverflow.com/questions/10381296/best-way-to-get-child-nodes
// https://www.w3schools.com/jsref/prop_node_nextsibling.asp
// https://www.w3schools.com/jsref/prop_element_classlist.asp
// https://www.w3schools.com/jsref/met_document_queryselector.asp
// https://www.w3schools.com/jsref/prop_style_display.asp


// Toggle menu

var menuSwitch = document.getElementById("menu-switch");
var mainMenu = document.getElementById("main-menu");

function switchMenu() {
	mainMenu.classList.toggle("active");
		
}

menuSwitch.addEventListener("click", switchMenu);



// message
var messageRed = document.querySelector("#messageRed");
var messageGreen = document.querySelector("#messageGreen");

function hideRedMessage() {
	messageRed.classList.toggle("active");
	loading();
	setTimeout(function(){messageGreen.classList.toggle("active"); }, 2000);	
}

function hideGreenMessage() {
	messageGreen.classList.toggle("active");
}

messageRed.addEventListener("click", hideRedMessage);

messageGreen.addEventListener("click", hideGreenMessage);


// Sorteren

var sortButton = document.querySelector("#sortButton");

function sortArticles() {
	if ( sortButton.checked = true ) {
		document.querySelector("article:nth-of-type(1)").style.display = "none";
		document.querySelector("article:nth-of-type(2)").style.display = "none";
		document.querySelector("article:nth-of-type(4)").style.display = "none";
	}
}

sortButton.addEventListener("click", sortArticles);



// Likebutton
var likeButton = document.getElementById("like-button");
var likeText = likeButton.nextSibling;
var path = "../images/";
var images = ["laden.png", "laden2.png", "like2.png"];

function loading() {
	setTimeout(function(){ likeButton.src = path + images[0]; }, 0);
	setTimeout(function(){ likeButton.src = path + images[1]; }, 200);
	setTimeout(function(){ likeButton.src = path + images[0]; }, 400);
	setTimeout(function(){ likeButton.src = path + images[1]; }, 600);
	setTimeout(function(){ likeButton.src = path + images[0]; }, 800);
	setTimeout(function(){ likeButton.src = path + images[1]; }, 1000);
	setTimeout(function(){ likeButton.src = path + images[0]; }, 1200);
	setTimeout(function(){ likeButton.src = path + images[1]; }, 1400);
	setTimeout(function(){ likeButton.src = path + images[0]; }, 1600);
	setTimeout(function(){ likeButton.src = path + images[1]; }, 1800);
	setTimeout(function(){ likeButton.src = path + images[2]; }, 1800);
	setTimeout(function(){ likeText.innerHTML= "Gedownload!"; }, 2000);
	
}

likeButton.addEventListener("click", function(){
	loading();
});