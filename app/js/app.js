'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ui.utils',
  'ui.bootstrap',
  //'myApp.services',
  'myApp.directives',
  'myApp.controllers'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/images', {templateUrl: 'partials/images.html', controller: 'imageBrowseCtrl'}).
  	when('/add_image', {templateUrl: 'partials/add_image.html', controller: 'imageUploadCtrl'}).
  	when('/images/:imageId', {templateUrl: 'partials/image_detail.html', controller: 'imageDetailCtrl'}).
  	otherwise({redirectTo: '/images'});
}]);
