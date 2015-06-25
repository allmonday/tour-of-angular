'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('FormCtrl', function ($scope, $http) {
    $scope.formData = {
      name: '',
      age: '',
      mobile: '',
      salaryTop: '',
      salaryBottom: '',
      hobby: 'writting'
    }
  });
