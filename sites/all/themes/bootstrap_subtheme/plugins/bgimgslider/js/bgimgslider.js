(function ($) {
	//Drupal.bgimgslider = {};
	$.fn.bgimgslider = function(options) {

		var $this = this,
				$slider = '',
				anim_iterations = 0,
				items_count = 0,	
				current_page = 0,
				total_pages = 0;

		var defaults = {
			animation_delay: 6,
			total_items: 0,	
			items: [],
			items_per_page: 0,
			onAnimStart:null
		};

//		$this.items = options.items;
//		delete options.items;
//		
		var options = $.extend({}, defaults, options);
		
		
		//----------------------------------
		$this.init = function() {
			//Drupal.bgimgslider = $this;
			$($this).addClass('bgimgslider-container');
			$($this).append('<ul class="bgimgslideshow"></ul>');
			$slider = $('.bgimgslideshow', $this);
			console.log(options);
			items_count = options.items.length;
			total_pages = Math.ceil(options.total_items/options.items_per_page);
			//console.log(options);
			$this.render_slides();
			$this.render_controls();
			$($this).append('<div class="debugger"></div>');
			//$('.bgimgslideshow li:nth-child('+(i+1)+') span').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
//			if (options.onAnimStart !== null) {
//				$($this).on("AnimStart", function( e, $this ) {
//				  //alert( param1 + "\n" + param2 );
//					
//				});
//			}
			$('.bgimgslideshow li span', $this).on('webkitAnimationStart mozanimationstart oAnimationStart msAnimationStart animationstart', function(e) {
		    //console.log('Animation start ');
				anim_iterations++;
				$('.debugger', $this).text('animationstart= '+anim_iterations);
				console.log('animation start= '+anim_iterations);
				if (options.onAnimStart !== null) {
					//$.proxy(Self.mycarousel_itemLoadCallback, this)
					//$.proxy(options.onAnimStart, this);
					//options.onComplete.call();
					//$.isFunction(options.onAnimStart) && options.onAnimStart.call($this);
					$.isFunction(options.onAnimStart) && options.onAnimStart.apply($this, arguments);
					//options.onAnimStart();
//					$($this).trigger({
//					  type:"onAnimStart",
//					  user:"foo",
//					  pass:"bar"
//					});
				}
				//if(o){e.success.call(e.context,J,"success",j);y&&b.event.trigger("ajaxSuccess",[j,e])}
		  });
			$('.bgimgslideshow li span', $this).on('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd AnimationEnd', function(e) {
				console.log('Animation end ');
			});
			$('.bgimgslideshow li span', $this).on('webkitAnimationIteration mozanimationiteration oAnimationIteration msAnimationIteration animationiteration', function(e) {
				//console.log('Animation animationiteration ');
				anim_iterations++;
				console.log('animationiteration= '+anim_iterations);
				$('.debugger', $this).text('animationiteration= '+anim_iterations);
			});
			
	  };//end of init

		//----------------------------------
		$this.update_slides_nextpage = function() {
			for (var i=0,n=options.items.length;i<n;i++) {
				
				nod = options.items[i];
				if (i > 0) {
					$('.bgimgslideshow li:nth-child('+(i+1)+') span').css({
						'background-image': 'url('+nod.img_url+')'
					});
				} else {
					$('.bgimgslideshow li:nth-child('+(i+1)+') span').css({
						'background-image': 'url('+nod.img_url+')'
					});
				}
	
			}
		}
		
		//----------------------------------
		$this.render_slides = function() {
			//var tot = data.length;
			var duration = options.animation_delay * items_count;
	
			
			//insert html elements
			var nod = {};
			for (var i=0; i<items_count; i++) {
				nod = options.items[i];
				var args = {
						img_url: nod.img_url,
						title: nod.title
				};
				$this.add_slide(args);
			}
			
			//set slides styles
			$this.set_slideshow_speed(options.animation_delay);
			
			for (i=0; i<items_count; i++) {
				nod = options.items[i];
				if (i > 0) {
					var delay = options.animation_delay * i;
					$('.bgimgslideshow li:nth-child('+(i+1)+') span').css({
						'background-image': 'url('+nod.img_url+')'
					});
				} else {
					$('.bgimgslideshow li:nth-child('+(i+1)+') span').css({
						'background-image': 'url('+nod.img_url+')'
					});
				}
//				$('.bgimgslideshow li:nth-child('+(i+1)+') span').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
//					  function(e) {
//					    
//					    console.log('Animation complete ');
//
//					    //myBox.removeClass('change-size');
//
//					  });
			}//end for i
			
		}
		
		//----------------------------------
		$this.add_slide = function(args) {
			var ind = 0;//slides.length;
			$slider.append('<li><span>Image 0'+ind+'</span><div><h3>'+args.title+'</h3></div></li>');
			//slides.push(slide);
			//$this.assign_marker_info(marker, {});
		}

		//----------------------------------
		$this.set_slideshow_speed = function(speed) {
			options.animation_delay = speed;
			//var tot = options.items.length;
			var duration = options.animation_delay * items_count;
			//set slides styles
			$('.bgimgslideshow li span', $this).css({
				'-webkit-animation': 'imageAnimation '+duration+'s linear infinite 0s',
				'-moz-animation': 'imageAnimation '+duration+'s linear infinite 0s',
				'-o-animation': 'imageAnimation '+duration+'s linear infinite 0s',
				'-ms-animation': 'imageAnimation '+duration+'s linear infinite 0s',
				'animation': 'imageAnimation '+duration+'s linear infinite 0s'
			});
			$('.bgimgslideshow li div', $this).css({
				'-webkit-animation': 'titleAnimation '+duration+'s linear infinite 0s',
				'-moz-animation': 'titleAnimation '+duration+'s linear infinite 0s',
				'-o-animation': 'titleAnimation '+duration+'s linear infinite 0s',
				'-ms-animation': 'titleAnimation '+duration+'s linear infinite 0s',
				'animation': 'titleAnimation '+duration+'s linear infinite 0s'
			});
			for (i=0; i<items_count; i++) {
				//nod = options.items[i];
				if (i > 0) {
					var delay = options.animation_delay * i;
					$('.bgimgslideshow li:nth-child('+(i+1)+') span', $this).css({
					  '-webkit-animation-delay': delay+'s',
					  '-moz-animation-delay': delay+'s',
					  '-o-animation-delay': delay+'s',
					  '-ms-animation-delay': delay+'s',
					  'animation-delay': delay+'s'					
					});
					$('.bgimgslideshow li:nth-child('+(i+1)+') div', $this).css({
						'-webkit-animation-delay': delay+'s',
						'-moz-animation-delay': delay+'s',
						'-o-animation-delay': delay+'s',
						'-ms-animation-delay': delay+'s',
						'animation-delay': delay+'s'					
					});
				} else {
					
				}
			}//end for i
		}
		
		//----------------------------------
		$this.render_controls = function(args) {
			$($this).append('<ul class="bgimgslideshow-controls"></ul>');
			$('.bgimgslideshow-controls',$this).append('<li class="slow"><a class="slow" href="#">slow</a></li>');
			$('.bgimgslideshow-controls',$this).append('<li class="normal"><a class="normal" href="#">normal</a></li>');
			$('.bgimgslideshow-controls',$this).append('<li class="fast"><a class="fast" href="#">fast</a></li>');
			$('.bgimgslideshow-controls',$this).append('<li class="play"><a class="play" href="#">play</a></li>');
			$('.bgimgslideshow-controls a.play',$this).click(function(e){
				//animation-play-state: paused
				//console.log('playing');
				if ($($this).hasClass('paused')) {
					$('.bgimgslideshow li span', $this).css({
						'animation-play-state': 'running'
					});
					$('.bgimgslideshow li div', $this).css({
						'animation-play-state': 'running'
					});
				} else {
					$('.bgimgslideshow li span', $this).css({
						'animation-play-state': 'paused'
					});
					$('.bgimgslideshow li div', $this).css({
						'animation-play-state': 'paused'
					});
					
				}
				$($this).toggleClass('paused');
			});
			$('.bgimgslideshow-controls a.slow',$this).click(function(e){
				if (!$($this).hasClass('slow')) {
					$this.set_slideshow_speed(9)
					$($this).removeClass('fast');
					$($this).removeClass('normal');
					$($this).addClass('slow');
				} else {
				}
			});
			$('.bgimgslideshow-controls a.normal',$this).click(function(e){
				if (!$($this).hasClass('normal')) {
					$this.set_slideshow_speed(6)
					$($this).removeClass('slow');
					$($this).removeClass('fast');
					$($this).addClass('normal');
				} else {
				}
			});
			$('.bgimgslideshow-controls a.fast',$this).click(function(e){
				if (!$($this).hasClass('fast')) {
					$this.set_slideshow_speed(3)
					$($this).removeClass('slow');
					$($this).removeClass('normal');
					$($this).addClass('fast');
				} else {
				}
			});
			
		}
		
//
//		//----------------------------------
//		$this.handle_marker_details_click = function(event, marker) {
//			//google.maps.event.trigger($this.map, "resize");
//			var $progress = '<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>';
//			$details.html('<div class="details_wrapper_ajax">'+$progress+'</div>');
//
//			var custom_settings = {};
//		  custom_settings.url = Drupal.settings.basePath+options.ajax_node_path+marker.nid;
//		  custom_settings.event = 'click';
//		  custom_settings.keypress = false;
//		  custom_settings.prevent = false;
//			var ajax = new Drupal.ajax(false, false, custom_settings);
//			ajax.eventResponse(ajax, {});			
//		}
		
//	var myButton = $('#button'),
//	myBox = $('#box');
//	myButton.click(function () { 
//		myBox.addClass('change-size');
//		myBox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
//		function(e) {
//			$('#msg').append('<p>Animation complete</p>');
//			myBox.removeClass('change-size');
//		});
//	});
		
    $this.init();
    console.log($this);
    return $this;
	};//... $.fn.gachimap
	
  function init_bgimgslider(settings) {

  	//console.log('init_bgimgslider');
		var custom_settings = {
			'animation_delay': 2,
			'onAnimStart':function(){
				//console.log(e,'E');
				//console.log(Drupal.bgimgslider,'Drupal.bgimgslider');
				console.log(this,'this');
//		    if (anim_iterations == items_count) {
//		    	console.log('----ajax----- ');
//			    $.ajax({
//	    	    url: Drupal.settings.basePath + 'views/ajax',
//	    	    type: 'post',
//	    	    data: {
//	    	        view_name: 'photo_gallery',
//	    	        view_display_id: 'page',
//					    	per_page: options.items_per_page,
//				        page: current_page+1			    	
//	    	    },
//	    	    dataType: 'json',
//	    	    success: function (response) {
//    					//console.log(response,'response');
//    					if (response.items && response.items.length) {
//    						next_page_items = options.items;
//    						options.items = response.items;
//    					}
//	    	    }
//		    	});		    
//		    }
				
			}
	  };
		var plugin_settings = $.extend({} , settings.bgimgslider, custom_settings);
		$('#bgimgslider').bgimgslider(plugin_settings);
  };//end of init_gachimap

  Drupal.behaviors.bgimgslider = {
    attach:function (context, settings) {
    	init_bgimgslider(settings);
  		//----------------------------------
    	
			//----------------------------------
		  //$(document).ready(function(){
			  //google.maps.event.addDomListener(window, 'load', init_gachimap);
		  //});

    }//end of attach
  }		
		
		
		
		
////////////////////////////////		
//	
//	var i,
//		j = 0,
//		img_url;
//	//console.log(Drupal.settings.bgimgslider.items);
//	
//	for (i in Drupal.settings.bgimgslider.items) {
//		img_url = Drupal.settings.bgimgslider.items[i];
//		$('.cb-slideshow li:nth-child('+(j+1)+') span').css({'background-image': 'url('+img_url+')'});
//		console.log(img_url);
//		j++;
//	}
//	var 
//	setInterval()
})(jQuery);