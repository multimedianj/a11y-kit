<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://wpinclusion.com
 * @since             1.0.0
 * @package           A11y_Kit
 *
 * @wordpress-plugin
 * Plugin Name:       A11y Kit
 * Plugin URI:        https://wpinclusion.com/a11y-kit
 * Description:       Make accessibility a part of your WordPress site.
 * Version:           1.0.0
 * Author:            WP inclusion
 * Author URI:        https://wpinclusion.com
 * License:           GPLv3
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       a11y-kit
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'A11Y_KIT_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-a11y-kit-activator.php
 */
function activate_a11y_kit() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-a11y-kit-activator.php';
	A11y_Kit_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-a11y-kit-deactivator.php
 */
function deactivate_a11y_kit() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-a11y-kit-deactivator.php';
	A11y_Kit_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_a11y_kit' );
register_deactivation_hook( __FILE__, 'deactivate_a11y_kit' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-a11y-kit.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_a11y_kit() {

	$plugin = new A11y_Kit();
	$plugin->run();

}
run_a11y_kit();
