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
    'dndLists',
    'ngTouch',
  ])
  .config(function ($stateProvider, $urlRouterProvider, $resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = true;
    $stateProvider
      .state('main', {
        url:'/tutorial',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',

        data: {  // attach to $state.current object
          main1: 'hello',
          main2: 'world'
        },

        resolve: {
          todolistData: function (todolist) {  // preload data before router change
            return todolist.query().$promise.then(function (data) {
              return data[0];  // $promise is for thenable
            });
          }
        },

        onEnter: function () {
          console.log('enter main');
        },
        onExit: function () {
          console.log('exit main');
        }

      })

      .state('form', {
        url: '/form',
        controller: 'FormCtrl',
        templateUrl: 'views/form.html',
        resolve: {
          formResolvedData: function () {
            return {title: 'my form title from resolved'}
          }
        }
      })

      .state('rest', {
        url: '/rest',
        abstract: true,
        controller: 'RestCtrl',
        templateUrl: 'views/rest.html',
        resolve: {  // test nested resolve with inherit's situation
          resA: function () {
            return {'value': 'A'};
          }
        }
      })
        .state('rest.list', {
          url: '/list',
          controller: 'RestListCtrl',
          templateUrl: 'views/rest-list.html',
          resolve: {
            resA: function () {  // if the same name with parent's name, it will override it
              return {'value': 'B'};
            }
          }
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

      .state('dragAndDrop', {
        url: '/drag-and-drop',
        controller: 'DragAndDropCtrl',
        templateUrl: 'views/drag.html'
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
      $rootScope._currentState = toS.name;  // mnt state name on rootScope
    });

    $rootScope.$on('$stateChangeStart', function (event, toS, toP, fromS, fromP, err) {
      console.log('leave from:', fromS.name);
      if (fromS.name === 'form') {
        // event.preventDefault();
        // prompt modal window to ensure it
        console.log('dont leave me ');
      }
    })

    $rootScope.$on("$stateChangeError", function (event, toS, toP, fromS, fromP, err) {
      console.log('status change error');
    });

  })
