function card(img, giro) {
	this.img=img
}

var card1 = new card ('<img class="imag hide" src="adaLovelace.jpg">')
var card2 = new card ('<img class="imag hide" src="adaLovelace.jpg">')
var card3 = new card ('<img class="imag hide" src="adaLovelace.jpg">')
var card4 = new card ('<img class="imag hide" src="adaLovelace.jpg">')
var card5 = new card ('<img class="imag hide" src="chienS.png">')
var card6 = new card ('<img class="imag hide" src="chienS.png">')
var card7 = new card ('<img class="imag hide" src="chienS.png">')
var card8 = new card ('<img class="imag hide" src="chienS.png">')
var card9 = new card ('<img class="imag hide" src="graceHopper.jpg">')
var card10 = new card ('<img class="imag hide" src="graceHopper.jpg">')
var card11 = new card ('<img class="imag hide" src="graceHopper.jpg">')
var card12 = new card ('<img class="imag hide" src="graceHopper.jpg">')

var cartas = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];



$(window).on('load', function() {

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

	var clics = 1;
	var pares = [];
	var divs = [];
	var paresencontrados = 0
	var jugadas = 24

	$(document).on('click', '.card', function(){
	  var index = $('.card').index(this);
	  var imagen = $(this).children('.imag');
		var nada = $('.card').eq(index);

		console.log(clics + "1");

		if (clics == 1) {


			//	if (pares.length < 2) {
					pares.push(imagen.attr('src'))
					divs.push(nada)
					console.log("pares", pares);
					imagen.removeClass('hide')
					clics = 2
					console.log(clics + "2");
					jugadas--

			}else if (clics == 2) {
					pares.push(imagen.attr('src'))
					divs.push(nada)
					console.log("pares", pares);
					imagen.removeClass('hide')



					if (pares[0] == pares[1]) {

						console.log(divs);
						//
						// setTimeout(function(){

							for (var i = 0; i < divs.length; i++) {
								divs[i].addClass('borrar')
							}

							clics = 1
						// }, 200)

							pares.length = 0
							divs.length= 0
							paresencontrados++
							console.log(paresencontrados);
							if (paresencontrados == 6) {

								console.log("GANASTE");
							}
					}else {
						setTimeout(function(){
							$('.imag').addClass('hide')
							clics = 1
						}, 600)
						pares.length = 0
						divs.length = 0
					}
				jugadas--

			}
		$('#turnos').html(jugadas)
		if (jugadas==0) {
		 console.log("PERDISTE");
		}
	})



})
