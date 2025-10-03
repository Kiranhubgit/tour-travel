$(document).ready(function () {
var owl = $("#e1");
owl.owlCarousel({
    // animateOut: 'fadeOut',
            items: 1,
            loop: true,
            margin: 10,
            // nav: true,
            navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
    onInitialized: function () {
        // Enable autoplay after init
        owl.trigger('play.owl.autoplay', [3000]);
        window.scrollTo(0, 0); // Force scroll to top if needed
    }
});
});

$(document).ready(function () {
var owl = $("#e2");
owl.owlCarousel({
    // animateOut: 'fadeOut',
            items: 1,
            loop: true,
            // margin: 10,
            nav: true,
            navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
    onInitialized: function () {
        // Enable autoplay after init
        owl.trigger('play.owl.autoplay', [3000]);
        window.scrollTo(0, 0); // Force scroll to top if needed
    }
});
});
$(document).ready(function () {
    var owl = $("#e3");
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        video: true,
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:3
                }
            },
        onChanged: function (event) {
            // Pause all videos
            $("#e3 video").each(function () {
                this.pause();
            });

            // Play visible videos only
            $("#e3 .owl-item.active video").each(function () {
                this.play();
            });
        }
    });

    // Play visible videos after initial load
    setTimeout(function () {
        $("#e3 .owl-item.active video").each(function () {
            this.play();
        });
    }, 500);
});
// ==================================================== HEADER BACKGROUND COLOR CHNAGED CODE WHEN SCROLL UP AND DOWN THE SCREEN ==================================
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// ============================================= End - HEADER BACKGROUND COLOR CHNAGED CODE WHEN SCROLL UP AND DOWN THE SCREEN ======
$(document).ready(function () {
    var owl = $("#e4");
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        onInitialized: function () {
        // Enable autoplay after init
            owl.trigger('play.owl.autoplay', [3000]);
        }

});
});

$(document).ready(function () {
    var owl = $("#e5");
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        onInitialized: function () {
        // Enable autoplay after init
            owl.trigger('play.owl.autoplay', [2000]);
        }

});
});

$(document).ready(function () {
    var owl = $("#e6");
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:3
                }
            },
        autoplayHoverPause: true,
        onInitialized: function () {
        // Enable autoplay after init
            owl.trigger('play.owl.autoplay', [2000]);
        }

});
});
