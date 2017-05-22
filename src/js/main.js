
console.log('This is a Test!');

jQuery(function() {
	openMenu();
});

function openMenu() {
	jQuery('.mobile-nav-toggle').on('click',function() {
		if (jQuery('.mobile-nav').hasClass('is-open')) {
			jQuery('.mobile-nav').removeClass('is-open')
			jQuery('.mobile-nav-toggle').removeClass('is-open')
		}else {
			jQuery('.mobile-nav').addClass('is-open')
			jQuery('.mobile-nav-toggle').addClass('is-open')
		}
	})
}

/*

jQuery(window).scroll(function () {
        var position = jQuery(this).scrollTop();

        jQuery('.slide').each(function() {
            var target = jQuery(this).offset().top;

            var id = jQuery(this).attr('id');
            jQuery('.menu-wrapper ul li a[data-id=' + id + ']').addClass('clicked');
						console.log('addClass');
            if (position >= target) {
                jQuery('.menu-wrapper').find('clicked').removeClass('clicked');
								console.log('removeClass');
            }
        });

});*/
