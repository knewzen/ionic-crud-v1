var app = angular.module('ionium.filters', []);

// This directive use to convert timestamp into time ago format
app.filter('ago', function() {
    return function(date) {
      return moment(date).fromNow();
    };
})

app.filter('trusted', function($sce){
	return function(url){
		return $sce.trustAsResourceUrl(url);
	}
});