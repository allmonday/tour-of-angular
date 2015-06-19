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
      .state('root', {
        url:'/',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl',
        templateUrl: 'views/about.html',
      });
    $urlRouterProvider
      .otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("root");
      })
  });
