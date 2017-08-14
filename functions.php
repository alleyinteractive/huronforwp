<?php
/**
 * huronforwp functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package huronforwp
 */

/**
 * Enqueue scripts and styles.
 */
function huronforwp_assets() {
	if ( true == get_query_var( 'dev', false ) ) {
		wp_enqueue_script( 'develop-js', '//localhost:8080/build/main.js', array(), '1.0' );
	} else {
		wp_enqueue_script( 'main-js', get_template_directory_uri() . '/build/js/main.min.js', array(), '1.0' );
		wp_enqueue_style( 'main-css', get_template_directory_uri() . '/build/css/main.min.css', array(), '1.0' );
	}
}
add_action( 'wp_enqueue_scripts', 'huronforwp_assets' );

/**
 * Add custom query vars.
 *
 * @param array $vars Array of current query vars.
 * @return array $vars Array of query vars.
 */
add_filter( 'query_vars', function( $vars ) {
	// Add a query var to enable hot reloading
	$vars[] = 'dev';
	return $vars;
} );
