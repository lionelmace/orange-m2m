/*global angular*/
(function () {
  // angular app initialization
  var app = angular.module('app', ['ui.router']);

  app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'partials/dashboard.html'
      });
  });
}());
