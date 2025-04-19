
        document.addEventListener("DOMContentLoaded", function () {
            loadComponent("header.html", "header");
            loadComponent("footer.html", "footer");
        });

        function loadComponent(url, elementId) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.getElementById(elementId).insertAdjacentHTML("beforeend", data);
                })
                .catch(error => console.error(`Error loading ${url}:`, error));
        }                
    