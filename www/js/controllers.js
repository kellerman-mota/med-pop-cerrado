angular.module('starter.controllers', [])

.controller('PrincipalCtrl', function($scope, $state) {
  $scope.data={
    filtro:'',
  };
  $scope.buscarPlantas = buscarPlantas;

  function buscarPlantas() {
      $state.go('tab.plantas',{filtro:$scope.data.filtro});
  };
})

.controller('PlantaCtrl', function($scope, $stateParams, Plantas) {
    $scope.plantasFiltradas = Plantas.filtrar($stateParams.filtro);
})
