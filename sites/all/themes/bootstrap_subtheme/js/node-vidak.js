(function($) {
	console.log('loaded');
  $(document).ready(function(){
  	$('.video_thumb_wrapper').each(function(){
  		var vid_id = $(this).attr('id');
  		var r = /^vimeo\-(\d+)/;
      var m = vid_id.match(r);
      video_id = m[1];
  		$.ajax({
        type:'GET',
        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data){
            var thumbnail_src = data[0].thumbnail_large;
            $('#vimeo-'+video_id+' .video_thumb_image a img').attr('src', thumbnail_src);
        }
      });
  	});
  });
})(jQuery);