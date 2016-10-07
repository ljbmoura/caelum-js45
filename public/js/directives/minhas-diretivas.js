angular.module("minhasDiretivas", [])

	.directive ( "meuPainel", function () {
		var ddo = {};
		ddo.restrict = "AE";
		ddo.scope = {
			titulo: "@"
		};

		ddo.templateUrl = "js/directives/meu-painel.html";

		ddo.transclude = true;
		
		return ddo;
	})

	.directive ("minhaFoto", function() {
		var ddo = {};

		ddo.restrict = "E";
		ddo.scope = {
			url: "@",
			titulo: "@" 
		}

		ddo.template = 
			'<img class="img-responsive center-block" width="50" height="50" src="{{url}}"" alt="{{titulo}}">';

		return ddo;
	})

	.directive("meuBotaoPerigo", function() {
		var ddo = {};

		ddo.restrict = "E";

		ddo.template = 
			'<button style="margin: 5px 0 0 0" class="btn btn-danger btn-block" ng-click="acao()">{{nome}} D</button>';
		
		ddo.scope = {
			nome: "@",
			acao: "&" 
		}

		return ddo;
	})

	.directive("meuFoco", function () {
		var ddo = {};

		ddo.restrict = "A";
		
		ddo.link = function (scope, element) {

			scope.$on (
				'fotoCadastrada', 
				function () {
					element[0].focus();
				}
			)
		}

		return ddo;
	})

;

