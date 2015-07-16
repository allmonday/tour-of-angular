'use strict';

describe('Controller: DragAndDropCtrl', function () {

  // load the controller's module
  beforeEach(module('tutorialApp'));

  var DragAndDropCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DragAndDropCtrl = $controller('DragAndDropCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
