'use strict';

/**
 * @ngdoc directive
 * @name tutorialApp.directive:blackList
 * @description
 * # blackList
 */
angular.module('tutorialApp')
  .directive('blacklist', function () {
    return {
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        var blacklist = attrs.blacklist.split(',');

        function isNotBlack(value) {
          return blacklist.indexOf(value) === -1;
        }

        // from DOM to Model
        // 通过unshift 添加新的过滤条件
        ngModel.$parsers.unshift(function (value) {
          var valid = isNotBlack(value);
          ngModel.$setValidity('blacklist', valid);
          return valid? value: undefined;
        });

        // from Model to DOM
        // 通过unshift 添加新的过滤条件
        ngModel.$formatters.unshift(function (value) {
          ngModel.$setValidity('blacklist', isNotBlack(value));
          return value;
        })
      }
    };
  });
