const dropdownTrigger = document.querySelectorAll('a[data-toggle="dropdown"]');

dropdownTrigger.forEach(function(trigger){
	trigger.onclick = function(event){
		const dropdownOpen = event.target.nextElementSibling;
			if (dropdownOpen.style.display === "block"){
				dropdownOpen.style.display = "none";
				return;			
			} else {
				dropdownOpen.style.display = "none";
			}{
				event.target.nextElementSibling.style.display = "block";
			}
		}	
	})