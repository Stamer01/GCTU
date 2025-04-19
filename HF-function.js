
    function toggleMenu() {
        const menu = document.getElementById("menu");
        const menuToggle = document.getElementById("menu-toggle");
        menu.classList.toggle("show");
        menuToggle.innerHTML = menu.classList.contains("show") ? "&#10006;" : "&#9776;";
    }

    function toggleDropdown(event, element) {
        event.preventDefault();
        const parent = element.closest(".has-dropdown");
        const allDropdowns = document.querySelectorAll(".has-dropdown");

        allDropdowns.forEach(dropdown => {
            if (dropdown !== parent) {
                dropdown.classList.remove("active");
            }
        });

        parent.classList.toggle("active");
    }

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".has-dropdown")) {
            document.querySelectorAll(".has-dropdown").forEach(dropdown => {
                dropdown.classList.remove("active");
            });
        }
    });
