'use strict';

/**
 * @ngdoc function
 * @name hipsterifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hipsterifyApp
 */
angular.module('hipsterifyApp')
  .controller('MainCtrl', function ($scope, $sce, $q) {
    
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

		function suggest_state(term) {

			$scope.artist = {};

		  var q = term.toLowerCase().trim();
		  var results = [];

		  // Find first 10 states that start with `term`.
		  for (var i = 0; i < states.length && results.length < 10; i++) {
		    var state = states[i];
		    if (state.toLowerCase().indexOf(q) === 0)
		      results.push({ label: state, value: state });
		  }

		  return results;
		};

		$scope.autocomplete_options = {
		  suggest: suggest_state,
		  on_select: selectArtist,
		  on_detach: deleteArtist,
		  on_attach: deleteArtist
		};
  });
