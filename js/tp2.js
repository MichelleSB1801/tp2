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
var pares = []


$(window).on('load', function() {
	
	function shuffle(cartas) {
	cartas = cartas.sort(function() {return Math.random() - 0.5});
	return cartas
	}
	cartas = shuffle(cartas)

	for (var i = 0; i < cartas.length; i++) {
		var imagen = cartas[i].img
		var cartaapp = '<div class="card">'+ imagen +'</div>'
		$('.cardcontainer').append(cartaapp)
	}

	$(document).on('click', '.card', function(){
		const index = $('.card').index(this)
	  $('img').eq(index).removeClass("hide");
	  $('img').eq(index).addClass("panzaarriba");
		var par = $('.panzaarriba').eq(index).attr('src')
		pares.push(par)
		console.log($('.panzaarriba').eq(index).attr('src'))
		console.log($('.panzaarriba').eq(index))
	})
})





