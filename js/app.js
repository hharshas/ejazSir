(function ($, document, window) {
    $(document).ready(function () {
        // Initialize FlexSlider for the hero section
        $(".hero").flexslider({
            directionNav: false,
            controlNav: true,
            slideshow: true,
            animation: "fade",
            animationSpeed: 800,
            slideshowSpeed: 5000, // Change slides every 5s
            start: function (slider) {
                $(".slides li").each(function () {
                    var bgImage = $(this).data("bg-image");
                    if (bgImage) {
                        $(this).css({
                            "background-image": `url(${bgImage})`,
                            "background-size": "cover",
                            "background-position": "center",
                            "background-repeat": "no-repeat",
                        });
                    }
                });
            },
        });

        // Brands Slider Initialization (Owl Carousel)
        if ($(".brands_slider").length) {
            var brandsSlider = $(".brands_slider");

            brandsSlider.owlCarousel({
                loop: true,
                autoplay: true,
                autoplaySpeed: 150,
                autoplayTimeout: 5000,
                nav: false,
                dots: false,
                autoWidth: true,
                items: 8,
                margin: 42,
            });

            if ($(".brands_prev").length) {
                $(".brands_prev").on("click", function () {
                    brandsSlider.trigger("prev.owl.carousel");
                });
            }

            if ($(".brands_next").length) {
                $(".brands_next").on("click", function () {
                    brandsSlider.trigger("next.owl.carousel");
                });
            }
        }

        // Cloning main navigation for mobile menu
        $(".mobile-navigation").append($(".main-navigation .menu").clone());

        // Mobile menu toggle
        $(".menu-toggle").click(function () {
            $(".mobile-navigation").slideToggle();
        });

        // Adjust #maindiv width to match #div1
        $('#maindiv').width($('#div1').width());

        // Google Maps Integration
        var map = $(".map");
        var latitude = map.data("latitude");
        var longitude = map.data("longitude");
        if (map.length) {
            map.gmap3({
                map: {
                    options: {
                        center: [latitude, longitude],
                        zoom: 15,
                        scrollwheel: false,
                    },
                },
                marker: {
                    latLng: [latitude, longitude],
                },
            });
        }
    });

    $(window).on("load", function () {
        // Additional code can be executed when the window fully loads
    });
})(jQuery, document, window);


document.addEventListener("DOMContentLoaded", function () {
    let pageHead = document.querySelector(".page-head");
    let bgImage = pageHead.getAttribute("data-bg-image");
    if (bgImage) {
        pageHead.style.backgroundImage = `url(${bgImage})`;
        pageHead.style.backgroundSize = "cover";
        pageHead.style.backgroundPosition = "center";
        pageHead.style.backgroundRepeat = "no-repeat";
    }
});
