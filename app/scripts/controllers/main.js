'use strict';

/**
 * @ngdoc function
 * @name hipsterifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hipsterifyApp
 */
angular.module('hipsterifyApp')
  .controller('MainCtrl', function ($scope, $sce, $q, Spotify) {
    
	    $scope.dirty = {};
	    $scope.artist = {};

		var states = ['Alabama', 'Alaska', 'California'];

		function selectArtist(selected){
			$scope.dirty = {};
			$scope.artist.name = selected.value; 
		};

		function deleteArtist(){
			$scope.artist = {};
		};

		function suggestArtist(term) {

			$scope.artist = {};

			var q = term.toLowerCase().trim();
			var results = [];

		 //    Spotify.search(q, 'artist', { limit: 5 }).then(function (data) {
			// 	for( var artist in data.artists.items ){
			// 		results.push({ 
			// 			value: data.artists.items[artist].name,
			// 			label: data.artists.items[artist].name 
			// 		});
			// 	}
			// });

			  for (var i = 0; i < states.length && results.length < 10; i++) {
			      var state = states[i];
			      if (state.toLowerCase().indexOf(q) === 0)
			        results.push({ label: state, value: state });
			    }

			return results;
			
		};

		$scope.autocomplete_options = {
		  suggest: suggestArtist,
		  on_detach: deleteArtist,
		  on_attach: deleteArtist
		};
  });
