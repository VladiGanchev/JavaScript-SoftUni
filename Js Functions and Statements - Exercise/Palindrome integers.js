function solve(arr){

    for (const element of arr) {
        if(isPalindrome(element)) {
            console.log('true');
            
        } else {
            console.log('false');
            
        }
    }
}

function isPalindrome(number){

    let num = number.toString();

    let result = true;

    for(let i = 0; i < num.length / 2; i++) {
        if(num[i] !== num[num.length - i - 1]) {
            result = false
            return result
        }
    }

    return result
}

solve([32,2,232,1010])