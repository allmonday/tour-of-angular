'use strict';

/**
 * @ngdoc directive
 * @name tutorialApp.directive:customSelector
 * @description
 * # customSelector
 */
angular.module('tutorialApp')
  .directive('customSelector', function () {
    return {
      templateUrl: 'views/custom-selector-directive.html',
      require: 'ngModel',
      restrict: 'AE',
      scope: {
        selector: "=ngModel"
      },
      link: function postLink(scope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$validators.empty = function (modelValue, viewValue) {
          if (ngModelCtrl.$isEmpty(modelValue)) {
            return false;
          } else {
            return true;
          }
        }
      }
    };
  });
