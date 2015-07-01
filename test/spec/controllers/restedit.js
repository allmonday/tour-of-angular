'use strict';

describe('Controller: ResteditCtrl', function () {

  // load the controller's module
  beforeEach(module('tutorialApp'));

  var ResteditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResteditCtrl = $controller('ResteditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
