const dropdownTrigger = document.querySelectorAll(".dropdown");

dropdownTrigger.forEach(function(trigger){
    trigger.onclick = function(event){
        const dropdownOpen = event.target.nextElementSibling;
            if (dropdownOpen.style.display === "flex"){
                dropdownOpen.style.display = "none";
                return;            
            }
        }    
    })