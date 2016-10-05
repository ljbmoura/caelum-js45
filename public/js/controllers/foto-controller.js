angular.module ("alurapic").controller ("FotoController", 
	function ($scope, $http) {

		$scope.foto = {};

		$scope.submeter = function () {
			console.log($scope.foto);
			$scope.foto = {};
		}
		//$scope.foto = {titulo:"resr"};

/*
		$http.get("v1/fotos")
			.success (function (fotos) {
				$scope.filtro="";
				$scope.fotos = fotos;
			})
			.error (function (erro) {
				console.log (erro);
			});
*/
	}
);