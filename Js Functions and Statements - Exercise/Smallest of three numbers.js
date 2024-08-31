function mathMin(numbers){

    let lowest = Number.MAX_SAFE_INTEGER;

    for (const element of numbers) {
        if(element < lowest) {
            lowest = element
        }
    }

    return lowest
}
function solve(...numbers){
    let result = mathMin(numbers)

    return result
}


console.log(solve(7,2,3))