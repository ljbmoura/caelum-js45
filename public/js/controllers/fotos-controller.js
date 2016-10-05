angular.module ("alurapic").controller ("FotosController", 
	function ($scope, $http) {

		/*$scope.foto = {
			url : "img/leao.jpg",
			titulo : "Leão"
		}*/

		$scope.fotos = [];

		$http.get("v1/fotos")
		.success (function (fotos) {
			$scope.filtro="";
			$scope.fotos = fotos;
		})
		.error (function (erro) {
			console.log (erro);
		});

		$scope.remover = function (fotoARemover) {
			console.log("foto removida: " + JSON.stringify(fotoARemover));

			$http.delete("/v1/fotos/"+fotoARemover._id)
			.success (function () {
				var indice = $scope.fotos.indexOf(fotoARemover);
				$scope.fotos.splice(indice, 1);
				$scope.mensagem = "foto excluida com sucesso";
			})
			
			.error (function (erro) {
				console.log (erro);
				$scope.mensagem = "nao foi possivel excluir a foto";
			});
		}


		/*$scope.fotos.push({url : "img/leao.jpg", titulo : "Leão"});
		$scope.fotos.push({url : "img/leao-branco.jpg", titulo : "Leão Branco"});*/
	}
);
