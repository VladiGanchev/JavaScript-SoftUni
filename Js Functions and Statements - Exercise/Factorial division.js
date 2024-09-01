function solve(a, b){

    let num = getFactoriel(a);

    console.log((num/2).toFixed(2));
    
}

function getFactoriel(a){
    if(a == 0) {
        return 1;
    }

    return a * getFactoriel(a - 1)
}

solve(6,2)