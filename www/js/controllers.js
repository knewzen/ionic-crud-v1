
var app = angular.module('ionium.controllers', []);

app.controller('AppCtrl', function ($scope, $rootScope, $ionicModal, $http, $timeout, $ionicSideMenuDelegate, $state, $cordovaOauth) {

    $scope.triggerModal = function () {
        $rootScope.$broadcast('SHOW_MODAL');
    };

    $scope.productSlides = [
        {id: 1, img: 'img/ecommerce/camera-new.jpg'},
        {id: 2, img: 'img/ecommerce/camera-old.jpg'},
        {id: 3, img: 'img/ecommerce/camera.jpg'}
    ];

//	$scope.mainmenu = DashList.getAllMenu();

    // Active INK Effect
    ionic.material.ink.displayEffect();
})

app.controller('UsersCtrl', function ($rootScope, $scope, $ionicModal, UserService, $ionicLoading) {
//	$scope.data = DashList.getMenuById($stateParams.id);

//    console.log('masuk user');

    setTimeout(function () {
        ionic.material.motion.ripple();
    }, 500);

    // Active INK Effect
    ionic.material.ink.displayEffect();

    $scope.user = {};

    $rootScope.$on('SHOW_MODAL', function (evt, arg) {
//        console.log('asdasdasdas')
        $scope.modal.show();
    });

    $scope.back = function () {
        $scope.modal.hide();
    };

    $scope.refreshUsers = function () {
        $ionicLoading.show();
        UserService.findAllUsers().then(function (response) {
            $ionicLoading.hide();

            var data = response.data;

            switch (data.code) {
                case '00':
                    $scope.users = data.content;
                    $scope.$broadcast('scroll.refreshComplete');
                    break;
                case '99':
                    break;
            }

        });
    };
    $scope.refreshUsers();

    $scope.loadUsers = function () {
        $ionicLoading.show();
        UserService.findAllUsers().then(function (response) {
            $ionicLoading.hide();

            var data = response.data;

            switch (data.code) {
                case '00':
                    $scope.users = data.content;
                    break;
                case '99':
                    break;
            }

        });
    };
    $scope.loadUsers();

    $scope.saveUsers = function (form) {
//        console.log('user: ', $scope.user);
        if (!form.$valid) {
            alert("Form is not valid");
        } else {
            $ionicLoading.show();
            UserService.createUsers($scope.user).then(function (response) {
                $ionicLoading.hide();
                var data = response.data;
                switch (data.code) {
                    case '00':
                        alert(data.content);
                        $scope.modal.hide();
                        $scope.loadUsers();
                        break;
                    case '99':
                        break;
                }
            });
        }
    };

    $scope.showModal = function () {
        $scope.modal.show();
    };

    $scope.hideModal = function () {
        $scope.modal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modal/add_users.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
});


app.controller('DashListCtrl', function ($scope, $stateParams, $ionicModal, $timeout) {
//	$scope.data = DashList.getMenuById($stateParams.id);

    setTimeout(function () {
        ionic.material.motion.ripple();
    }, 500);

    // Active INK Effect
    ionic.material.ink.displayEffect();
});
