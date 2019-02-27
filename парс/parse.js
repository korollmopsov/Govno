function filtr() {
    var tnum1 = document.getElementById('num1').value ;
    trez = parse( Tfiltr ( tnum1 ) ) ;
    document.getElementById('trez').innerHTML = 'Отфильтровано: ' + trez ;
}

function Tfiltr( A ) {
    var i = 0, B = '', y = 0 ;
    for (i; i !== A.length; i++) {
        if ((+A[i] <= 9 && +A[i] >= 0) && A [i] != ' ') {
            B += A[i];
            if (((( +A[ i + 1 ] <= 9 && +A[ i + 1 ] >= 0) && A [ i + 1 ] != ' ') || ( A[ i + 1 ] === '.' || A[ i + 1 ] === ',' ) ) === false )
                break ;
        }
        if ( A[i] === '.' || A[i] === ',' ) {
            if ( y === 1 )
                break ;
            B += A [i];
            y = 1;
        }
    }
    y = 0;
    i = 0;
    if (B [ B.length ] === '.' || B [ B.length ] === ',')
        B += '0';
    if (B [0] === '.' || B [0] === ',')
        B = '0' + B;
    return B ;
}

function parse(B) {
    var i = 0 , p = 1 , y = 0 , j = 0 , c = 0 ;
    while ( i <= B.length ) {
        if ( B [ i ] === '.' || B [ i ] === ',' ){
            p = 0 ;
            break ;
        }
        i ++ ;
    }
    j = i ;
    for ( y ; y < B.length ; y ++ ){
        if ( y === i )
            continue ;
        c += +B [ y ] * Math.pow(10, j - 1 - p ) ;
        j -- ;
    }
    if ( c === 0 )
        return NaN ;
    return c ;
}