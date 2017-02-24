var admin = angular.module('admin-app',[]);
admin.controller('productoCtrl',function($scope){
 $scope.productos = [];
 for(let i=1;i<=100;i++){
   $scope.productos.push('producto'+i);
 }
});

admin.directive('productoDescripcion',function(){
  return{
    templateUrl:'./producto-descripcion.html'
  }
});
