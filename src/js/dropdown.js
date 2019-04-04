

var dropDownMenu = document.getElementById('dropbutton');

var burgerBars = document.getElementsByClassName("bar");
console.log(burgerBars);


dropDownMenu.addEventListener('click', function(x){

	document.getElementById("dropdown").classList.toggle("show");

	Array.from(burgerBars).forEach((bar) => {

		bar.classList.toggle("change");

	})
        
});