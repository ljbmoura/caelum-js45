angular.module ("alurapic").controller ("FotoController", 
	function ($scope, $routeParams, $location, $resource) {


		$scope.foto = {};
		$scope.mensagem = "";

		// verbo GET para foto
		/*if ($routeParams.id) {
			$http.get("/v1/fotos/" + $routeParams.id)
				.success( function (foto) {
					$scope.foto = foto;
				})
		};*/
		var recursoFoto = $resource("/v1/fotos/:fotoId",
			null, // uso opcional querystring
			{
				update: {
					method: "put"
				}
			});

		if ($routeParams.id) {
			recursoFoto.get (
				{fotoId: $routeParams.id},
				function (foto) {
					$scope.foto = foto;
					console.log ("get foto via resource");
				},
				function (erro) {
					console.log (erro);
				}
			)
		}

 
		$scope.submeter = function () {
			if ($scope.formulario.$valid) {
				if (! $routeParams.id) {
					recursoFoto.save (
						$scope.foto,
						function () {
							console.log("foto inserida: " + JSON.stringify($scope.foto));
							$scope.foto = {};
							$scope.mensagem = "foto incluída com sucesso";
						}, 
						function (erro) {
							console.log (erro);
							$scope.mensagem = "nao foi possivel incluir a foto";						
						}
					)
				} else {
					recursoFoto.update (
						{fotoId: $scope.foto._id},
						$scope.foto,
						function () {
							console.log("foto alterada: " + JSON.stringify($scope.foto));
							alert("foto " + $scope.foto.titulo + " alterada com sucesso");
							$location.path("/");
							//$scope.mensagem = "foto " + $scope.foto.titulo + " alterada com sucesso";
						},
						function (erro) {
							console.log (erro);
							$scope.mensagem = "nao foi possivel alterar a foto " + $scope.foto.titulo;
						}
					)
				}

				/*
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
				}*/
			}
			//console.log($scope.foto);
			//$scope.foto = {};
		}
	}
);