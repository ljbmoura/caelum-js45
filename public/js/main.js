angular.module("alurapic", 
	["minhasDiretivas", "ngAnimate", "ngRoute", "ngResource", "meusServicos"])

	.config (function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when("/fotos", {
				controller: "FotosController",
				templateUrl: "partials/principal.html",
				titulo: 'Listagem'

			})

			.when("/fotos/new", {
				controller: "FotoController",
				templateUrl: "partials/foto.html",
				titulo: 'Inclusao'
			})

			.when("/fotos/new/:id", {
				controller: "FotoController",
				templateUrl: "partials/foto.html",
				titulo: 'Alteracao'
			})

			.otherwise ( {
				redirectTo: "/fotos"
			})


	})

	.run (function ($rootScope) {
		$rootScope.$on (
			"$routeChangeStart",
			function (event, next, current) {
				if (next.templateUrl) {
					//alert(next.titulo);
					$rootScope.tituloDaPagina = next.titulo;
				}
			}
		)
	})	
;