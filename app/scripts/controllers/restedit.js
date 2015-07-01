'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:ResteditCtrl
 * @description
 * # ResteditCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('RestEditCtrl', function ($scope, $stateParams, todolist) {
    $scope.todo = todolist.get({id: $stateParams.id});

    $scope.update = function (form) {
      if (form.$invalid) {
        return;
      } else {
        $scope.todo.$update(
          function (value) {
            console.log('success');
          }, function (err) {
            console.log(err.data.error);
          }
        );
      }
    }

  });
