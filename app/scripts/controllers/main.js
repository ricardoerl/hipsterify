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
	    $scope.artistList = [];
	    $scope.artistLevels = [
	    	"Too mainstream to be here. The music was good but everything changed after collaborating with Lil Jon and Pitbull.",
	    	"On the way to be the next PSY but still with some way to go. Start to pray that no one keep listening this.",
	    	"Don't know whether to thank Spotify to hide this diamond or just nobody likes this.",
	    	"Does this exist, anyone?"
	    ];

		function selectArtist(selected){
			$scope.dirty = {};
			$scope.artist = {};
			$scope.artist = selected.obj;

			if (selected.obj.popularity >= 0 && selected.obj.popularity <= 25) {
				$scope.artist.level = $scope.artistLevels[3];
			} else if (selected.obj.popularity > 25 && selected.obj.popularity <= 50) {
				$scope.artist.level = $scope.artistLevels[2];
			} else if (selected.obj.popularity > 50 && selected.obj.popularity <= 75) {
				$scope.artist.level = $scope.artistLevels[1];
			} else if (selected.obj.popularity > 75 && selected.obj.popularity <= 100) {
				$scope.artist.level = $scope.artistLevels[0];
			};
		};

		function deleteArtist(){
			$scope.dirty = {};
			$scope.artist = {};
		};

		function suggestArtist(term) {

			$scope.artist = {};

			var q = term.toLowerCase().trim();
			var results = [];

		    Spotify.search(q, 'artist', { limit: 5 }).then(function (data) {
		    	$scope.artistList = [];


				for( var artist in data.artists.items ){

					$scope.artistList.push({ 
						label: $sce.trustAsHtml(
							'<div class="suggest-item">' + data.artists.items[artist].name + '</div>'
						), 
						value: data.artists.items[artist].name,
						obj: data.artists.items[artist]
					});

				}
				
			});

			return $scope.artistList;
			
		};

		$scope.autocomplete_options = {
		  suggest: suggestArtist,
		  on_select: selectArtist,
		  on_attach: deleteArtist
		};
  });
