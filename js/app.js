//jQuery().ready(function ($) {
//    $.ajax({
//        url: 'http://examen.lvlnetworks.com/',
//        success: function (data) {
//            console.log(data);
//        },
//        error: function (err) {
//            console.log(err);
//        }
//    });
//});




//var App = angular.module('App', ['datarefresh'])
//
//App.factory('itemsFactory', function($http) {
//  return {
//    getItemsAsync: function(callback) {
//      $http.get('http://examen.lvlnetworks.com/').success(callback);
//    }
//  };
//});
//
//App.controller('ItemCtrl', function($scope, itemsFactory) {
//  itemsFactory.getItemsAsync(function(results) {
//    //console.log('ItemCtrl async returned value');
//    $scope.items = results.Items;
//      
//  });
//    
//});


angular.module('App',['datarefresh'])
.controller('ItemCtrl', [function () {
}]);

       
    

