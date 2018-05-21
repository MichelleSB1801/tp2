function card(img) {
	this.img=img
}

var card1 = new card ('<img class="imag hide" src="Bulbasaur_NB.gif">')
var card2 = new card ('<img class="imag hide" src="Bulbasaur_NB.gif">')
var card3 = new card ('<img class="imag hide" src="Charmander_NB.gif">')
var card4 = new card ('<img class="imag hide" src="Charmander_NB.gif">')
var card5 = new card ('<img class="imag hide" src="Squirtle_NB.gif">')
var card6 = new card ('<img class="imag hide" src="Squirtle_NB.gif">')
var card7 = new card ('<img class="imag hide" src="Pikachu_NB_hembra.gif">')
var card8 = new card ('<img class="imag hide" src="Pikachu_NB_hembra.gif">')
var card9 = new card ('<img class="imag hide" src="Treecko_NB.gif">')
var card10 = new card ('<img class="imag hide" src="Treecko_NB.gif">')
var card11 = new card ('<img class="imag hide" src="Torchic_NB_hembra.gif">')
var card12 = new card ('<img class="imag hide" src="Torchic_NB_hembra.gif">')
var card13 = new card ('<img class="imag hide" src="Mudkip_NB.gif">')
var card14 = new card ('<img class="imag hide" src="Mudkip_NB.gif">')
var card15 = new card ('<img class="imag hide" src="Ralts_NB_variocolor.gif">')
var card16 = new card ('<img class="imag hide" src="Ralts_NB_variocolor.gif">')
var card17 = new card ('<img class="imag hide" src="Turtwig_NB.gif">')
var card18 = new card ('<img class="imag hide" src="Turtwig_NB.gif">')
var card19 = new card ('<img class="imag hide" src="Chimchar_NB.gif">')
var card20 = new card ('<img class="imag hide" src="Chimchar_NB.gif">')
var card21 = new card ('<img class="imag hide" src="Piplup_NB.gif">')
var card22 = new card ('<img class="imag hide" src="Piplup_NB.gif">')
var card23 = new card ('<img class="imag hide" src="Eevee_NB.gif">')
var card24 = new card ('<img class="imag hide" src="Eevee_NB.gif">')

var cartas = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24];


$(window).on('load', function() {

	$(document).on('click', '.boton', function(){
		var nombre = $('.nombre').val()
		var boton = $('.boton')
		$('#name').html(nombre)
		$('.prevcontainer').addClass('hide')
		$('.juegocontainer').removeClass('hide')
	
		function shuffle(cartas) {
		cartas = cartas.sort(function() {return Math.random() - 0.5});
		return cartas;
		}
		cartas = shuffle(cartas)
		console.log(cartas)

		for (var i = 0; i < cartas.length; i++) {
			var imagen = cartas[i].img
			var cartaapp = '<div class="card">'+ imagen +'</div>'
			$('.cardcontainer').append(cartaapp)
		}
	
	})

	var clics = 1;
	var pares = [];
	var divs = [];
	var paresencontrados = 0
	var jugadas = 30

	$(document).on('click', '.card', function(){
	  var index = $('.card').index(this);
	  var imagen = $(this).children('.imag');
		var nada = $('.card').eq(index);

		console.log(clics + "1");

		if (clics == 1) {

			pares.push(imagen.attr('src'))
			divs.push(nada)
			console.log("pares", pares);
			imagen.removeClass('hide')
			nada.addClass('pointer')
			clics = 2
			console.log(clics + "2");
			console.log(imagen)

		}else if (clics == 2) {
			pares.push(imagen.attr('src'))
			divs.push(nada)
			console.log("pares", pares);
			imagen.removeClass('hide')
			$('.card').addClass('pointer')


			if (pares[0] == pares[1]) {

				console.log(divs);
			
			//setTimeout(function(){

					for (var i = 0; i < divs.length; i++) {
						divs[i].addClass('borrar')
					}

					clics = 1
			// }, 200)
				$('.card').removeClass('pointer')
				pares.length = 0
				divs.length= 0
				paresencontrados++
				console.log(paresencontrados);

				if (paresencontrados == 12) {
					$('#win').removeClass('hide')
					$('.card').addClass('hide')
				}

			}else {

				setTimeout(function(){
					$('.imag').addClass('hide')
					$('.card').removeClass('pointer')
					clics = 1
				}, 500)

				pares.length = 0
				divs.length = 0	
				}
				jugadas--

			}

		$('#turnos').html('Intentos restantes:<br><span>' + jugadas+ '</span>')

		if (jugadas==0 && paresencontrados!=12) {
			$('#lose').removeClass('hide')
			$('.card').addClass('hide')
		}

	})

	$(document).on('click', '.alert', function() {
    location.reload();
	});
})

