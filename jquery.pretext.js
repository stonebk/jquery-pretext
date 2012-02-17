/*!
 * jQuery Pretext - Add pretext labels to input fields.
 *     https://github.com/stonebk/jquery-pretext
 */
(function ($) {
    $.fn.pretext = function (options) {
        var opts = $.extend({ init: true }, options),
            classname = 'pretext';

        return this.each(function () {
            var $this = $(this),
                pretext = opts.text || $this.val(),
                password = $this.attr('type') === 'password';

            if (opts.init) {
                $this.addClass(classname).val(pretext).get(0).type = 'text';
            }

             $this.focus(function () {
                 if ($this.hasClass(classname)) {
                     $this.val('').removeClass(classname);
                     if (password) {
                         $this.get(0).type = 'password';
                     }
                 }
             }).blur(function () {
                 if ($this.val() === '') {
                     $this.val(pretext).addClass(classname);
                     if (password) {
                         $this.get(0).type = 'text';
                     }
                 };
             });
        });
    };
}(jQuery));
