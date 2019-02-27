function NoD() {
    var tnum1 = parseFloat(document.getElementById('num1').value ) ;
    var tnum2 = parseFloat(document.getElementById('num2').value ) ;
    if ( tnum2 <= 0 || tnum1 <= 0 || parseInt(tnum1) != tnum1 || parseInt(tnum2) != tnum2)
        trez = 'Ты говно сосал' ;
    else trez = TNoD ( tnum1 , tnum2 ) ;
    document.getElementById('trez').innerHTML = 'НоД: ' + trez ;
}

function TNoD( A , B ) {
    var a = Math.max( A , B ) , b = Math.min ( A , B ) , q = 1 , c = 0 ;
    while ( a !== q * b ) {
        c = a ;
        while (b * ( q + 1 ) < a) {
            q++ ;
        }
        a = b ;
        b = c - b * q ;
        q = 1 ;
    }
    return b ;
}