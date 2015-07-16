'use strict';

/**
 * @ngdoc function
 * @name tutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialApp
 */
angular.module('tutorialApp')
  .controller('MainCtrl', function ($scope, todolistData, $state) {
    $scope.todo = todolistData;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($state.current.data.main1);
  });
