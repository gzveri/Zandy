------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
1440x1080 => 1024x576
------------------------------------------------------------------
<div>
<img u="image" src="[field_foto_img] ">
<img u="thumb" src="[field_foto_img_1]">
</div>

------------------------------------------------------------------
<div>
<img u="image" src="../img/alila/03.jpg">
<img u="thumb" src="../img/alila/thumb-03.jpg">
</div>

------------------------------------------------------------------
        jQuery(document).ready(function ($) {
            var _CaptionTransitions = [];
            _CaptionTransitions["L"] = { $Duration: 900, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["R"] = { $Duration: 900, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["T"] = { $Duration: 900, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["B"] = { $Duration: 900, y: -0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            //Reference http://www.jssor.com/development/tool-caption-transition-viewer.html

            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
        });

------------------------------------------------------------------
		//----------------------------------
//		this.set_animation_styles = function(speed) {
//			//console.log('set_slide_speed');
//			var imganim = settings.image_animation_name;
//			var titanim = settings.title_animation_name;
//		}

------------------------------------------------------------------
.bgimgslideshow li:nth-child(1) span { background-image: url(../images/6.jpg) }
.bgimgslideshow li:nth-child(2) span {
  background-image: url(../images/5.jpg);
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  -ms-animation-delay: 6s;
  animation-delay: 6s;
}
.bgimgslideshow li:nth-child(3) span {
  background-image: url(../images/4.jpg);
  -webkit-animation-delay: 12s;
  -moz-animation-delay: 12s;
  -o-animation-delay: 12s;
  -ms-animation-delay: 12s;
  animation-delay: 12s;
}
.bgimgslideshow li:nth-child(4) span {
  background-image: url(../images/3.jpg);
  -webkit-animation-delay: 18s;
  -moz-animation-delay: 18s;
  -o-animation-delay: 18s;
  -ms-animation-delay: 18s;
  animation-delay: 18s;
}
.bgimgslideshow li:nth-child(5) span {
  background-image: url(../images/2.jpg);
  -webkit-animation-delay: 24s;
  -moz-animation-delay: 24s;
  -o-animation-delay: 24s;
  -ms-animation-delay: 24s;
  animation-delay: 24s;
}
.bgimgslideshow li:nth-child(6) span {
  background-image: url(../images/1.jpg);
  -webkit-animation-delay: 30s;
  -moz-animation-delay: 30s;
  -o-animation-delay: 30s;
  -ms-animation-delay: 30s;
  animation-delay: 30s;
}
.bgimgslideshow li:nth-child(2) div {
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  -ms-animation-delay: 6s;
  animation-delay: 6s;
}
.bgimgslideshow li:nth-child(3) div {
  -webkit-animation-delay: 12s;
  -moz-animation-delay: 12s;
  -o-animation-delay: 12s;
  -ms-animation-delay: 12s;
  animation-delay: 12s;
}
.bgimgslideshow li:nth-child(4) div {
  -webkit-animation-delay: 18s;
  -moz-animation-delay: 18s;
  -o-animation-delay: 18s;
  -ms-animation-delay: 18s;
  animation-delay: 18s;
}
.bgimgslideshow li:nth-child(5) div {
  -webkit-animation-delay: 24s;
  -moz-animation-delay: 24s;
  -o-animation-delay: 24s;
  -ms-animation-delay: 24s;
  animation-delay: 24s;
}
.bgimgslideshow li:nth-child(6) div {
  -webkit-animation-delay: 30s;
  -moz-animation-delay: 30s;
  -o-animation-delay: 30s;
  -ms-animation-delay: 30s;
  animation-delay: 30s;
}
------------------------------------------------------------------
.main-container {
  display: table;
}
.main-container .row {
	display: table-cell;
	height: 100%;
	background: #00f;
}

------------------------------------------------------------------
<div class="push"></div>
------------------------------------------------------------------
html, bodybody.page-photo-gallery {
  height: 100%;
}
body.page-photo-gallery .main-container {
  min-height: 100%;
  /* equal to footer height */
  margin-bottom: -142px; 
}
body.page-photo-gallery .main-container:after {
  content: "";
  display: block;
}
body.page-photo-gallery footer.footer,
body.page-photo-gallery .main-container:after {
  height: 142px; 
}

------------------------------------------------------------------
function menu_tree_output($tree) {
  $build = array();
  $items = array();

  // Pull out just the menu links we are going to render so that we
  // get an accurate count for the first/last classes.
  foreach ($tree as $data) {
    if ($data ['link']['access'] && !$data ['link']['hidden']) {
      $items [] = $data;
    }
  }

  $router_item = menu_get_item();
  $num_items = count($items);
  foreach ($items as $i => $data) {
    $class = array();
    if ($i == 0) {
      $class [] = 'first';
    }
    if ($i == $num_items - 1) {
      $class [] = 'last';
    }
    // Set a class for the <li>-tag. Since $data['below'] may contain local
    // tasks, only set 'expanded' class if the link also has children within
    // the current menu.
    if ($data ['link']['has_children'] && $data ['below']) {
      $class [] = 'expanded';
    }
    elseif ($data ['link']['has_children']) {
      $class [] = 'collapsed';
    }
    else {
      $class [] = 'leaf';
    }
    // Set a class if the link is in the active trail.
    if ($data ['link']['in_active_trail']) {
      $class [] = 'active-trail';
      $data ['link']['localized_options']['attributes']['class'][] = 'active-trail';
    }
    // Normally, l() compares the href of every link with $_GET['q'] and sets
    // the active class accordingly. But local tasks do not appear in menu
    // trees, so if the current path is a local task, and this link is its
    // tab root, then we have to set the class manually.
    if ($data ['link']['href'] == $router_item ['tab_root_href'] && $data ['link']['href'] != $_GET ['q']) {
      $data ['link']['localized_options']['attributes']['class'][] = 'active';
    }

    // Allow menu-specific theme overrides.
    $element ['#theme'] = 'menu_link__' . strtr($data ['link']['menu_name'], '-', '_');
    $element ['#attributes']['class'] = $class;
    $element ['#title'] = $data ['link']['title'];
    $element ['#href'] = $data ['link']['href'];
    $element ['#localized_options'] = !empty($data ['link']['localized_options']) ? $data ['link']['localized_options'] : array();
    $element ['#below'] = $data ['below'] ? menu_tree_output($data ['below']) : $data ['below'];
    $element ['#original_link'] = $data ['link'];
    // Index using the link's unique mlid.
    $build [$data ['link']['mlid']] = $element;
  }
  if ($build) {
    // Make sure drupal_render() does not re-order the links.
    $build ['#sorted'] = TRUE;
    // Add the theme wrapper for outer markup.
    // Allow menu-specific theme overrides.
    $build ['#theme_wrappers'][] = 'menu_tree__' . strtr($data ['link']['menu_name'], '-', '_');
  }

  return $build;
}
------------------------------------------------------------------
http://www.collectionblueblack.com/en/customproduct/bb-3530-contrastiong-sandwich-peak/
------------------------------------------------------------------
					//$video_thumb_uri = 'https://i.vimeocdn.com/video/'.$video_id.'.webp?mw=960&mh=540';
					
						//print '======='.print_r($matches,1).'======';
						//print '=======matched======';

------------------------------------------------------------------
<script type="text/javascript">
    $.ajax({
        type:'GET',
        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data){
            var thumbnail_src = data[0].thumbnail_large;
            $('#thumb_wrapper').append('<img src="' + thumbnail_src + '"/>');
        }
    });
</script>

<div id="thumb_wrapper"></div>
------------------------------------------------------------------
->field_vidaku[und][0][file][uri] = oembed://https%3A//vimeo.com/128275855
->field_vidaku[und][0][file][filename] = Bach: The Well Tempered Clavier
------------------------------------------------------------------
https://vimeo.com/128275855
oembed://https%3A//vimeo.com/channels/staffpicks/128875444
------------------------------------------------------------------
https://i.vimeocdn.com/video/452001751_1280.webp

background-image: url(https://i.vimeocdn.com/video/519348024.webp?mw=960&mh=540);
------------------------------------------------------------------
*.jpg|*.gif
------------------------------------------------------------------
[div#bgimgslider, context: div#bgimgslider, jquery: "1.10.2", constructor: function, init: function, selector: ""…] "element each"
<div id=​"bgimgslider" class=​"bgimgSlider">​…​</div>​<ul class=​"bgimgslideshow">​…​</ul>​<ul class=​"bgimgslideshow-controls">​…​</ul>​<div class=​"debugger">​</div>​</div>​ "element func"
[div#bgimgslider, context: div#bgimgslider, jquery: "1.10.2", constructor: function, init: function, selector: ""…] "slider func"
BgImgSlider {} "this func"
------------------------------------------------------------------
//	    	        if (response[0] !== undefined) {
//	    	            var newslides = response[0].settings.;
//	    	            //...
//	    							console.log(response[1].data,'response');
//	    	            //Drupal.attachBehaviors();
//	    	        }
//	    	        if (response[1] !== undefined) {
//	    	            var viewHtml = response[1].data;
//	    	            //...
//	    							console.log(response[1].data,'response');
//	    	            //Drupal.attachBehaviors();
//	    	        }

------------------------------------------------------------------
//			$('.bgimgslideshow li span').css({
//				'-webkit-animation': 'imageAnimation '+duration+'s linear infinite 0s',
//				'-moz-animation': 'imageAnimation '+duration+'s linear infinite 0s',
//				'-o-animation': 'imageAnimation '+duration+'s linear infinite 0s',
//				'-ms-animation': 'imageAnimation '+duration+'s linear infinite 0s',
//				'animation': 'imageAnimation '+duration+'s linear infinite 0s'
//			});
//			$('.bgimgslideshow li div').css({
//				'-webkit-animation': 'titleAnimation '+duration+'s linear infinite 0s',
//				'-moz-animation': 'titleAnimation '+duration+'s linear infinite 0s',
//				'-o-animation': 'titleAnimation '+duration+'s linear infinite 0s',
//				'-ms-animation': 'titleAnimation '+duration+'s linear infinite 0s',
//				'animation': 'titleAnimation '+duration+'s linear infinite 0s'
//			});
------------------------------------------------------------------
Array
(
    [0] => db_table
    [1] => base_table
    [2] => base_field
    [3] => name
    [4] => vid
    [5] => description
    [6] => tag
    [7] => human_name
    [8] => core
    [9] => api_version
    [10] => disabled
    [11] => editing
    [12] => args
    [13] => use_ajax
    [14] => result
    [15] => current_page
    [16] => items_per_page
    [17] => offset
    [18] => total_rows
    [19] => exposed_raw_input
    [20] => old_view
    [21] => parent_views
    [22] => is_attachment
    [23] => current_display
    [24] => query
    [25] => display_handler
    [26] => display
    [27] => style_plugin
    [28] => style_options
    [29] => row_index
    [30] => override_url
    [31] => override_path
    [32] => base_database
    [33] => field
    [34] => argument
    [35] => sort
    [36] => filter
    [37] => relationship
    [38] => header
    [39] => footer
    [40] => empty
    [41] => table
    [42] => type
    [43] => export_type
    [44] => executed
    [45] => built
    [46] => build_info
    [47] => attachment_before
    [48] => attachment_after
    [49] => dom_id
    [50] => preview
    [51] => relationships_fixed
    [52] => localization_plugin
    [53] => inited
    [54] => build_sort
    [55] => plugin_name
    [56] => build_time
    [57] => execute_time
)
------------------------------------------------------------------
view Object
(
    [db_table] => views_view
    [base_table] => node
    [base_field] => nid
    [name] => photo_gallery
    [vid] => 1
    [description] => 
    [tag] => default
    [human_name] => photo gallery
    [core] => 7
    [api_version] => 
    [disabled] => 
    [editing] => 
    [args] => Array
        (
        )

    [use_ajax] => 
    [result] => Array
        (
            [0] => stdClass Object
                (
                    [nid] => 7
                    [node_created] => 1429776514
                    [field_data_field_foto_img_node_entity_type] => node
                    [_field_data] => Array
                        (
                            [nid] => Array
                                (
                                    [entity_type] => node
                                    [entity] => stdClass Object
                                        (
                                            [vid] => 7
                                            [uid] => 1
                                            [title] => foto6
                                            [log] => 
                                            [status] => 1
                                            [comment] => 1
                                            [promote] => 0
                                            [sticky] => 0
                                            [nid] => 7
                                            [type] => foto
                                            [language] => und
                                            [created] => 1429776514
                                            [changed] => 1429776514
                                            [tnid] => 0
                                            [translate] => 0
                                            [revision_timestamp] => 1429776514
                                            [revision_uid] => 1
                                            [body] => Array
                                                (
                                                )

                                            [field_foto_img] => Array
                                                (
                                                    [und] => Array
                                                        (
                                                            [0] => Array
                                                                (
                                                                    [fid] => 6
                                                                    [uid] => 1
                                                                    [filename] => IMG_0146.JPG
                                                                    [uri] => public://fotos/IMG_0146.JPG
                                                                    [filemime] => image/jpeg
                                                                    [filesize] => 2488514
                                                                    [status] => 1
                                                                    [timestamp] => 1429776514
                                                                    [rdf_mapping] => Array
                                                                        (
                                                                        )

                                                                    [alt] => 
                                                                    [title] => 
                                                                    [width] => 4000
                                                                    [height] => 3000
                                                                )

                                                        )

                                                )
                    [field_field_foto_img] => Array
                        (
                            [0] => Array
                                (
                                    [rendered] => Array
                                        (
                                            [#theme] => image_formatter
                                            [#item] => Array
                                                (
                                                    [fid] => 6
                                                    [uid] => 1
                                                    [filename] => IMG_0146.JPG
                                                    [uri] => public://fotos/IMG_0146.JPG
                                                    [filemime] => image/jpeg
                                                    [filesize] => 2488514
                                                    [status] => 1
                                                    [timestamp] => 1429776514
                                                    [rdf_mapping] => Array
                                                        (
                                                        )

                                                    [alt] => 
                                                    [title] => 
                                                    [width] => 4000
                                                    [height] => 3000
                                                )

                                            [#image_style] => fotogal
                                            [#path] => 
                                            [#access] => 1
                                        )

                                    [raw] => Array
                                        (
                                            [fid] => 6
                                            [uid] => 1
                                            [filename] => IMG_0146.JPG
                                            [uri] => public://fotos/IMG_0146.JPG
                                            [filemime] => image/jpeg
                                            [filesize] => 2488514
                                            [status] => 1
                                            [timestamp] => 1429776514
                                            [rdf_mapping] => Array
                                                (
                                                )

                                            [alt] => 
                                            [title] => 
                                            [width] => 4000
                                            [height] => 3000
                                        )

                                )

                        )

                )

            [1] => stdClass Object
            

            
    [current_page] => 
    [items_per_page] => 
    [offset] => 
    [total_rows] => 11
            
    [query] => views_plugin_query_default Object
            
            [pager] => views_plugin_pager_full Object
                (
                    [current_page] => 1
                    [total_items] => 11
            
            
            
            
    [filter] => Array
        (
            
            [type] => views_handler_filter_node_type Object
                (
            
                    [query] => views_plugin_query_default Object
                        (
            
                            [pager] => views_plugin_pager_full Object
                                (
                                    [current_page] => 1
                                    [total_items] => 11
                                    
------------------------------------------------------------------
$javascript = drupal_add_js();
------------------------------------------------------------------
$.ajax({
    url: Drupal.settings.basePath + 'views/ajax',
    type: 'post',
    data: {
        view_name: 'view_name',
        view_display_id: 'view_display_id'
    },
    dataType: 'json',
    success: function (response) {
        if (response[1] !== undefined) {
            var viewHtml = response[1].data;
            //...
            Drupal.attachBehaviors();
        }
    }
});
------------------------------------------------------------------
.paused .bgimgslideshow li span {
	animation-play-state: paused !important;
}
------------------------------------------------------------------
  position: absolute;
  bottom: 10px;
  left: 0px;
  width: 100%;
  text-align: right;
------------------------------------------------------------------
var myButton = $('#button'),
       myBox = $('#box');

myButton.click(function () { 

  myBox.addClass('change-size');
  
  myBox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  function(e) {
    
    $('#msg').append('<p>Animation complete</p>');

    myBox.removeClass('change-size');

  });
  
  

});
------------------------------------------------------------------
//			span_settings: {
//				'background-image': 'url(../images/5.jpg)',
//			  '-webkit-animation-delay': '6s',
//			  '-moz-animation-delay': '6s',
//			  '-o-animation-delay': '6s',
//			  '-ms-animation-delay': '6s',
//			  'animation-delay': '6s'					
//			},
//			div_settings: {
//				'animation-delay': 6
//			  '-webkit-animation-delay': '6s',
//			  '-moz-animation-delay': '6s',
//			  '-o-animation-delay': '6s',
//			  '-ms-animation-delay': '6s',
//			  'animation-delay': '6s'
//			},
//		  map_settings: {
//			  zoom: 4,
//			  center: [33.65016397222289,-92.744140625],
//			  mapTypeId: 'ROADMAP'
//		  },

------------------------------------------------------------------
		//drupal_add_js(array('bgimgslider' => array('slide_item_'.$sldi => $testvar)), array('type' => 'setting'));

------------------------------------------------------------------
body.page-photo-gallery #navbar {
	z-index: 111;
	opacity: 0.3;
	transition:opacity 1s;
}
body.page-photo-gallery #navbar:hover {
	opacity: 1;
}
