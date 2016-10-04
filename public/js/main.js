angular.module("alurapic", ["minhasDiretivas", "ngAnimate", "ngRoute"])

	.config (function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when("/fotos", {
				controller: "FotosController",
				templateUrl: "partials/principal.html"

			})

			.when("/fotos/new", {
				templateUrl: "partials/foto.html"
			})
	})
;