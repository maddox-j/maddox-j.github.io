/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

function collapseNavbarStyle() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
}

function closeResponsiveMenu() {
    var $menu = $('.navbar-main-collapse');
    var $toggle = $('.navbar-toggle:visible');

    if ($menu.hasClass('in') && $toggle.length) {
        $toggle.trigger('click');
    }
}

$(window).on('scroll', function () {
    collapseNavbarStyle();
    closeResponsiveMenu();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    collapseNavbarStyle();

    $('a.page-scroll').on('click', function (event) {
        var targetSelector = $(this).attr('href') || '';

        // Only hijack same-page hash links for smooth scrolling.
        if (targetSelector.charAt(0) !== '#') {
            closeResponsiveMenu();
            return;
        }

        var $target = $(targetSelector);
        if (!$target.length) {
            closeResponsiveMenu();
            return;
        }

        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
        closeResponsiveMenu();
    });

    // Closes the responsive menu on menu item click.
    $('.navbar-collapse ul li a').on('click', function () {
        closeResponsiveMenu();
    });
});