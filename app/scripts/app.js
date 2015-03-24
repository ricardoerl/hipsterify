'use strict';

/**
 * @ngdoc overview
 * @name hipsterifyApp
 * @description
 * # hipsterifyApp
 *
 * Main module of the application.
 */
angular
  .module('hipsterifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MassAutoComplete',
    'spotify'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
