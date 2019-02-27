function filtr() {
    var tnum1 = document.getElementById('num1').value ;
    trez = Tfiltr ( tnum1 ) ;
    document.getElementById('trez').innerHTML = 'Отфильтровано: ' + trez ;
}

function Tfiltr( A ) {

    var i = 0 , B = '1', j = 0 , y = 0 ;
    for ( i ; i !== A.length ; i++ ) {
        console.log(A[i]) ;
        if ( +A[i] <= 9 && +A[i] >= 0 ) {
            B [j] = A[i] ;
        }
        if ( A[i] === '.' || A[i] === ',' && y === 0 ) {
            B [j] = A [i] ;
            y++ ;
        }
    }
    return B ;
}