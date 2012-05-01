jQuery Pretext
==============

Add pretext labels to input fields.

### Demo

http://stonebk.github.com/jquery-pretext/

### Usage

    // HTML
    <label for="username">Username</label>
    <input type="text" id="username"></input>
    
    // JavaScript
    $('input#username').pretext();

### Notes

You need to manually trigger the change event if you are changing the value of
the input field via JavaScript.

    $('input#username').val('').change();

Browser input fields have different sizes for margins and padding. You need to
position the labels based on the margins and padding you are using (see example).