(function( $ ) {
	'use strict';

	// When the DOM is ready:
	$( function() {

		const body = $('body');
		const html = $( 'html' );

		// Actions made when an accessibility menu is clicked
		$( '[class*="wpak_"] > a' ).on( 'click', function( e ) {

			e.preventDefault();

			let akDisability = $( this ).parent().attr( 'class' ).split( '_' )[1];
			let akProperty = $( this ).parent().attr( 'class' ).split( '_' )[2].split( ' ' )[0];

			if ( localStorage.getItem( akDisability ) == null ) {
				manageProperties( akDisability, akProperty );
			} else {
				localStorage.removeItem( akDisability );
				body.removeClass( 'iswpak_' + akDisability + '_' + akProperty );
				$( '[class*="wpak_' + akDisability + '_"]' ).removeClass( 'active' );
				$( '.wpak_' + akDisability + '_' + akProperty ).addClass( 'active' );
			}
		});

		// Resets the accessibility configurations when this button is clicked
		$( '.wpakReset' ).on( 'click', function( e ) {
			e.preventDefault();

			removeCookies();
		});

		// Function that manages the properties selected to change the accessibility configuration
		function manageProperties( disability, property ) {

			if ( property !== 'normal' ) {
				localStorage.setItem( disability, 'iswpak_' + disability + '_' + property );
			}
			
			let bodyClasses = body.attr( 'class' ).split( ' ' );

			for ( let i = 0; i < bodyClasses.length; i++ ) {
				if ( bodyClasses[i].indexOf( 'iswpak_' + disability + '_' ) != -1 ) {
					body.removeClass( bodyClasses[i] );
				}
			}
			
			body.addClass( 'iswpak_' + disability + '_' + property );
			$( '[class*="wpak_' + disability + '_"]' ).removeClass( 'active' );
			$( '.wpak_' + disability + '_' + property ).addClass( 'active' );
		}

		// Function that manages the cookies depending of the selected option
		function manageCookies() {

			let keys = Object.keys( localStorage );
			
			for ( let i=keys.length-1; i>=0; i-- ) {
				if ( localStorage.getItem( keys[i] ) !== 'iswpak_null' && localStorage.getItem( keys[i] ).slice(0, 7) == 'iswpak_' && localStorage.getItem( keys[i] ).slice(0, 8) !== 'iswpak__' ) {

					let akDisability = localStorage.getItem( keys[i] ).split('_')[1];
					let akProperty = localStorage.getItem( keys[i] ).split('_')[2].split(' ')[0];

					manageProperties( akDisability, akProperty );
				}
			}
		}
		manageCookies();

		// Function that removes all the cookies (reset accessibility configurations)
		function removeCookies() {

			let keys = Object.keys( localStorage );

			for ( let i=keys.length-1; i>=0; i-- ) {
				if ( localStorage.getItem( keys[i] ) !== 'iswpak_null' && localStorage.getItem( keys[i] ).slice(0, 7) == 'iswpak_' && localStorage.getItem( keys[i] ).slice(0, 8) !== 'iswpak__' ) {

					if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
						localStorage.removeItem( keys[i] );

						html.find( 'body' ).attr( 'class', function( i, c ) {
							return c.replace( /(^|\s)iswpak_\S+/g, ' iswpak_color_dark' );
						});
					} else {
						localStorage.removeItem( keys[i] );

						html.find( 'body' ).attr( 'class', function( i, c ) {
							return c.replace( /(^|\s)iswpak_\S+/g, '' );
						});
					}
				}
			}
		}

		// Conditional if "dark mode" activated on the browser
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			if ( localStorage.getItem( 'color' ) == null ) {
				manageProperties( 'color', 'dark' );
			}
		}
	});

	// When the window is loaded:
	$( window ).load( function() {

	});

})( jQuery );
