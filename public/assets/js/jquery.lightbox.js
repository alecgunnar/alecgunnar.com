(function ($) {
    var config = {
        attr: {
            trigger: {
                name:  'lightbox',
                value: 'true'
            },
            caption:    'caption',
            credit:     'credit',
            creditLink: 'credit-url'
        },
        group: {
            tag:  {
                type: '*',
                attr: {
                    name:  'class',
                    value: 'lightbox-group'
                }
            },
            loop: true
        },
        metrics: {
            callback: null
        }
    }, methods = {};

    methods = {
        clickHandler: function (callback) {
            methods.init();

            var $lightbox = $('#lightbox-container'),
                $img      = $(this);

            /*
             * Build the lightbox
             */
            $('#lightbox-container img').attr('src', $img.attr('src'));

            if(typeof $img.attr(config.attr.caption) == 'string') {
                $('#lightbox-container #lightbox-caption').html($img.attr(config.attr.caption));
            }

            /*
             * Show the lightbox
             */
            if(methods.isMobile()) {
                $lightbox.show();
            } else {
                $lightbox.fadeIn();
            }

            methods.positionImage();

            /*
             * Call the metrics callback
             */
            if(typeof callback === 'function') {
                callback(this);
            }
        },
        init: function () {
            if(!$('#lightbox-container').length) {
                $('body').append('<div id="lightbox-container"><div id="lightbox-header"><div id="lightbox-close">Close</div></div><div id="lightbox-navigation"><div id="lightbox-previous">Previous</div><div id="lightbox-next">Next</div></div><div id="lightbox-main"><img></div><div id="lightbox-footer"><div id="lightbox-caption"></div></div></div>');

                $('#lightbox-container #lightbox-close').on('click', methods.handleClose);
                $('#lightbox-container #lightbox-close').on('tap', methods.handleClose);

                $('#lightbox-container img').on('click', methods.toggleCaption);
                $('#lightbox-container img').on('tap', methods.toggleCaption);
            }

            $('#lightbox-container #lightbox-footer').show();
            $('#lightbox-container img').attr('style', '');
            $('#lightbox-container img').css({
                position: 'static',
                display: 'none'
            });
        },
        positionImage: function () {
            var $container, header, footer, available, $img, width, height, diff;

            $container = $('#lightbox-container');

            header = $('#lightbox-container #lightbox-header').height();
            footer = $('#lightbox-container #lightbox-footer').height();

            available  = $container.height() - (header + footer);

            $img   = $('#lightbox-container img');
            width  = $img.width();
            height = $img.height();
            diff   = 1;

            if(height > available) {
                diff    = (available * .9) / height;
                height *= diff;
                width  *= diff;
            }

            if(width > $container.width()) {
                diff    = $container.width() / width;
                height *= diff;
                width  *= diff;
            }

            $img.css({
                position: 'absolute',
                width:    width + 'px',
                height:   height + 'px',
                top:      (($container.height() - height) / 2) + 'px',
                left:     (($container.width() - width) / 2) + 'px'
            });

            $img.show();
        },
        isMobile: function () {
            /*
             * Based off of Bootstrap 3
             *
             * Screens with widths of at least 992 pixels are
             * considered desktops/non-mobile devices.
             */
            if($(window).width() < 992) {
                return true;
            }

            return false;
        },
        handleClose: function () {
            if(methods.isMobile()) {
                $('#lightbox-container').hide();
            } else {
                $('#lightbox-container').fadeOut();
            }
        },
        toggleCaption: function () {
            var $caption = $('#lightbox-container #lightbox-footer');

            if($caption.css('display') == 'none') {
                $caption.fadeIn();
            } else {
                $caption.fadeOut();
            }
        }
    }

    $.lightbox = function (vars) {
        config = $.extend(config, vars);

        $('img[' + config.attr.trigger.name + '="' + config.attr.trigger.value + '"]').each(function () {
            $(this).on('click', methods.clickHandler.bind(this, config.metrics.callback));
            $(this).on('tap', methods.clickHandler.bind(this, config.metrics.callback));
        });
    };
})(jQuery);