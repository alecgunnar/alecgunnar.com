(function($) {
    var count;

    $.loadImages = function () {
        var callback = function() { };

        if(arguments.length) {
            callback = arguments[0];
        }

        $('img[tohires="true"]').each(function () {
            var $this, image;

            $this = $(this);
            image = new Image();
            count++;

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
