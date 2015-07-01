'use strict';

describe('Controller: RestlistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('tutorialApp'));

  var RestlistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestlistctrlCtrl = $controller('RestlistctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
