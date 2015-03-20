'use strict';

angular.module('yotestApp').
controller('ItemsCtrl', ['$scope', 'itemService', function($scope, itemService) {

    $scope.items =  itemService.get();

    $scope.push = function() {
        var newItem = {
            name: $scope.name,
            image: $scope.image,
            description: $scope.description,
        };

        itemService.push(newItem);
        
        $scope.name = '';
        $scope.description = '';
        $scope.image = '';
    };
}]);