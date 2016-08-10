(function(jQuery){
	jQuery.fn.extend({
		/*
		 * 自訂事件
		*/
		track_event: function(){

			var dom = jQuery('*[data-track-event]');
			var dom_length = dom.length;
			var log = '';

			//取得所有有指定data-track-event屬性的Dom元件
			for(var i = 0; i < dom_length; i++) {
				var method              = '' == jQuery.trim(jQuery(dom[i]).attr('data-track-event')) ? [''] : jQuery(dom[i]).attr('data-track-event').split(' ');
				var length              = method.length;

				//綁定觸發條件
				for(var j = 0; j < length; j++) {
					if('' != jQuery.trim(method[j])) {
						jQuery(dom[i]).bind(method[j], function(event) {
							var category            = '' == jQuery.trim(jQuery(this).attr('data-track-category')) ? '' : jQuery(this).attr('data-track-category');
							var action              = '' == jQuery.trim(jQuery(this).attr('data-track-action')) ? '' : jQuery(this).attr('data-track-action');
							var opt_label           = '' == jQuery.trim(jQuery(this).attr('data-track-opt-label')) ? '' : jQuery(this).attr('data-track-opt-label');
							var opt_value           = '' == jQuery.trim(jQuery(this).attr('data-track-opt-value')) ? '' : jQuery(this).attr('data-track-opt-value');
							var opt_noninteraction  = '' == jQuery.trim(jQuery(this).attr('data-track-opt-noninteraction')) ? '' : jQuery(this).attr('data-track-opt-noninteraction');
							var condition = [];
							condition.push('_trackEvent');
							condition.push(category);
							condition.push(action);
							condition.push(opt_label);
							if('' != opt_noninteraction) {
								condition.push(opt_noninteraction)
							}
							_gaq.push(condition);
						});
					}
				}
			}
		}
	});
})(jQuery);

/**
 * 運行主程式
 */
jQuery(document).ready(function(jQuery) {
	jQuery(window).track_event();
});
