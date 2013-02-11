(function($Sockly) {

	var adapters = [];




	// test for websocket
	// fallbacks
	
	var socketAdapter = function();

	
	var trackingAdapter = function() {};


	$Sockly.adapters = function () {


		return {

			test: function() {

			},

			loadAdapter: function(adap) {

			},

			

		}
	}


})(window.Sockly);