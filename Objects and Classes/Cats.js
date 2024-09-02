function solve(arr){

let catArr = []

    for (const line of arr) {
        let args = line.split(" ")
        let cat = new Cat(args[0], args[1])

        catArr.push(cat)
        
    }

    for (const element of catArr) {
        console.log(element.meow());
        
    }
}

class Cat{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    meow(){
        return `${this.name}, age ${this.age} says Meow`
    }
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2'])