'use strict';

/**
 * @ngdoc function
 * @name hipsterifyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hipsterifyApp
 */
angular.module('hipsterifyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
