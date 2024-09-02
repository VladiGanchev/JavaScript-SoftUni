function solve(object){
    for (const key in object) {
        console.log(`${key} -> ${object[key]}`);
        
    }
}

solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})