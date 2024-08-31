function solve(number){
    let oddSum = findOddSum(number)
    let evenSum = findEvenSum(number)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

function findOddSum(number){

    let sum = 0

    while (number > 0) {
        
        let num = number % 10;
        if(num % 2 == 1) {
            sum += num   
        }

        number = Math.floor(number /10);
    }

    return sum
}

function findEvenSum(number){

    let sum = 0

    while (number > 0) {
        
        let num = number % 10;
        if(num % 2 == 0) {
            sum += num   
        }

        number = Math.floor(number /10);
    }

    return sum
}
solve(1000435);
