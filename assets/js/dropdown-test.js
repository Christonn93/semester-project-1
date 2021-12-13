var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.from(dropdown);

dropdownArray.forEach(function(el){
    el.onclick = function(event) {
        var toggle = el.querySelector('a[data-toggle="dropdown"]'),
            menu = el.querySelector('.dropdown-menu')

        if(!menu.hasClass('dropdown')) {
            menu.classList.add('dropdown-menu');
            menu.classList.remove('hidden');
            event.preventDefault();
        }
        else {
            menu.classList.remove('dropdown-menu');
            menu.classList.add('hidden');
            event.preventDefault();
        }
    };
})




// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu')

	button.onclick = function(event) {
		if(!menu.hasClass('dropdown-menu')) {
			menu.classList.add('dropdown-menu');
			menu.classList.remove('hidden');
			event.preventDefault();
		}
		else {
			menu.classList.remove('dropdown-menu');
			menu.classList.add('hidden');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};