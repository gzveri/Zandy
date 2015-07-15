<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
// if (arg(0) != 'admin') {
// 	kpr($rows);
// }
?>
<div id="slider1_container" style="position:relative;margin:0 auto;top:0px;left:0px;width:1024px;height:650px;background:#191919;">
	<div u="slides" style="cursor:move;position:absolute;left:0px;top:0px;width:1024px;height:576px;overflow:hidden;">
	<?php
	  foreach ($rows as $id => $row) {
	    print $row;
		}
	?>
	</div>
	<div u="thumbnavigator" class="jssort01" style="left: 0px; bottom: 0px;">
	  <div u="slides" style="cursor: default;">
	    <div u="prototype" class="p">
	      <div class=w><div u="thumbnailtemplate" class="t"></div></div>
	      <div class=c></div>
	    </div>
	  </div>
	</div>  
</div>