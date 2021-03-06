/*
 * This is the main script used to init stuff etc.
 *
 * @since Riiskit 1.0.0
 */

"use strict";

jQuery(function ($) {

  "use strict";

  // your code here
}); // end jQuery document ready
/**
 * Mobile togglemenu
 *
 * @since Riiskit 1.0.0
 */

'use strict';

jQuery(function ($) {

    "use strict";

    // Cache vars
    var body = $('body');
    var nav = $('.site-header__nav');
    var menu = $('.menu-primary');
    var button = $('.toggle-menu-btn');

    // Other vars
    var menuBreakpoint = 649;
    var active = false;

    if (!nav || !button) {
        return;
    } else if (!menu || !menu.children().length) {
        button.addClass('hide');
        return;
    } else {
        // Toggle functionality
        button.on('click.riiskit', function () {
            menu.toggleClass('active');
            $(this).toggleClass('active');

            if (active === false) {
                active = true;
                $(this).attr('aria-pressed', 'true');
            } else {
                active = false;
                $(this).attr('aria-pressed', 'false');
            }
        });

        // Resize window
        var menuResize = riiskit.utils.throttle(function () {
            console.log('test');
            if ($.selector_cache(window).width() >= menuBreakpoint) {
                menu.addClass('active was-not-active');
                button.addClass('active');
            } else {
                if (menu.hasClass('active was-not-active')) {
                    menu.removeClass('active active was-not-active');
                    button.removeClass('active active was-not-active');
                }
            }
        });

        $.selector_cache(window).on('resize.riiskit', menuResize);
    }
}); // end jQuery document ready