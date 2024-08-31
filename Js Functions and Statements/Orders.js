

function solve(product, quantity){
    let result = calculatePrice(product, quantity);
    
    console.log((result * quantity).toFixed(2));
    
}

function calculatePrice(product, price){
    switch (product) {
        case 'coffee':
            return 1.5;
        case 'water':
            return 1
        case 'coke':
            return 1.4
        case 'snacks':
            return 2
    }
}
solve('water', 5)
