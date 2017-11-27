var app = angular.module('ionium.services', []);

app.service('UserService', function ($http, config) {
    return {
        getUsers: function (saveObj) {
            return $http.post(config.serverIp + 'create', saveObj);
        },
        findAllUsers: function () {
            return $http.get(config.serverIp + 'find_all');
        },
        createUsers: function (saveObj) {
            return $http.post(config.serverIp + 'create', saveObj);
        },
        updateUsers: function (updateObj) {
            return $http.post(config.serverIp + 'update', updateObj);
        },
        deleteUsers: function (deleteObj) {
            return $http.post(config.serverIp + 'delete', deleteObj);
        }
    };
});
