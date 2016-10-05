angular.module ("alurapic").controller ("FotoController", 
	function ($scope, $http) {

		$scope.foto = {};
		$scope.mensagem ="";

		$scope.submeter = function () {

			$http.post("/v1/fotos", $scope.foto)
			.success (function () {
				$scope.foto = {};
				$scope.mensagem = "foto incluída com sucesso";
			})
			
			.error (function (erro) {
				console.log (erro);
				$scope.mensagem = "nao foi possivel incluir a foto";
			});
			//console.log($scope.foto);
			//$scope.foto = {};
		}

	}
);