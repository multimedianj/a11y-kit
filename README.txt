=== Plugin Name ===
Contributors: multimedianj
Tags: a11y, accessibility, wcag, font resizer, contrast
Requires at least: 4.9
Tested up to: 5.7.2
Stable tag: 1.0.0
Requires PHP: 7.2
License: GPLv3

Make your website accessibility better by adding pre-configured and custom settings in your menu.

== Description ==

This plugin offers you the possibility to show people accessibility configurations in your menu. This means that everyone, including people with disabilities, will be able to configure the settings (contrast, font-size, coloration, ...) that help them be able to use your website.

In order to make the plugin works, you need to create a menu first.
In your menu, you simply need to add a CSS class in this way "wpak_DISABILITY_PROPERTY".

List of the pre-configured classes :
= Coloration =
* "wpak_color_normal" (normal state)
* "wpak_color_dark" (dark mode)
* "wpak_color_monochrome" (shades of gray, monochrome)

= Font size =
* "wpak_font_normal" (normal state)
* "wpak_font_large" (large font-size, default: 30px)

= Dyslexia =
* "wpak_dyslexia_normal" (normal state)
* "wpak_dyslexia_comicsans" (Comic Sans font-family)
* "wpak_dyslexia_arial" (Arial font-family)

This plugin was created and is maintained by WP inclusion, a [WordPress optimization agency specialist] (https://wpinclusion.com).

= Compatibility =

This plugin is multilingual ready.


== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload `a11y-kit.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. You need to create a menu in order for the plugin to work.
1. The trick is to simply add a CSS class in this way "wpak_DISABILITY_PROPERTY" in order to add custom styles to your accessibility settings.


== Changelog ==

= 0.0.1 =
* Initial commit
