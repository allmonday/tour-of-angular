'use strict';

describe('Service: todolist', function () {

  // load the service's module
  beforeEach(module('tutorialApp'));

  // instantiate service
  var todolist;
  beforeEach(inject(function (_todolist_) {
    todolist = _todolist_;
  }));

  it('should do something', function () {
    expect(!!todolist).toBe(true);
  });

});
