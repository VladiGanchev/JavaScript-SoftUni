function solve(a, b,c){
    if(a > b){
        if(a > c){
            console.log(`The largest number is ${a}`);
        } else{
            console.log(`The largest number is ${c}`);
        }
    } else{
        if(b > c){
            console.log(`The largest number is ${b}`);
        } else {
            console.log(`The largest number is ${c}`);
        }
    }
}

solve(3, 2 , 1)