//this function calculates an accurate factorial of a large number
function extraLongFactorials(n) {
    var fac=1;
    var q = Math.floor(n/2);
    var r = n % 2;
    if (r===1) {
        for (var i=1;i<q+1;i++){
            fac=BigInt(fac)*BigInt((i*(n-i+1)));
        };
        fac=BigInt(fac)*BigInt((q+1));
        return fac.toLocaleString('fullwide', { useGrouping: false })
    }else{
        for (var i=1;i<q+1;i++){
            fac=BigInt(fac)*BigInt(i*(n-i+1));
        };
        return fac.toLocaleString('fullwide', { useGrouping: false });
    }

}
