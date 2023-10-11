let currentSlide = 0;
    const images = [
        "img/foodies-1.jpg",
        "img/foodies-2.jpg",
        "img/foodies-3.jpg"
    ];

    const foodieImage = document.getElementById("foodieImage");

    function showSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = images.length - 1;
        } else if (slideIndex >= images.length) {
            currentSlide = 0;
        }

        foodieImage.src = images[currentSlide];
    }

    function plusSlides(n) {
        currentSlide += n;
        showSlide(currentSlide);
    }


    showSlide(currentSlide);