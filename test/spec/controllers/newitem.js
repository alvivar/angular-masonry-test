'use strict';

describe('Controller: NewitemCtrl', function () {

  // load the controller's module
  beforeEach(module('yotestApp'));

  var NewitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewitemCtrl = $controller('NewitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
