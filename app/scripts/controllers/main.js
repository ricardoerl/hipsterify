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

		function debugSpotify(){
			Spotify.search('Kean', 'artist', { limit: 5 }).then(function (data) {
				console.log(data);
			});
		};

		function suggestArtist(term) {

			$scope.artist = {};

			var q = term.toLowerCase().trim();
			var results = [];

			do {
			    Spotify.search(q, 'artist', { limit: 5 }).then(function (data) {
					console.log(data);
					for( var artist in data.artists.items ){
						results.push({ label: data.artists.items[artist].name, value: data.artists.items[artist].name });
					}
				});

			    
			}
			while (results.length > 0);

			return results;
			
		};

		$scope.autocomplete_options = {
		  suggest: suggestArtist,
		  on_select: debugSpotify,
		  on_detach: deleteArtist,
		  on_attach: deleteArtist
		};
  });
