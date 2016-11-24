angular.module('starter.controllers', [])

.controller('PrincipalCtrl', function($scope, $state) {
  $scope.data={
    filtro:'',
  };
  $scope.buscarPlantas = buscarPlantas;

  function buscarPlantas(criterio) {
      $state.go('tab.plantas',{filtro:$scope.data.filtro, criterio: criterio});
  }
})

.controller('PlantaCtrl', function($scope, $stateParams, Plantas) {
    $scope.data={
      filtro: $stateParams.filtro,
    };
    if($stateParams.id){
      $scope.planta = Plantas.get($stateParams.id);
    }
    if($stateParams.criterio =='planta'){
      $scope.plantasFiltradas = Plantas.filtrarPorPlanta($stateParams.filtro);
    }
    if($stateParams.criterio =='sintoma'){
      $scope.plantasFiltradas = Plantas.filtrarPorSintoma($stateParams.filtro);
    }
});
