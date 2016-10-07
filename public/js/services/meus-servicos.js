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
		function ($q, recursoFoto) {
			var servico = {};
			servico.cadastra = function (foto) {
				return $q (function (resolve, reject) {
					if (foto._id) {
						recursoFoto.update(
							{fotoId: foto._id}, 
							foto, 
							function () {
								resolve ({mensagem: "foto atualizada com sucesso", inclusao: false});
							},
							function(erro) {
								console.log(erro);
								reject ({mensagem: "nao foi possivel atualizar foto", inclusao: false});
							}
						)
					} else {
						recursoFoto.save (
							foto,
							function () {
								resolve ({mensagem: "foto incluida com sucesso", inclusao: true});
								
							}, 
							function (erro) {
								console.log (erro);
								reject ({mensagem: "nao foi possivel incluir a foto", inclusao: true});;						
							}
						)
					}
				})
			}
			return servico;
		}
	)
