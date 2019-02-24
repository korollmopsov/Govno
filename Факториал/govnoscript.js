 function fac(){
	var c = document.getElementById('ch').value,C=c
	if(c==1||c==0) {
		C = 1
	}
	else
	while(c!=2){
		C=C*(c-1)
		c=c-1
	}
	document.getElementById('rez').innerHTML = 'Забирай на: ' + C
}
	