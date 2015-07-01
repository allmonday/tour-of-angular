'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:RestlistctrlCtrl
 * @description
 * # RestlistctrlCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('RestListCtrl', function ($scope, todolist) {
    $scope.todoList = todolist.query();
  });
