function filtr() {
    var tnum1 = document.getElementById('num1').value ;
    trez = Tfiltr ( tnum1 ) ;
    document.getElementById('trez').innerHTML = 'Отфильтровано: ' + trez ;
}

function Tfiltr( A ) {
    var i = 0 , B = '', j = 0 , y = 0 , c = 0 , p = 1 ;
    for ( i ; i !== A.length ; i++ ) {
        if ( ( +A[i] <= 9 && +A[i] >= 0 ) && A [i] != ' ' ) {
            B += A[i] ;
        }
        if ( (A[i] === '.' || A[i] === ',') && y === 0 ) {
            B += A [i] ;
            y = 1 ;
        }
    }
    y = 0 ;
    i = 0 ;
    if ( B [ j - 1 ] === '.' || B [ j - 1 ] === ',' )
        B += '0' ;
    while ( i <= B.length ) {
        if ( B [ i ] === '.' || B [ i ] === ',' ){
            p = 0 ;
            break ;
        }
        i ++ ;
    }
    j=i
    for ( y ; y < B.length ; y ++ ){
        if(y===i)
            continue ;
        c += +B [y] * Math.pow(10, j-1-p);
        j --
    }return c
}