jQuery Pretext
==============

Add pretext labels to input fields.

    $('input#username').pretext({ text: 'Username' });

### Notes

You need to manually trigger the change event if you are changing the value of
the input field via JavaScript.

    $('input#username').val('').change();