'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ticket'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tickets');

});

var apiUrl = "https://ticketingsystembe.herokuapp.com/api"
