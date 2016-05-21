// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($sceDelegateProvider, $stateProvider, $urlRouterProvider) {
	$sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

	$stateProvider
	.state('categories', {
		url: '/categories',
		templateUrl: 'templates/main-home.html',
		controller: 'CategoriesCtrl'
	})
	.state('category', {
		url: '/categories/:categoryId',
		templateUrl: 'templates/category-detail.html',
		controller: 'CategoryCtrl'
	})
	.state('class', {
		url: '/classes/:classId',
		templateUrl: 'templates/class-detail.html',
		controller: 'ClassCtrl'
	})
	.state('lesson', {
    url: '/lessons/:lessonId?videoStart',
		templateUrl: 'templates/lesson-detail.html',
		controller: 'LessonCtrl'
	})
	.state('lesson-challenges', {
		url: '/lessons/:lessonId/challenges',
		templateUrl: 'templates/challenges.html',
		controller: 'LessonChallengesCtrl'
	});


	$urlRouterProvider.otherwise('/categories');
});

