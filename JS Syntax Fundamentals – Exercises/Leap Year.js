function solve(a){
    if((a % 4 == 0 && a % 100 > 0) || a % 400 == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

solve(4)