'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('FormCtrl', function ($scope) {
    console.log('called');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
