(function($) {

  Drupal.behaviors.Forcelang = {
    attach: function(context, settings) {
  		var sel_lang = $('#edit-language').val();
  		var cur_lang = Drupal.settings.pathPrefix;
  		if (sel_lang+'/' != cur_lang) {
  			$('#edit-language').val(cur_lang.replace('/', ''));
  		}

    	$('#edit-language').change(function(e){
    		var sel_lang = $(this).val();
    		var cur_lang = Drupal.settings.pathPrefix;
    		if (sel_lang+'/' != cur_lang) {
    			var cur_url = window.location.href;
    			var new_url = cur_url.replace('/'+cur_lang, '/'+sel_lang+'/');
    			location.replace(new_url);
    		}
    	});
    }
  };  
  
  $(document).ready(function(){
  });  
  
})(jQuery);