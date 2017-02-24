angular.module('app',[])
.controller('productosCtrl',['$scope',function($scope){
  $scope.productos=['iphone 4','iphone 4','iphone 4','iphone 4','iphone 4','iphone 4'];
}])
.directive('producto',function(){
  return{
    templateUrl:'/producto.html'
  }
})
