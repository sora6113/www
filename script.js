let bars = document.querySelector('#bars');
let x = document.querySelector('#x');
let dropdown = document.querySelector('.menu-dropdown')

bars.addEventListener("click", function() {
    if (bars.style.display = "block") {
        bars.style.display = "none";
        x.style.display = "block";
        dropdown.style.display = "block";
    }
})

x.addEventListener("click", function() {
    if (x.style.display = "block") {
        x.style.display = "none";
        bars.style.display = "block";
          dropdown.style.display = "none";
    }
})

