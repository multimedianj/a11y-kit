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
In your menu, you simply need to add a CSS class in this way **"wpak_DISABILITY_PROPERTY"**.

= List of the pre-configured classes =
Coloration
* "wpak_color_normal" (normal state)
* "wpak_color_dark" (dark mode)
* "wpak_color_monochrome" (shades of gray, monochrome)
* "wpak_color_highcontrast" (high contrast)
* "wpak_color_lowsaturation" (low saturation)
* "wpak_color_highsaturation" (high saturation)

Font size
* "wpak_font_normal" (normal state)
* "wpak_font_large" (large font-size, default: 30px)

Dyslexia
* "wpak_dyslexia_normal" (normal state)
* "wpak_dyslexia_comicsans" (Comic Sans font-family)
* "wpak_dyslexia_arial" (Arial font-family)

Reset button
* "wpakReset" (reset all the filters)

= Add an icon instead of text =
You can use the field for the title to add HTML code. With HTML code, it is possible to add :
* An image: **<img src="link_of_your_image.png" alt="name_of_property" />**
* An icon from FontAwesome or any library you want to include: **<i class="fas fa-adjust"></i>**

= Suggested FontAwesome icons =
Here is a list of the suggested icons to use for each pre-configured accessibility settings.

* Coloration: **<i class="fas fa-adjust" title="Change the coloration of the site"></i>**
* Font-size: **<i class="fas fa-font" title="Change the font-size of the site"></i>**
* Font-family: **<i class="fas fa-pencil-alt" title="Change the font-family of the site"></i>**
* Letter-spacing: **<i class="fas fa-text-width" title="Change the letter-spacing of the site"></i>**
* Line-height: **<i class="fas fa-text-height" title="Change the line-height of the site"></i>**
* Reset button: **<i class="fas fa-undo" title="Reset all the accessibility configurations"></i>**

**EXTRA**
If you want to add a link to your accessibility statement page, we recommend using this icon that displays perfectly :
* **<i class="fas fa-child" title="Go to the accessibility statement page"></i>**

= Overwritte accessibility settings (styles) =
In the plugin directory, there's a file **SAMPLE/style-a11y.css** that contains all the CSS variables used to style the different accessibility settings of the plugin. It is possible to overwritte those variables by adding this file to the root of your theme.

1. You need to download the **style-a11y.css**
1. You add the file to the root of your theme (or child-theme)
1. You add this code to your style.css **@import "style-a11y.css";**

This plugin was created and is maintained by WP inclusion, a [glossary of Web accessibility terminologies] (https://wpinclusion.com).

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

= 0.0.2 =
* Add a better documentation to the usability of the plugin
* Update the "dark mode" styles
* Update the "high contrast" styles
