'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('FormCtrl', function ($scope, $http, formResolvedData) {
    $scope.formResolvedData = formResolvedData;
    $scope.formData = {
      name: 'kikodo',
      age: '21',
      email: 'al@12.com',
      mobile: '13150192883',
      salaryTop: '',
      salaryBottom: '',
      hobby: 'writtings'
    }
    $scope.submit = function (form) {
      if (form.$valid) {
        alert('do submit');
      } else {
        console.log('not to submit');
      }
    }
    $scope.reset = function (form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.formData = {};
    }
  });
