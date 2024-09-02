function solve(arr){

    let obj = {}

    for (const element of arr) {
        let args = element.split(' ')

        if(obj[args[0]]){
            console.log(`Conflict on ${args[0]}!`);
        } else {
            console.log(`Scheduled for ${args[0]}`);
            obj[args[0]] = args[1]
        }
    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
        
    }
}

solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
    
   )