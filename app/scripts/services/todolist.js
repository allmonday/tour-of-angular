'use strict';

/**
 * @ngdoc service
 * @name tutorialApp.todolist
 * @description
 * # todolist
 * Service in the tutorialApp.
 */
angular.module('tutorialApp')
  .service('todolist', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return  $resource("http://localhost:5000/todo/api/v1.0/tasks/:id",
                      {id: "@id"},
                      {
                        "query": {
                        isArray: true,
                        transformResponse: function (data) {
                          return angular.fromJson(data).tasks;
                          }
                        },
                        "get": {
                          transformResponse: function (data) {
                          return angular.fromJson(data).task;
                          }
                        },
                        "update": {
                          method: "PUT",
                          transformResponse: function (data) {
                            var parsed = angular.fromJson(data);
                            if (parsed.error) {
                              return parsed;
                            } else {
                              return angular.fromJson(data).task;
                            }
                          }
                        }
                      })
  });
