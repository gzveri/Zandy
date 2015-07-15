(function($) {
  $(document).ready(function(){
  	$('<div id="video-gal-player"></div>').insertBefore('.view-video-gallery');
  	$('.view-video-gallery .views-field-field-videolink a').each(function(){
  		var a = $(this);
  		$(this).click(function(e){
  			$('.view-video-gallery .jcarousel-item').removeClass('active');
  			$(a).closest('li').addClass('active');
    		var vid_url = a.attr('href');
    		var r = /vimeo\.com\/(\d+)/;
        var m = vid_url.match(r);
        var video_id = m[1];
  			var tx = '';
  			var player_width = $('#video-gal-player').parent().width();
  			var player_height = Math.floor((player_width * 768)/1280);
  			tx += '<iframe src="//player.vimeo.com/video/'+video_id+'?portrait=0&color=333&autoplay=0" width="'+player_width+'" height="'+player_height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
  			$('#video-gal-player').html(tx);
  			var iframe = $('#video-gal-player iframe');
  			$(iframe).data('aspectRatio', iframe.height() / iframe.width())
  	    .removeAttr('height')
  	    .removeAttr('width');
  			$(window).resize();
  			e.preventDefault();
  			return false;
  		});
  		
  	});
  	$('.view-video-gallery .jcarousel-item:first .views-field-field-videolink a').click();
  	$(window).resize(function() {
  	  var newWidth = $("#video-gal-player").width();
 	    var iframe = $('#video-gal-player iframe');
 	    iframe.width(newWidth).height(newWidth * iframe.data('aspectRatio'));
  	}).resize();

  });
})(jQuery);