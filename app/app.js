// var getAllPosts = require('./actions/posts');
var angular = require('angular');
var ngRoute = require('angular-route');
var redux = require('redux');
var ngRedux = require('ng-redux');
var thunk = require('redux-thunk');
var reducer = require('./reducers/posts');
var ActionsService = require('./actions/posts');
var PostFactory = require('./services/PostFactory');
var FormController = require('./controllers/FormController');
var ListController = require('./controllers/ListController');
var SingleController = require('./controllers/SingleController');
var NavbarController = require('./controllers/NavbarController');

var secondApp = angular.module('secondApp', []);

var myApp = angular.module('myApp', ['ngRoute', 'ngRedux', 'secondApp']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/form', {
            templateUrl: 'app/views/form.html',
            controller: 'FormController',
            controllerAs: 'FormCtrl'
        })
        .when('/list', {
            templateUrl: 'app/views/list.html',
            controller: 'ListController',
            controllerAs: 'ListCtrl'
        })
        .when('/single/:id', {
            templateUrl: 'app/views/single.html',
            controller: 'SingleController',
            controllerAs: 'SingleCtrl'
        })
        .when('/single/:id/edit', {
            templateUrl: 'app/views/form.html',
            controller: 'FormController',
            controllerAs: 'FormCtrl'
        })
        .otherwise({redirectTo: '/form'})
}]);

myApp.config(['$ngReduxProvider', function($ngReduxProvider) {
    $ngReduxProvider.createStoreWith({postReducer: reducer}, [thunk.default], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
}]);


myApp.factory('PostFactory', PostFactory);
myApp.service('ActionsService', ['PostFactory', ActionsService]);
myApp.controller('FormController', ['$scope', 'ActionsService', '$ngRedux', '$routeParams' ,FormController]);
myApp.controller('ListController', ['$scope', 'ActionsService','$ngRedux' ,ListController]);
myApp.controller('SingleController', ['$scope', '$routeParams', 'ActionsService','$ngRedux' ,SingleController]);
myApp.controller('NavbarController', ['$scope','$ngRedux' ,NavbarController]);

// myApp.run(['ActionsService', '$ngRedux' ,function (ActionsService, $ngRedux) {
//     $ngRedux.dispatch(ActionsService.getAllPosts());
// }]);

secondApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/something', {
            template: '<p>This is second app</p>',
        })
}]);

secondApp.run([function() {
   console.log('secondApp');
}]);