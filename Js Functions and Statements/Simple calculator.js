function solve(a, b, operation){
    let expression = getExpression(operation);

    let result = expression(a, b);

    console.log(result);
    
}

solve(5,
    5,
    'multiply'
    )

function getExpression(operation){
    switch (operation) {
        case 'multiply':
         return (a, b) => a * b;
         case 'add':
         return (a, b) => a + b;
         case 'substract':
         return (a, b) => a - b;
         case 'divide':
         return (a, b) => a / b
    }
}