jQuery().ready(function ($) {
    $.ajax({
        url: 'http://examen.lvlnetworks.com/',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
});

var App = angular.module('App', []);
 
App.controller('ItemCtrl', function($scope, $http) {
    $http.get('http://examen.lvlnetworks.com/')
    .then(function(res){
    $scope.items = res.data.Items;
});
});

