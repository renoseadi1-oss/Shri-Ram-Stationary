console.log("Shri Ram Stationary website loaded successfully!");

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});