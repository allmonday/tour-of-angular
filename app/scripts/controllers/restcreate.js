'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:RestcreateCtrl
 * @description
 * # RestcreateCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('RestCreateCtrl', function ($scope, todolist, $state) {
    $scope.todo = new todolist();

    $scope.submit = function (form) {
      if (form.$invalid) {
        return;
      } else {
        $scope.todo.$save(
          function (value) {
            console.log('success');
            $state.go('rest.list');
          }, function (err) {
            console.log(err.data.error);
          }
        );
      }
    }
  });
