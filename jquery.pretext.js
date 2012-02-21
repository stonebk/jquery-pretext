/*!
 * jQuery Pretext - Add pretext labels to input fields.
 *     https://github.com/stonebk/jquery-pretext
 */
(function ($) {
    $.fn.pretext = function (options) {
        var opts = $.extend({}, options), classname = 'pretext',
            methods = {
                enable: function ($this, password, pretext) {
                    $this.val(pretext).addClass(classname);
                    if (password) {
                        $this.get(0).type = 'text';
                    }
                },
                disable: function ($this, password) {
                    $this.removeClass(classname);
                    if (password) {
                        $this.get(0).type = 'password';
                    }
                }
            };

        return this.each(function () {
            var $this = $(this),
                pretext = opts.text || $this.val(),
                password = $this.attr('type') === 'password';

            $this.addClass(classname).val(pretext)
                .focus(function () {
                    if ($this.hasClass(classname)) {
                        $this.val('');
                        methods.disable($this, password);
                    }
                })
                .blur(function () {
                    if ($this.val() === '') {
                        methods.enable($this, password, pretext);
                    }
                })
                .change(function () {
                    if ($this.val() === '') {
                        methods.enable($this, password, pretext);
                    } else {
                        methods.disable($this, password);
                    }
                }).get(0).type = 'text';
        });
    };
}(jQuery));
