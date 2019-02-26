
function truefactorial(num1) {
	var rez = num1 ;
	console.log(num1)
	 if ( num1 === 1 || num1 === 0 ) {
	 	rez = 1;
	 	console.log(rez)
	 } else if ( num1 < 0 ) {
		 rez = 'Ты ебанутый бля так не бывает';
	 } else if ( parseInt(num1) !== num1 ) {
	 	rez = Math.sqrt ( 2 * Math.PI * num1 ) * Math.pow( num1 / Math.E , num1 ) * Math.pow ( Math.E , 1 / 12 * num1) ;
	 }
	   else {
		 while (num1 !== 2) {
			 rez = rez * (num1 - 1);
			 num1 = num1 - 1;
		 }
	 }
	return rez ;
}

function factorial() {
	var tnum1 = parseFloat(document.getElementById('num1').value) ;
	var trez = truefactorial ( tnum1 ) ;
	document.getElementById('trez').innerHTML = 'Забирай на: ' + trez ;
}