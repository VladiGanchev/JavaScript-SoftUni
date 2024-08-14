function solve(a){

    let sum = 0;

    while (a > 0) {
        let number = a % 10;
        sum += number;
        a = Math.floor(a / 10);
    }

    console.log(sum);
    
}

solve(245678)