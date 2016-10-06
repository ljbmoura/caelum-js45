angular.module("alurapic", ["minhasDiretivas", "ngAnimate", "ngRoute", "ngResource"])

	.config (function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when("/fotos", {
				controller: "FotosController",
				templateUrl: "partials/principal.html"

			})

			.when("/fotos/new", {
				controller: "FotoController",
				templateUrl: "partials/foto.html"
			})

			.when("/fotos/new/:id", {
				controller: "FotoController",
				templateUrl: "partials/foto.html"
			})

			.otherwise ( {
				redirectTo: "/fotos"
			})
	})
;