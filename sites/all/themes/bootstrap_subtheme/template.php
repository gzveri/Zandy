<?php

/**
 * @file
 * template.php
 */

/**
 * Implements hook_preprocess_html().
 */
function bootstrap_subtheme_preprocess_html(&$variables, $hook) {
	drupal_add_html_head_link(array(
	'rel' => 'stylesheet',
	'href' => 'http://fonts.googleapis.com/css?family=Kaushan+Script',
	'type' => 'text/css',
	));
}


/*
 * hook_preprocess_page
 */
function bootstrap_subtheme_preprocess_page(&$vars) {
	global $theme_path;
	//print 'arg='.print_r(arg(),1);
	//kpr($vars);
	if (arg(0) == 'photo-gallery') {
		//drupal_add_css($theme_path.'/plugins/bgimgslider/css/bgimgslider.css', array('type' => 'file', 'weight' => 500));
		//drupal_add_js($theme_path.'/plugins/bgimgslider/js/bgimgslider-new.js', array('type' => 'file', 'weight' => 500, 'scope' => 'footer'));
		drupal_add_css($theme_path.'/plugins/jssor/photo-slider.css', 'file');
		drupal_add_js($theme_path.'/plugins/jssor/jssor.slider.min.js', 'file');
		drupal_add_js($theme_path.'/plugins/jssor/photo-slider.js', 'file');
		
	}
	if (arg(0) == 'video-gallery') {
		//drupal_add_css($theme_path.'/css/bgimgslider.css', array('type' => 'file', 'weight' => 500));
		drupal_add_js($theme_path.'/js/video-gallery.js', 'file');
	}
// 	if (isset($vars['node']) && ($vars['node']->type == 'vidak')) {
// 		drupal_add_js($theme_path.'/js/node-vidak.js', 'file');
// 	}
	//$vars['scripts'] = drupal_get_js();
}

/**
 * Overrides theme_menu_tree().
 */
/*
function bootstrap_subtheme_menu_tree(&$vars) {
	print_r($vars);
	return '<ul class="menu nav da">' . $vars['tree'] . '</ul>';
}
*/
 
/**
 * Overrides theme_menu_link().
 */
function bootstrap_subtheme_menu_link(array $variables) {
	$element = $variables['element'];
	$sub_menu = '';

	if ($element['#below']) {
		// Prevent dropdown functions from being added to management menu so it
		// does not affect the navbar module.
		if (($element['#original_link']['menu_name'] == 'management') && (module_exists('navbar'))) {
			$sub_menu = drupal_render($element['#below']);
		}
		elseif ((!empty($element['#original_link']['depth'])) && ($element['#original_link']['depth'] == 1)) {
			// Add our own wrapper.
			unset($element['#below']['#theme_wrappers']);
			$sub_menu = '<ul class="dropdown-menu">' . drupal_render($element['#below']) . '</ul>';
			// Generate as standard dropdown.
			$element['#title'] .= ' <span class="caret"></span>';
			$element['#attributes']['class'][] = 'dropdown';
			$element['#localized_options']['html'] = TRUE;

			// Set dropdown trigger element to # to prevent inadvertant page loading
			// when a submenu link is clicked.
			$element['#localized_options']['attributes']['data-target'] = '#';
			$element['#localized_options']['attributes']['class'][] = 'dropdown-toggle';
			$element['#localized_options']['attributes']['data-toggle'] = 'dropdown';
		}
	}
	$mlid = $element['#original_link']['mlid'];
	$element['#attributes']['class'][] = 'mlid-' . $mlid;
	
	// On primary navigation menu, class 'active' is not set on active menu item.
	// @see https://drupal.org/node/1896674
	if (($element['#href'] == $_GET['q'] || ($element['#href'] == '<front>' && drupal_is_front_page())) && (empty($element['#localized_options']['language']))) {
		$element['#attributes']['class'][] = 'active';
	}
	$extra = '';
	if ($element['#original_link']['menu_name'] == 'menu-home-page-menu') {
		if ($mlid == 893) {
			//photo
			$extra .= '<span class="title">'.$element['#title'].'</span><span class="icon"></span>';
		}
		if ($mlid == 894) {
			//video
			//kpr($element);
			$extra .= '<span class="title">'.$element['#title'].'</span><span class="icon"></span>';
		}
		$output = l($element['#title'], $element['#href'], $element['#localized_options']);
		return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . $extra . "</li>\n";
		
	} else {
		$output = l($element['#title'], $element['#href'], $element['#localized_options']);
		return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
		
	}
}
