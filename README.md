Interspace
==========

Interspace is a [jQuery][1] plugin which allows for sub-pixel finesse over letter-spacing for typophiles.
  
It does this by wrapping every character within the selected element in a `<span class="intrspc"></span>` and applies a specified right margin. It also supports textnodes which include childnodes, so it shouldn't break your DOM.

**Important!** Interspace only works on browsers that support sub-pixel measurements. This is current stable builds of Firefox and Chrome, as well as WebKit nightly. Hopefully we will see the support in Safari stable soon!

Options
-------

    spacing: 0.2,    // float, number of pixels between each character
    applyCSS: true,  // bool, whether interspace should apply css (set false to specify value in your css)
    skipSpaces: true // bool, whether spaces should also be affected by interspace

Usage
-----

Using Interspace with no options will add a letter-spacing value of 0.2px to all text within our element.

    <h1>Interspace is <strong>atomic</strong>!</h1>

    $('h1').interspace();

Which would result in:

    <span class="intrspc" style="margin-right: 0.2px;">I</span><span class="intrspc" style="margin-right: 0.2px;">n</span><span class="intrspc" style="margin-right: 0.2px;">t</span>...

We can adjust the letter-spacing by setting our `spacing` option:

    <h1>Interspace is <strong>atomic</strong>!</h1>

    $('h1').interspace({spacing: 0.8});

By default Interspace skips spaces. This is so you may adjust word-spacing with css to optimize performance. If you would like spaces to also be affected by interspace, simply set the `skipSpaces` option to false:

    <h1>Interspace is <strong>atomic</strong>!</h1>

    $('h1').interspace({skipSpaces: false});

By default Interspace also applies the letter-spacing value for us inline. We can turn this off so the behavior of Interspace is merely wrapping all characters in a `<span class="intrspc"></span>`. By setting the `applyCSS` option to false, Interspace will **not** affect letter-spacing. This allows you to specify the value in your own CSS by targeting the `intrspc` class.

	<style>
	h1 .intrspc { margin-right: 0.2px; }
	</style>

    <h1>Interspace is <strong>atomic</strong>!</h1>

    $('h1').interspace({applyCSS: false});
    
Support
-------
As written above, Interspace only works in browsers that support sub-pixel measurements. If we are lucky we will get to see sub-pixel values worked into letter-spacing soon! In the meantime I am going to be looking for a workaround.

Word to the Wise
----------------
This plugin is fairly ridiculous! While it indeed gives you precise tracking it does so at a cost. Semantically this thing wreaks havoc. There are also huge performance concerns; this thing is literally wrapping every character in a `span` and styling it! In many cases this will be ok (headers, captions, text-lightweight sites, etc) but just be wise. With great power comes great typesetting…

[1]:http://jquery.com/
