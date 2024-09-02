function solve(firstName, lastName, hairColor){
    let object = {
        name: firstName,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(object))
}

solve('George', 'Jones', 'Brown');
