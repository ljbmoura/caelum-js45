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


		/*$scope.fotos.push({url : "img/leao.jpg", titulo : "Leão"});
		$scope.fotos.push({url : "img/leao-branco.jpg", titulo : "Leão Branco"});*/
	}
);
