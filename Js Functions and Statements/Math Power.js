function solve(number, power){

    let result = mathPow(number, power)

    console.log(result)
}

solve(3, 4)

function mathPow(number, power){

    let result = number;

    for(let i = 1; i < power; i++) {
        result *= number;
    }

    return result
}