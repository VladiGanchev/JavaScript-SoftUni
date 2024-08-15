function solve(number, ...operations){

    let newNumber = Number(number)

    for(let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop':
                newNumber /= 2
                break;
            case 'dice':
                newNumber = Math.sqrt(newNumber)
                break;
            case 'spice':
                newNumber += 1
                break;
            case 'bake':
                newNumber *= 3
                break;
            case 'fillet':
                newNumber -= newNumber * 0.2
                break;
            default:
                break;
        }
    }

    console.log(newNumber);
    
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')