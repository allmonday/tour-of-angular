'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:RestlistctrlCtrl
 * @description
 * # RestlistctrlCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('RestListCtrl', function ($scope, todolist, resA /*, resB*/) {
    $scope.todoList = todolist.query();
    $scope.resolvedValue = {
      resA: resA,
      // resB: resB
    }
  });
