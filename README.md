jQuery Pretext
==============

The HTML5 placeholder attribute is implemented inconsistently across browsers --
the goal behind jQuery Pretext is to give consistent placeholder behavior across
all browsers while using semantic HTML. 

###### Behavior

Replicate chrome behavior -- show placeholder text until the input field has been
given a value (other browsers will hide the placeholder text on focus).

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