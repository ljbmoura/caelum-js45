angular.module ('meusServicos', ['ngResource'])
	
	.factory (
		'recursoFoto', 
		function ($resource) {
			return $resource("/v1/fotos/:fotoId",
			null, // uso opcional querystring
			{
				update: {
					method: "put"
				}
			});
		}
	)

	.factory (
		'cadastroDeFotos',
		function ($q, recursoFoto, $rootScope) {
			var evento = "fotoCadastrada";
			var servico = {};
			servico.cadastra = function (foto) {
				return $q (function (resolve, reject) {
					if (foto._id) {
						recursoFoto.update(
							{fotoId: foto._id}, 
							foto, 
							function () {
								$rootScope.$broadcast(evento);
								resolve ({mensagem: "foto " + foto.titulo + " atualizada com sucesso", inclusao: false});
							},
							function(erro) {
								console.log(erro);
								reject ({mensagem: "nao foi possivel atualizar foto " + foto.titulo, inclusao: false});
							}
						)
					} else {
						recursoFoto.save (
							foto,
							function () {
								$rootScope.$broadcast(evento);
								resolve ({mensagem: "foto " + foto.titulo + " incluida com sucesso", inclusao: true});
								
							}, 
							function (erro) {
								console.log (erro);
								reject ({mensagem: "nao foi possivel incluir a foto "+ foto.titulo, inclusao: true});;						
							}
						)
					}
				})
			}
			return servico;
		}
	)
