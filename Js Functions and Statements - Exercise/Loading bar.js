function solve(number){

    let count = number / 10;

    console.log(`${number}% [${'%'.repeat(number/10)}${'.'.repeat(10 - number/10)}]`);

    if(count == 10) {
        console.log('Complete!');
    } else {
        console.log('Still loading...');
    }
}

solve(30)