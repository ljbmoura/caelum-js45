angular.module ("alurapic").controller ("FotoController", 
	function ($scope, $http, $routeParams, $location) {

		$scope.foto = {};
		$scope.mensagem = "";
		if ($routeParams.id) {
			$http.get("/v1/fotos/" + $routeParams.id)
				.success( function (foto) {
					$scope.foto = foto;
				})
		};

		$scope.submeter = function () {
			if ($scope.formulario.$valid) {
				if (! $routeParams.id) {
					$http.post("/v1/fotos", $scope.foto)
					.success (function () {
						console.log("foto inserida: " + JSON.stringify($scope.foto));
						$scope.foto = {};
						$scope.mensagem = "foto incluída com sucesso";
					})
					.error (function (erro) {
						console.log (erro);
						$scope.mensagem = "nao foi possivel incluir a foto";
					});
				} else {
					
					$http.put("/v1/fotos/"+$scope.foto._id, $scope.foto)
					.success (function () {
						console.log("foto alterada: " + JSON.stringify($scope.foto));
						$scope.mensagem = "foto aterada com sucesso";
						alert("alterada");
						$location.path("/");
					})
					.error (function (erro) {
						console.log (erro);
						$scope.mensagem = "nao foi possivel alterar a foto";
					});
				}
			}
			
			//console.log($scope.foto);
			//$scope.foto = {};
		}

	}
);