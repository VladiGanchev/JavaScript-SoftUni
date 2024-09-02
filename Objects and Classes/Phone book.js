function solve(book){

    let newBook = {}

    for (const element of book) {
        let line = element.split(' ')

        newBook[line[0]] = line[1] 
    }

    for (const key in newBook) {
        console.log(`${key} -> ${newBook[key]}`);
        
    }
}

solve(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
   
   )