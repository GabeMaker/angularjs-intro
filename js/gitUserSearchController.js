githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {
    if ($scope.searchTerm.length > 0) {
      $scope.searchResult = searchResource.get({
        q: $scope.searchTerm
      });
      console.log($scope.searchTerm)
    } else {
      // remove stuff from index
    }
  };

  $scope.clearSearch = function() {
    $scope.searchTerm = ""
  };

// var key = "54abf14be2425c478fb845387cc644acb3d53967";

54abf14be2425c478fb845387cc644acb3d53967
});

