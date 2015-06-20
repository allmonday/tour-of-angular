'use strict';

/**
 * @ngdoc overview
 * @name tutorialApp
 * @description
 * # tutorialApp
 *
 * Main module of the application.
 */
angular
  .module('tutorialApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url:'/tutorial',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
      })
      .state('form', {
        url: '/form',
        controller: 'FormCtrl',
        templateUrl: 'views/form.html',
      })
      .state('grid', {
        url: '/grid',
        controller: 'GridCtrl',
        templateUrl: 'views/grid.html',
      });
    $urlRouterProvider
      .otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("main");
      })
  })

  .run(function ($rootScope, $state) {
    $rootScope.$on("$stateChangeSuccess", function (event, toS, toP, fromS, fromP, err) {
      $rootScope._currentState = toS.name;
    })
  })
