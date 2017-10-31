var menuSwitch = document.getElementById("menu-switch");
var mainMenu = document.getElementById("main-menu");

function switchMenu() {
	if (mainMenu.classList.contains("active")) {
		mainMenu.classList.remove("active");
	} else {
		mainMenu.classList.add("active");
	}
		
}

menuSwitch.addEventListener("click", switchMenu);