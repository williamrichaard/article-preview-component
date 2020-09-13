const btn = document.querySelector("button");
const path = document.querySelector("path");

var setFlex = new Set();
var setColor = new Set();

setFlex = () => {
	document.querySelector(".share-details").style.display === "" ||
		document.querySelector(".share-details").style.display === "none"
		? (document.querySelector(".share-details").style.display = "flex")
		: (document.querySelector(".share-details").style.display = "none");
};

setColor = () => {
	btn.classList.toggle("active-button-color");
	path.classList.toggle("active-fill-color");
};

btn.addEventListener("click", (event) => {
	setFlex();
	setColor();
});
