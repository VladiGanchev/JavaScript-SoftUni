function solve(numbers, n){

    let result = [];

   for(let i = 0; i < numbers.length; i++) {
       if(i % n === 0) {
           result.push(numbers[i])
       }
   }

   console.log(result);
}

function fancySolve(numbers, n){
    let result = numbers.filter((element, index) => index % n === 0);

    return result;
}

console.log(fancySolve(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2
    
    ))