'use strict';

describe('Controller: RestcreateCtrl', function () {

  // load the controller's module
  beforeEach(module('tutorialApp'));

  var RestcreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestcreateCtrl = $controller('RestcreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
