angular.module("app")
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/home.html'
      })
      .when('/todo', { //added later
        templateUrl: 'app/partials/todo.html',
        controller: 'TodoCtrl'
        // controllerAs: "dirList.TodoCtrl" (if converting from Scope)
      })
      .when('/hello', {
        templateUrl: 'app/partials/hello.html',
        controller: 'HelloCtrl',
        // controllerAs: "dirList.HelloCtrl" (if converting from Scope)
      })
      .when('/hello/:name', {
        templateUrl: 'app/partials/hello-person.html',
        controller: 'HelloPersonCtrl',
        // controllerAs: "dirList.HelloPersonCtrl" (if converting from Scope)
      })
      .otherwise('/')
  })
