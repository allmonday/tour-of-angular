'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
