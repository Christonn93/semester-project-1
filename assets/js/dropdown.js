// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu')

	button.onclick = function(event) {
		if(!menu.hasClass('active')) {
			menu.classList.add('active');
			menu.classList.remove('hidden');
			event.preventDefault();
		}
		else {
			menu.classList.remove('active');
			menu.classList.add('hidden');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};