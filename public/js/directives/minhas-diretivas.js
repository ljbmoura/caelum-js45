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
			"<img  class='img-responsive center-block' src='{{url}}' alt='{{titulo}}'>";

		return ddo;
	})
	
	;

