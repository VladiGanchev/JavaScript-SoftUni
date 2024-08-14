function solve(a){

    let isSame = true;
    let sum = 0;

    a = a.toString();

    for(let i = 0; i < a.length - 1; i++) {
        
        sum += parseInt(a[i]);
        
        if(a[i] != a[i + 1]) {
            isSame = false;
        }
    }

    sum += parseInt(a[a.length - 1])

    if(isSame === false) {
        console.log('false');
    } else {
        console.log('true');
    }

    console.log(sum);
    
}

solve(1234)