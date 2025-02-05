(function($, document, window) {
    $(document).ready(function() {
        if ($(".brands_slider").length) {
            var brandsSlider = $(".brands_slider");

            brandsSlider.owlCarousel({
                loop: true,
                autoplay: true,
                autoplaySpeed: 150,
                autoplayTimeout: 50000,
                nav: false,
                dots: false,
                autoWidth: true,
                items: 8,
                margin: 42,
            });

            if ($(".brands_prev").length) {
                var prev = $(".brands_prev");
                prev.on("click", function() {
                    brandsSlider.trigger("prev.owl.carousel");
                });
            }

            if ($(".brands_next").length) {
                var next = $(".brands_next");
                next.on("click", function() {
                    brandsSlider.trigger("next.owl.carousel");
                });
            }
        }
        // Cloning main navigation for mobile menu
        $(".mobile-navigation").append($(".main-navigation .menu").clone());

        // Mobile menu toggle
        $(".menu-toggle").click(function() {
            $(".mobile-navigation").slideToggle();
        });

        $(".hero").flexslider({
            directionNav: false,
            controlNav: true,
        });

        $('#maindiv').width($('#div1').width());

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

    $(window).load(function() {});
})(jQuery, document, window);