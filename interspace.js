/*!	
 * Interspace.JS 0.0.1
 * https://github.com/amongiants/interspace
 *
 * Copyright 2013, Jon Gacnik http://jongacnik.com
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 *
 * Thanks to Pieter Hordijk for the charIterator logic
 *
 * Date: Wed Apr 03 13:32:00 2013
 */
(function($) {
	$.fn.interspace = function(options) {
		var defaults = {
			spacing: 0.2,
			setSpacing: true,
			skipSpaces: true
		};

		var opts = $.extend({}, defaults, options);

		var trim = function(text) {
			return text.replace(/^\s+/g, '').replace(/\s+$/g, '');
		};

		var wrap = function(elem) {
			$(elem).contents().each(function() {
				if(this.nodeType === 1) {
					wrap(this);
				} else if(this.nodeType === 3) {
					$(this).replaceWith($.map(this.nodeValue.split(''), function(c) {
						if (trim(c) != '' || !opts.skipSpaces) {
							return '<span class="intrspc">' + c + '</span>';
						}
						return c;
					}).join(''));
				}
			});
			if (opts.setSpacing) setSpacing(elem);
		};

		var setSpacing = function(elem){
			$(elem).find('.intrspc').css('margin-right',opts.spacing+'px');
		};

		return this.each(function() {
			wrap(this);
		});
	};	
})(jQuery);