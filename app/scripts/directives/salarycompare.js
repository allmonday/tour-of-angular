'use strict';

/**
 * @ngdoc directive
 * @name tutorialApp.directive:salaryCompare
 * @description
 * # salaryCompare
 */
angular.module('tutorialApp')
  .directive('salarylessthan', function () {
    return {
      require: 'ngModel',
      scope: {
        salary: "=salarylessthan"
      },
      link: function postLink(scope, element, attrs, ngModel) {
        function isLess(value) {
          console.log(scope.salary, value);
          return parseInt(scope.salary) > parseInt(value);
        }
        // from DOM to Model
        // 通过unshift 添加新的过滤条件
        ngModel.$parsers.unshift(function (value) {
          var valid = isLess(value);
          console.log(valid)
          ngModel.$setValidity('salaryless', valid);
          return valid? value: undefined;
        });

        // from Model to DOM
        // 通过unshift 添加新的过滤条件
        ngModel.$formatters.unshift(function (value) {
          ngModel.$setValidity('salaryless', isLess(value));
          return value;
        })

      }
    };
  });
