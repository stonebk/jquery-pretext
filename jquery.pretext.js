/*!
 * jQuery Pretext - Add pretext labels to input fields.
 *     https://github.com/stonebk/jquery-pretext
 */
(function ($) {

    $.Pretext = function (input) {
        this.input = input;
        this.$input = $(input);
        this.$label = $('label[for="' + this.$input.attr('id') + '"]').hide();
        this.pretext = this.$label.text();
        this.type = this.$input.attr('type');

        this.init();
    };

    $.Pretext.CLASSNAME = 'pretext';

    $.Pretext.prototype = {

        init: function () {
            this.$input
                .focus($.proxy(this.onFocus, this))
                .blur($.proxy(this.onBlur, this))
                .change($.proxy(this.onChange, this));
            this.onBlur();
        },

        onFocus: function () {
            if (this.$input.hasClass($.Pretext.CLASSNAME)) {
                this.hide();
            }
        },

        onBlur: function () {
            if (this.$input.val() === '') {
                this.show();
            }
        },

        onChange: function () {
            if (this.$input.val() === '' && !this.$input.is(':focus')) {
                this.show();
            }
        },

        show: function () {
            this.$input.val(this.pretext).addClass($.Pretext.CLASSNAME);
            if (this.type === 'password') {
                this.input.type = 'text';
            }
        },

        hide: function () {
            this.$input.val('').removeClass($.Pretext.CLASSNAME);
            if (this.type === 'password') {
                this.input.type = 'password';
            }
        }
    };

    $.fn.pretext = function (options) {
        return this.each(function () {
            (new $.Pretext(this));
        });
    };

}(jQuery));
