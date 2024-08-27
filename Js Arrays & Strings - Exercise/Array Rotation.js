function solve(array, number){
    for(let i = 0; i < number; i++) {
        let num = array.shift();
        array.push(num);
        
    }

    console.log(array.join(" "));
    
}

function fancySolve(array, number){
    for(let i = 0; i < number; i++) {
        array.push(array.shift());
    }

    console.log(array.join(" "));
    
}

fancySolve([2, 4, 15, 31], 5)