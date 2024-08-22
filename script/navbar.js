document.addEventListener("DOMContentLoaded", function () {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });
});