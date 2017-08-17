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
	// Enqueues go here!
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
