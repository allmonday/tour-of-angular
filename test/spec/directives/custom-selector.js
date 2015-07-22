'use strict';

describe('Directive: customSelector', function () {

  // load the directive's module
  beforeEach(module('tutorialApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<custom-selector></custom-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the customSelector directive');
  }));
});
