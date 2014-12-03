(function($) {
    $.loadImages = function () {
        var count, callback;

        count    = $('img[tohires="true"]').length;
        callback = function() { };

        if(arguments.length) {
            callback = arguments[0];
        }

        $('img[tohires="true"]').each(function () {
            var $this, image;

            $this = $(this);
            image = new Image();

            image.onload = function() {
                $this.attr('src', this.src);
                $this.attr('lightbox', 'true');

                count--;

                if(!count) {
                    callback();
                }
            };

            image.src = $this.attr('hires');
        });
    };
})(jQuery);
