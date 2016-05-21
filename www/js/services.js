var ENDPOINT = 'https://alphalum123.stamplayapp.com/api/cobject/v1';

angular.module('starter.services', [])

.factory('ApiClient', function($http) {
	return {
		findAll: function(object, query) {
			return execute('/' + object, {
				where: JSON.stringify(query || {})
			})
			.then(function(r) {
				return r.data.map(function(x) {
					return modelify(x);
				});
			});
		},
		find: function(object, id) {
			return execute('/' + object + '/' + id)
			.then(function(r) {
				return modelify(r);
			});
		}
	};

	function execute(path, query) {
		return $http({
			method: 'GET',
			url: ENDPOINT + path,
			params: query
		})
		.then(function(response) {
			return response.data;
		});
	}

	function modelify(data) {
		data.id = data._id;

		console.log(data.name);

		return data;
	}
})

.factory('CategoriesService', function(ApiClient) {
  return {
    findCategories: findCategories,
    findCategory: findCategory
  }

  function findCategories() {
    return ApiClient.findAll('category')
  }

  function findCategory(id) {
    return ApiClient.find('category', id)
  }
})

.factory('ClassesService', function(ApiClient) {
  return {
    findClasses: findClasses,
    findClass: findClass
  }

  function findClasses(categoryId) {
    return ApiClient.findAll('class', {
      category_id: categoryId
    })
  }

  function findClass(id) {
    return ApiClient.find('class', id)
  }
})

.factory('LessonsService', function(ApiClient) {
  return {
    findLessons: findLessons,
    findLesson: findLesson
  }

  function findLessons(classId) {
    return ApiClient.findAll('lesson', {
      class_id: classId
    })
  }

  function findLesson(id) {
    return ApiClient.find('lesson', id)
  }
})

.factory('ChallengesService', function(ApiClient) {
  return {
    findChallenges: findChallenges
  }

  function findChallenges(lessonId) {
    return ApiClient.findAll('challenge', {
      lesson_id: lessonId
    })
  }
})



