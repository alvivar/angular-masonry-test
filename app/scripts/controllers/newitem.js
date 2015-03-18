'use strict';

/**
 * @ngdoc function
 * @name yotestApp.controller:NewitemCtrl
 * @description
 * # NewitemCtrl
 * Controller of the yotestApp
 */
angular.module('yotestApp')
  .controller('NewitemCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
