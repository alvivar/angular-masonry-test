'use strict';

/**
 * @ngdoc overview
 * @name yotestApp
 * @description
 * # yotestApp
 *
 * Main module of the application.
 */
angular
  .module('yotestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .when('/newitem', {
        templateUrl: 'views/newitem.html',
        controller: 'NewitemCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
