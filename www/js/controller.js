angular.module('starter.controllers', [])

.controller('CategoriesCtrl', function($scope, CategoriesService) {
  CategoriesService.findCategories()
    .then(function (categories) {
      $scope.categories = categories
    })
})

.controller('CategoryCtrl', function($scope, $stateParams, CategoriesService, ClassesService) {
  var id = $stateParams.categoryId

  CategoriesService.findCategory(id)
    .then(function (category) {
      $scope.category = category
    })

  ClassesService.findClasses(id)
    .then(function (classes) {
      $scope.classes = classes
    })
})

.controller('ClassCtrl', function($scope, $stateParams, ClassesService, LessonsService) {
  var id = $stateParams.classId

  ClassesService.findClass(id)
    .then(function (cls) {
      $scope.class = cls
    })

  LessonsService.findLessons(id)
    .then(function (lessons) {
      $scope.lessons = lessons
    })
})

.controller('LessonCtrl', function($scope, $stateParams, LessonsService) {
  var id = $stateParams.lessonId
  var videoStart = $stateParams.videoStart || 0

  console.log(videoStart)

  LessonsService.findLesson(id)
    .then(function (lesson) {
      $scope.lesson = lesson
      $scope.videoUrl = lesson.video_url + '?start=' + videoStart

    })
})

.controller('LessonChallengesCtrl', function($scope, $stateParams, LessonsService, ChallengesService) {
  var id = $stateParams.lessonId

  $scope.state = {
    showAnswers: false
  }

  $scope.verifyAnswers = function () {
    $scope.state.showAnswers = true
  }

  LessonsService.findLesson(id)
    .then(function (lesson) {
      $scope.lesson = lesson
    })

  ChallengesService.findChallenges(id)
    .then(function (challenges) {
      $scope.challenges = challenges

      challenges.forEach(function(challenge) {
        challenge.video_help_time = Math.floor(Math.random() * 60)
      })
    })
})

