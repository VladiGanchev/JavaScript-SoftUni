function solve(number) {
    let divisors = getDivisors(number);

    let sum = divisors.reduce((a, b) => a + b, 0);

    if (sum === number) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

function getDivisors(number){
    
    let arr = []

    for(let i = 1; i <= number / 2; i++) {
        if(number % i === 0) {
            arr.push(i)
        }
    }

    return arr
}

solve(1236498)