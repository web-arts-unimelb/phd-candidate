(function ($) {
	Drupal.behaviors.phd_candidate = {
    attach: function(context, settings) {
			$("h3.school-title").ready(function(){
				var plus = "+ ";
        var minus = "- ";
				var orig_text = "";
				var new_text = "";

				// Init
				// http://stackoverflow.com/questions/4304587/jquery-not-first
				$("table.table-student:gt(0)").hide();

				// The first title
				orig_text = $("h3.school-title:eq(0)").text();
				new_text = minus + orig_text;
				$("h3.school-title:eq(0)").text(new_text);			
	
				// Rest of title
				$("h3.school-title:gt(0)").each(function(index) {
					var orig_text = $(this).text();
        	var new_text = plus + orig_text;
        	$(this).text(new_text);
				});

				//
				$("h3.school-title").css("cursor", "pointer");

				//
				$("h3.school-title").on("click", function(){
					// https://api.jquery.com/next/
       		$(this).next().toggle();

					// 
					var orig_text = $(this).text();
					var new_text = '';
					
					if(orig_text.indexOf(plus) !== -1) {
						orig_text = orig_text.replace(plus, '');
          	new_text = minus + orig_text;
          	$(this).text(new_text);
					}
					else {
						orig_text = orig_text.replace(minus, '');
            new_text = plus + orig_text;
            $(this).text(new_text);
					}


      	});

			});

 
    }
  }

})(jQuery)
