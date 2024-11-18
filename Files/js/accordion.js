var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var box = this.nextElementSibling;
                if (box.style.display === "block") {
                    box.style.display = "none";
                } else {
                    box.style.display = "block";
                }
                });
            }