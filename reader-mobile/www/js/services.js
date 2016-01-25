angular.module('reader.services', [])

.factory('Flux', function() {
    var flux = [];

    return {
	all: function() {
	    return flux;
	},
	set: function(elem) {
	    flux = elem;
	},
	remove: function(index) {
	    flux.splice(index,1);
	},
	get: function(FluxId) {
	    return flux[FluxId]
	}
    }
});
