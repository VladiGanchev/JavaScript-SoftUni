function solve(arr){
    let obj = {}

    for (const line of arr) {
        let args = line.split(':')

        obj[args[0]] = args[1]
    }

    let sortedKeys = Object.keys(obj).sort((a,b) => a.localeCompare(b))

    for (const key of sortedKeys) {
        console.log(`${key} -> ${obj[key]}`);
        
    }

    
}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
    
   )