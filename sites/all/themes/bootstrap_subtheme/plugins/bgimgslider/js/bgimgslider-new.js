(function($) {
	var BgImgSlider = function(element, options){
		// Defaults are below
		var settings = $.extend({}, $.fn.bgimgSlider.defaults, options);
		// Get this slider

		var slider = $(element);
		var $this = this;
//		console.log(element, 'element func');
//		console.log(slider, 'slider func');
//		console.log(this, 'this func');

		// Useful variables.
		var vars = {
				options: {},
				settings: settings,
				element: element,
				slider: slider,
				self: $this,
				anim_iterations: 0,
				items_count: 0,	
				current_page: 0,
				total_pages: 0,
				current_page_items: [],
				current_page_items_count: 0

//				currentSlide: 0,
//				currentImage: '',
//				totalSlides: 0,
//				running: false,
//				paused: false,
//				stop: false,
//				controlNavEl: false
		};

		// Find our slider children
//		var kids = slider.children();
//		kids.each(function() {

//		});
//console.log(this,'this func');
		//----------------------------------
		this.init = function() {
			//console.log('init');
			console.log(options,'init');
			//Drupal.bgimgslider = $this;
			slider.data('bgimg:vars', vars).addClass('bgimgSlider');
			slider.data('bgimg:element', element);
			//$($this).addClass('bgimgslider-container');
			slider.append('<ul class="bgimgslideshow"></ul>');
			//$slider = $('.bgimgslideshow', $this);
			//console.log(element,'elem');
			//console.log(slider,'slider');
			//console.log(this,'dis');
			//vars.currentSlide = settings.startSlide;
			vars.options = options;
			vars.current_page = 1;
			vars.items_count = settings.items.length;
			vars.total_pages = Math.ceil(settings.items/settings.items_per_page);
			
			//vars.current_page_items = 
			this.load_current_page_items(); 
			this.render_slides();
			//this.render_controls();
			//slider.append('<div class="debugger"></div>');
			//$('.bgimgslideshow li:nth-child('+(i+1)+') span').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
//			if (options.onAnimStart !== null) {
//				$($this).on("AnimStart", function( e, $this ) {
//				  //alert( param1 + "\n" + param2 );
//					
//				});
//			}
			$('.bgimgslideshow li span', slider).on('webkitAnimationStart mozanimationstart oAnimationStart msAnimationStart animationstart', function(e) {
//				$('.bgimgslideshow li span', slider).on('webkitAnimationStart mozanimationstart oAnimationStart msAnimationStart animationstart', function(e) {
		    //console.log('Animation start ');
				vars.anim_iterations++;
				//$('.debugger', slider).text('animationstart= '+vars.anim_iterations);
				//console.log('animation start= '+vars.anim_iterations);
				if (settings.onAnimStart !== null) {
					//$.proxy(Self.mycarousel_itemLoadCallback, this)
					//$.proxy(options.onAnimStart, this);
					//options.onComplete.call();
					//$.isFunction(options.onAnimStart) && options.onAnimStart.call(slider);
					//$.isFunction(options.onAnimStart) && options.onAnimStart.apply($this, arguments);
					//settings.onAnimStart.apply(slider, arguments);
					//options.onAnimStart();
//					$($this).trigger({
//					  type:"onAnimStart",
//					  user:"foo",
//					  pass:"bar"
//					});
					//$.isFunction(options.onEachItemIteration) && options.onEachItemIteration.call(slider);
				}
				//if(o){e.success.call(e.context,J,"success",j);y&&b.event.trigger("ajaxSuccess",[j,e])}
		  });
			
			$('.bgimgslideshow li span', slider).on('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd AnimationEnd', function(e) {
				//console.log('Animation end ');
			});
			$('.bgimgslideshow li span', slider).on('webkitAnimationIteration mozanimationiteration oAnimationIteration msAnimationIteration animationiteration', function(e) {
				//console.log('Animation animationiteration ');
				vars.anim_iterations++;
				//console.log('animationiteration= '+vars.anim_iterations);
				//$('.debugger', slider).text('animationiteration= '+vars.anim_iterations);
			});
			
	  };//end of init


		
		//----------------------------------
		this.load_current_page_items = function() {
			//console.log('render_slides');
			//var tot = data.length;
			//var duration = settings.animation_delay * vars.items_count;
	
			
			//insert html elements
			var nod = {};
			var istart = (vars.current_page-1) * settings.items_per_page;
			var iend = istart + settings.items_per_page;
			iend = Math.min(iend, vars.items_count);
			vars.current_page_items_count = iend - istart;
			for (var i=0; i<vars.current_page_items_count; i++) {
				//nod = settings.items[i+istart];
				vars.current_page_items[i] = settings.items[i+istart];
//				var args = {
//						img_url: nod.img_url,
//						title: nod.title
//				};
//				this.add_slide(args);
			}
			
		}
		
		//----------------------------------
		this.render_slides = function() {
			//console.log('render_slides');
			//var tot = data.length;
			var duration = settings.animation_delay * vars.current_page_items_count;
			
			
			//insert html elements
			var nod = {};
			for (var i=0; i<vars.current_page_items_count; i++) {
				nod = vars.current_page_items[i];
				var args = {
						img_url: nod.img_url,
						title: nod.title
				};
				this.add_slide(args);
			}
		
		//set slides styles
		this.set_slideshow_speed(settings.animation_delay);
		
		//set slides images
		this.set_slides_images(vars.current_page_items);
//			
//			for (i=0; i<vars.items_count; i++) {
//				nod = settings.items[i];
//				if (i > 0) {
//					var delay = settings.animation_delay * i;
//					$('.bgimgslideshow li:nth-child('+(i+1)+') span', slider).css({
//						'background-image': 'url('+nod.img_url+')'
//					});
//				} else {
//					$('.bgimgslideshow li:nth-child('+(i+1)+') span', slider).css({
//						'background-image': 'url('+nod.img_url+')'
//					});
//				}
//				$('.bgimgslideshow li:nth-child('+(i+1)+') span').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
//					  function(e) {
//					    
//					    console.log('Animation complete ');
//
//					    //myBox.removeClass('change-size');
//
//					  });
//			}//end for i
		
		}
		
		//----------------------------------
		this.add_slide = function(args) {
			//console.log('add_slide');
			var ind = 0;//slides.length;
			$('.bgimgslideshow',slider).append('<li><span>Image 0'+ind+'</span><div><h3>'+args.title+'</h3></div></li>');
			//slides.push(slide);
			//$this.assign_marker_info(marker, {});
		}

		//----------------------------------
		this.set_slides_images = function(items) {
			console.log(items, 'items < set_slides_images');
			for (var i=0,n=items.length; i<n; i++) {
				var nod = items[i];
				if (i > 0) {
					var delay = settings.animation_delay * i;
					$('.bgimgslideshow li:nth-child('+(i+1)+') span', slider).css({
						'background-image': 'url('+nod.img_url+')'
					});
				} else {
					$('.bgimgslideshow li:nth-child('+(i+1)+') span', slider).css({
						'background-image': 'url('+nod.img_url+')'
					});
				}
			}//end for i
		}
		
		//----------------------------------
		this.set_slideshow_speed = function(speed) {
			//console.log('set_slide_speed');
			settings.animation_delay = speed;
			//var tot = settings.items.length;
			var imganim = settings.image_animation_name;
			var titanim = settings.title_animation_name;
			var duration = settings.animation_delay * vars.items_count;
			$('.bgimgslideshow li span', slider).css({
				'-webkit-animation': imganim+' '+duration+'s linear infinite 0s',
				'-moz-animation': imganim+' '+duration+'s linear infinite 0s',
				'-o-animation': imganim+' '+duration+'s linear infinite 0s',
				'-ms-animation': imganim+' '+duration+'s linear infinite 0s',
				'animation': imganim+' '+duration+'s linear infinite 0s'
			});
			$('.bgimgslideshow li div', slider).css({
				'-webkit-animation': titanim+' '+duration+'s linear infinite 0s',
				'-moz-animation': titanim+' '+duration+'s linear infinite 0s',
				'-o-animation': titanim+' '+duration+'s linear infinite 0s',
				'-ms-animation': titanim+' '+duration+'s linear infinite 0s',
				'animation': titanim+' '+duration+'s linear infinite 0s'
			});
			for (var i=0; i<vars.items_count; i++) {
				//nod = settings.items[i];
				if (i > 0) {
					var delay = settings.animation_delay * i;
					$('.bgimgslideshow li:nth-child('+(i+1)+') span', slider).css({
					  '-webkit-animation-delay': delay+'s',
					  '-moz-animation-delay': delay+'s',
					  '-o-animation-delay': delay+'s',
					  '-ms-animation-delay': delay+'s',
					  'animation-delay': delay+'s'					
					});
					$('.bgimgslideshow li:nth-child('+(i+1)+') div', slider).css({
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
		this.render_controls = function() {
			//console.log('render_controls');
			slider.append('<ul class="bgimgslideshow-controls"></ul>');
			var controls = $('.bgimgslideshow-controls', slider);
			//console.log(this,'this');


			$(controls).append('<li class="slow"><a class="slow" href="#">slow</a></li>')
			.append('<li class="normal"><a class="normal" href="#">normal</a></li>')
			.append('<li class="fast"><a class="fast" href="#">fast</a></li>')
			.append('<li class="play"><a class="play" href="#">play</a></li>');
			$('a.play', controls).click(function(e){
				//animation-play-state: paused
				//console.log('playing');
				var elem_li = $('.bgimgslideshow li', slider);
				if (slider.hasClass('paused')) {
					$('span', elem_li).css({
						'animation-play-state': 'running'
					});
					$('div', elem_li).css({
						'animation-play-state': 'running'
					});
				} else {
					$('span', elem_li).css({
						'animation-play-state': 'paused'
					});
					$('div', elem_li).css({
						'animation-play-state': 'paused'
					});
					
				}
				slider.toggleClass('paused');
			});
			$('a.slow', controls).click(function(e){
				var x = e.target;
				var y = $(x).closest('.bgimgSlider').data();
				console.log(y,'y click');
				//console.log(e,'e click');
				if (!slider.hasClass('slow')) {
					$this.set_slideshow_speed(9)
					slider.removeClass('fast');
					slider.removeClass('normal');
					slider.addClass('slow');
				} else {
				}
			});
			$('a.normal',controls).click(function(e){
				console.log(e,'e click');
				if (!slider.hasClass('normal')) {
					$this.set_slideshow_speed(6)
					slider.removeClass('slow');
					slider.removeClass('fast');
					slider.addClass('normal');
				} else {
				}
			});
			$('a.fast',controls).click(function(e){
				var x = e.target;
				console.log(x,'x click');
				//console.log(e,'e click');
				if (!slider.hasClass('fast')) {
					$this.set_slideshow_speed(3)
					slider.removeClass('slow')
					.removeClass('normal')
					.addClass('fast');
				} else {
				}
			});
			
		}
		







		// For debugging
		var trace = function(msg){
			if(this.console && typeof console.log !== 'undefined') { console.log(msg); }
		};
		// Start / Stop
//		this.stop = function(){
//		if(!$(element).data('nivo:vars').stop){
//		$(element).data('nivo:vars').stop = true;
//		trace('Stop Slider');
//		}
//		};

		// Trigger the afterLoad callback
    this.init();
		//settings.afterLoad.call(this);
		//$.isFunction(settings.afterLoad) && settings.afterLoad.apply($this, arguments);
		return this;
	};

	$.fn.bgimgSlider = function(options) {
		return this.each(function(key, value){
			var element = $(this);
    	//console.log(this, 'this each');
    	//console.log(element, 'element each');

			// Return early if this element already has a plugin instance
			if (element.data('bgimgslider')) { return element.data('bgimgslider'); }
			// Pass options to plugin constructor
			var bgimgslider = new BgImgSlider(this, options);
			// Store plugin object in this element's data
			element.data('bgimgslider', bgimgslider);
			//element.data('bgimgthis', this);
		});
	};

	// Default settings
	$.fn.bgimgSlider.defaults = {
		animation_delay: 6,
		total_items: 0,	
		items: [],
		items_per_page: 6,
		image_animation_name: 'bgimgsliderImageAnimation',
		title_animation_name: 'bgimgsliderTitleAnimation',
		onAnimStart: function(){}
			
//			effect: 'random',
//			slices: 15,
//			boxCols: 8,
//			boxRows: 4,
//			animSpeed: 500,
//			pauseTime: 3000,
//			startSlide: 0,
//			directionNav: true,
//			controlNav: true,
//			controlNavThumbs: false,
//			pauseOnHover: true,
//			manualAdvance: false,
//			prevText: 'Prev',
//			nextText: 'Next',
//			randomStart: false,
//			beforeChange: function(){},
//			afterChange: function(){},
//			slideshowEnd: function(){},
//			lastSlide: function(){},
//			afterLoad: function(){}
	};

	// $.fn._reverse = [].reverse;

  Drupal.behaviors.bgimgslider = {
      attach:function (context, settings) {
      	//console.log('init_bgimgslider');
    		var custom_settings = {
    			'animation_delay': 6,
//    			'afterLoad':function(){
//    				console.log(this,'afterload');
//    			},
   				'onAnimStart':function(){
   					/*
    				//console.log(e,'E');
    				//console.log(Drupal.bgimgslider,'Drupal.bgimgslider');
    				//console.log(this,'this onAnimStart');
    				//console.log($(this).data(), 'data animstart');
    				var slider = this;
    				var vars = slider.data('bgimg:vars');
    				console.log(vars, 'vars animstart');
    		    if (vars.anim_iterations == vars.items_count) {
    		    	console.log('----ajax----- ');
    		    	console.log(vars.current_page,'vars.current_page');
    			    $.ajax({
    	    	    url: Drupal.settings.basePath + 'views/ajax',
    	    	    type: 'post',
    	    	    data: {
    	    	        view_name: 'photo_gallery',
    	    	        view_display_id: 'page',
    					    	per_page: vars.settings.items_per_page,
    				        page: vars.current_page+1			    	
    	    	    },
    	    	    dataType: 'json',
    	    	    success: function (response) {
        					console.log(response,'response');
        					if (response.items && response.items.length) {
        						vars = slider.data('bgimg:vars');
        						//console.log(vars.settings.items,'vars.settings.items < response');
        						prev_page_items = vars.settings.items;
        						//vars.settings.items = response.items;
        						var items = response.items;
        						items[items.length-1] = vars.settings.items[items.length-1];
        						vars.settings.items = items;
        						//setTimelimit('$('+slider+')')
          					var s = vars.self;//slider.data('bgimg:vars');
          					//console.log(vars.slider.data(),'vars response');
        						console.log(vars.settings.items,'vars.settings.items < response:before');
          					//console.log(slider.data(),'slider.data response');
        						console.log(s,'s < response:before');
          					vars.prev_page_items = prev_page_items;
          					slider.data('bgimg:vars',vars);
          					s.vars = vars;
          					
          					s.set_slides_images(response.items);
        						console.log(s,'s < response:after');
        						console.log(vars.settings.items,'vars.settings.items < response:after');
        						
        					}
    	    	    }
    		    	});		    
    		    }*/
    		    
    		  },//end onAnimStart

     			'onEachItemIteration':function(){
     				/*
    				var slider = this;
    				var vars = slider.data('bgimg:vars');
    				if (vars.anim_iterations == vars.settings.items_per_page+1) {
    					console.log(vars.prev_page_items,'vars.prev_page_items < oneachitemiteration');
    				}
    				*/
   				}//end onEachItemIteration
    				
    	  };
    		var plugin_settings = $.extend({} , settings.bgimgslider, custom_settings);
    		$('#bgimgslider').bgimgSlider(plugin_settings);
    		//----------------------------------
      	
  			//----------------------------------
  		  //$(document).ready(function(){
  			  //google.maps.event.addDomListener(window, 'load', init_gachimap);
  		  //});

      }//end of attach
    }		
	
})(jQuery);