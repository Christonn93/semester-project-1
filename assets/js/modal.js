var modal = document.getElementById("contactModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("exit")[0];


btn.onclick = function() {
  modal.style.display = "grid";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}