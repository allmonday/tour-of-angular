'use strict';

/**
 * @ngdoc directive
 * @name tutorialApp.directive:salarylarge
 * @description
 * # salarylarge
 */
angular.module('tutorialApp')
  .directive('salarylargethan', function () {
    return {
      require: 'ngModel',
      scope: {
        salary: "=salarylargethan" // should be salary-bottom
      },
      link: function postLink(scope, element, attrs, ngModel) {

        function isLarge(value) {
          if(typeof scope.salary === "undefined" || scope.salary ==="" ) {
            return true;
          }
          return parseInt(scope.salary) <= parseInt(value);
        }
        // from DOM to Model
        // 通过unshift 添加新的过滤条件
        ngModel.$parsers.unshift(function (value) {
          var valid = isLarge(value);
          ngModel.$setValidity('salarylarge', valid);
          return valid? value: undefined;
        });

        // from Model to DOM
        // 通过unshift 添加新的过滤条件
        ngModel.$formatters.unshift(function (value) {
          ngModel.$setValidity('salarylarge', isLarge(value));
          return value;
        })
      }
    };
  });
