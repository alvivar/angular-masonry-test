'use strict';

/**
 * @ngdoc function
 * @name yotestApp.controller:ItemsCtrl
 * @description
 * # ItemsCtrl
 * Controller of the yotestApp
 */
angular.module('yotestApp')
    .controller('ItemsCtrl', function($scope) {


        $scope.items = [{
            name: 'Nombre lol 1',
            image: 'http://placekitten.com/g/300/300',
            description: 'Description lol 1'
        }, {
            name: 'Nombre lol 2 ',
            image: 'http://placekitten.com/g/300/300',
            description: 'Description lol 2'
        }, {
            name: 'Nombre lol 3',
            image: 'http://placekitten.com/g/300/300',
            description: 'Description lol 3'
        }, {
            name: 'Nombre lol 4',
            image: 'http://placekitten.com/g/300/300',
            description: 'Description lol 4'
        }, {
            name: 'Nombre lol 5',
            image: 'http://placekitten.com/g/300/300',
            description: 'Description lol 5'
        }];


        $scope.name = '';
        $scope.description = '';
        $scope.image = '';


        $scope.AddItem = function() {

            $scope.items.push({
                'name': $scope.name,
                'image': $scope.image,
                'description': $scope.description
            });

            $scope.name = '';
            $scope.description = '';
            $scope.image = '';
        };

    });
