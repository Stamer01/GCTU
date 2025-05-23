
        (() => {
            //If you want to add more images, add the link name and URL image URL in the array list below.
            const images_list = [
                {
                    "url": "https://html-generator.com/uploads/images/2025/02/03/92824U2C3D6EOED.jpg",
                    "alt": "",
                    "name": "92824U2C3D6EOED.jpg",
                    "link": ""
                },
                {
                    "url": "https://html-generator.com/uploads/images/2025/02/03/93881UE9B1FIV9T.jpg",
                    "alt": "",
                    "name": "93881UE9B1FIV9T.jpg",
                    "link": ""
                },
                {
                    "url": "https://html-generator.com/uploads/images/2025/02/03/94746KQTKV_U5ES.jpg",
                    "alt": "",
                    "name": "94746KQTKV_U5ES.jpg",
                    "link": ""
                }
            ];


            let slider_id = document.querySelector("#hcg-slider-1");

            // append all images
            let dots_div = "";
            let images_div = "";
            for (let i = 0; i < images_list.length; i++) {
                // if no link without href="" tag
                let href = (images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"');
                images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:flex"' : '') + '>' +
                    '<span class="hcg-slide-number">' + (i + 1) + '/' + images_list.length + '</span>' +
                    '<img src="' + images_list[i].url + '" alt="' + images_list[i].name + '">' +
                    '</a>';
                dots_div += '<a href="#" class="hcg-slide-dot' + (i === 0 ? ' dot-active' : '') + '" data-id="' + i + '"></a>';
            }
            slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
            slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

            let slide_index = 0;

            const images = slider_id.querySelectorAll(".hcg-slides");
            const dots = slider_id.querySelectorAll(".hcg-slide-dot");
            const showSlides = () => {
                if (slide_index > images.length - 1) {
                    slide_index = 0;
                }
                if (slide_index < 0) {
                    slide_index = images.length - 1;
                }
                for (let i = 0; i < images.length; i++) {
                    images[i].style.display = "none";
                    dots[i].classList.remove("dot-active");
                    if (i == slide_index) {
                        images[i].style.display = "flex";
                        dots[i].classList.add("dot-active");
                    }
                }
            }

            const dot_click = event => {
                event.preventDefault();
                slide_index = event.target.dataset.id;
                showSlides();
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].addEventListener("click", dot_click, false);
            }
            // auto play
            setInterval(() => {
                slide_index++;
                showSlides();
            }, 5000);

        })();
    