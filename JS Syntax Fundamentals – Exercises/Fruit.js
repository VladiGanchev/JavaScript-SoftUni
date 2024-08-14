function solve(a,b,c){
    let kg = b / 1000;
    let result = kg * c;
    console.log(`I need $${result.toFixed(2)} to buy ${(b/1000).toFixed(2)} kilograms ${a}.`);
    
}

solve('apple', 1563, 2.35);