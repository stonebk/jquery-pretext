/*!
 * jQuery pretext by Brian Stone
 *     Description: Add pretext labels to input fields.
 */
(function ($) {
    $.fn.pretext = function (options) {
        var opts = $.extend({}, options),
            classname = 'pretext';

        return this.each(function () {
            var $this = $(this),
                pretext = opts.text || $this.val(),
                password = $this.attr('type') === 'password';

            $this.addClass(classname).val(pretext)
                .focus(function () {
                    if ($this.hasClass(classname)) {
                        $this.val('').removeClass(classname);
                        if (password) {
                            $this.get(0).type = 'password';
                        }
                    }
                })
                .blur(function () {
                    if ($this.val() === '') {
                        $this.val(pretext).addClass(classname);
                        if (password) {
                            $this.get(0).type = 'text';
                        }
                    };
                }).get(0).type = 'text';
        });
    };
}(jQuery));
