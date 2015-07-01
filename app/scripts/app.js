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
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = true;
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

      .state('rest', {
        url: '/rest',
        abstract: true,
        controller: 'RestCtrl',
        templateUrl: 'views/rest.html',
      })
        .state('rest.list', {
          url: '/list',
          controller: 'RestListCtrl',
          templateUrl: 'views/rest-list.html'
        })
        .state('rest.create', {
          url: '/create',
          controller: 'RestCreateCtrl',
          templateUrl: 'views/rest-create.html'
        })
        .state('rest.edit', {
          url: '/edit/:id',
          controller: 'RestEditCtrl',
          templateUrl: 'views/rest-edit.html'
        })
    $urlRouterProvider
      .when('/rest', '/rest/list')
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
