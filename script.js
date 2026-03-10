let bars = document.querySelector('#bars');
let x = document.querySelector('#x');
let dropdown = document.querySelector('.menu-dropdown')

bars.addEventListener("click", function() {
        bars.classList.remove("active")
        x.classList.add("active");
        dropdown.classList.toggle("active");
    }
)

x.addEventListener("click", function() {
        x.classList.remove("active")
        bars.classList.add("active");
        dropdown.classList.toggle("active");
    }
)

