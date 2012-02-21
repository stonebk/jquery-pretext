jQuery Pretext
==============

Add pretext labels to input fields.

    // HTML
    <label for="username">Username</label>
    <input type="text" id="username"></input>
    
    // JavaScript
    $('input#username').pretext();

### Notes

You need to manually trigger the change event if you are changing the value of
the input field via JavaScript.

    $('input#username').val('').change();