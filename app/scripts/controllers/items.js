'use strict';

/**
 * @ngdoc function
 * @name yotestApp.controller:ItemsCtrl
 * @description
 * # ItemsCtrl
 * Controller of the yotestApp
 */
angular.module('yotestApp')
  .controller('ItemsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
