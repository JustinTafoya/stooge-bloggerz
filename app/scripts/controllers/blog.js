'use strict';

angular.module('stoogeBloggersApp')
  .controller('BlogCtrl', function ($scope, Blog, Authors) {

  $scope.blogPosts = Blog.blogPosts()
  $scope.blogAuthors = Authors.getAuthors()

  });
