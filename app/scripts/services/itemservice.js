'use strict';

/**
 * @ngdoc service
 * @name yotestApp.itemService
 * @description
 * # itemService
 * Service in the yotestApp.
 */
angular.module('yotestApp')
    .service('itemService', function() {

        var items = [{
            name: 'Nombre lol 1',
            image: 'http://placekitten.com/g/300/300',
            description: 'Description lol 1 Description lol 1 Description lol 1 Description lol 1 Description lol 1 Description lol 1 '
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

        return {

            push: function(item) {
                items.push(item);
            },

            get: function() {
                return items;
            }
        };

    });
