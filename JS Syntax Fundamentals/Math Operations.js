function solve(a, b, c){
    if(c == '+'){
        console.log(a + b);
    } else if(c == '-'){
        console.log(a - b);
    } else if(c == '*'){
        console.log(a * b);
    } else if(c == '/'){
        console.log(a / b);
    } else if(c == '%'){
        console.log(a % b);
    } else{
        console.log(a ** b);

    }
}

solve(2, 3, '**');