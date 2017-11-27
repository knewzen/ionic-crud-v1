window.global = {
    Backand_AppName: 'xxxxxxxxxx',
    Backand_Token: 'xxxxxxxxxx', // FROM Backand->Security & Auth->Configuration

    Facebook_APP_ID: 'xxxxxxxxxx', // Get this from https://developers.facebook.com
    Google_OAUTH_ID: 'xxxxxxxxxx', // Get this from https://console.developers.google.com

    GCM_SENDER_ID: 'xxxxxxxxxx', // Get this from https://console.developers.google.com
    GCM_SERVER_KEY: 'xxxxxxxxxx', // Get this from https://console.developers.google.com

    Admob_Unit_ID: 'xxxxxxxxxx'
}

angular.module('ionium', ['ionic', 'ngCordova', 'ngCordovaOauth', 'ionium.controllers', 'ionium.services', 'ionium.filters'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {

                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .constant('config', {
            serverIp: 'http://127.0.0.1:1440/'
        })

        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.backButton.text('');
            $ionicConfigProvider.backButton.previousTitleText(false);
            $ionicConfigProvider.backButton.icon('ion-android-arrow-back');

            $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

                    // HOME

                    .state('app.dash', {
                        url: '/dash',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/dashboard.html'
                            }
                        }
                    })

                    .state('app.users', {
                        url: '/users',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/users.html',
                                controller: 'UsersCtrl'
                            }
                        }
                    });

            $urlRouterProvider.otherwise('/app/users');
        })


// It is used to convert datetime into time ago format

moment.locale('en', {
    relativeTime: {
        future: " %s",
        past: "%s",
        s: "1s",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1m",
        MM: "%dm",
        y: "1y",
        yy: "%dy"
    }
});
