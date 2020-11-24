var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/order.html',
            controller: 'homeController'
        })
        .otherwise({
            template: '404'
        });
});

app.controller('homeController' , function($scope) {
    $scope.YogurtCount = 0;
    $scope.PuddingCount = 0;
    $scope.WaterCount = 0;
    $scope.chicken1 = 0;
    $scope.chicken2 = 0;
    $scope.chicken3 = 0;
    $scope.chicken4 = 0;

    $scope.removeYogurt = function () {
        $scope.YogurtCount = $scope.YogurtCount - 1;
    }

    $scope.addYogurt = function () {
        $scope.YogurtCount = $scope.YogurtCount + 1;
    }

    $scope.removePudding = function () {
        $scope.PuddingCount = $scope.PuddingCount - 1;
    }

    $scope.addPudding = function () {
        $scope.PuddingCount = $scope.PuddingCount + 1;
    }

    $scope.removeWater = function () {
        $scope.WaterCount = $scope.WaterCount - 1;
    }

    $scope.addWater = function () {
        $scope.WaterCount = $scope.WaterCount + 1;
    }

    $scope.removeChicken1 = function () {
        $scope.chicken1 = $scope.chicken1 - 1;
    }

    $scope.addChicken1 = function () {
        $scope.chicken1 = $scope.chicken1 + 1;
    }

    $scope.removeChicken2 = function () {
        $scope.chicken2 = $scope.chicken2 - 1;
    }

    $scope.addChicken2 = function () {
        $scope.chicken2 = $scope.chicken2 + 1;
    }

    $scope.removeChicken3 = function () {
        $scope.chicken3 = $scope.chicken3 - 1;
    }

    $scope.addChicken3 = function () {
        $scope.chicken3 = $scope.chicken3 + 1;
    }

    $scope.removeChicken4 = function () {
        $scope.chicken4 = $scope.chicken4 - 1;
    }

    $scope.addChicken4 = function () {
        $scope.chicken4 = $scope.chicken4 + 1;
    }
});
