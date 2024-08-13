function calculateAreaOrPrintMessage(arg) {
    if (typeof arg === 'number' && isFinite(arg)) {

        let area = Math.PI * Math.pow(arg, 2);

        let roundedArea = area.toFixed(2);
        console.log("Circle area:", roundedArea);
    } else {
        let typeOfArg = typeof arg;

        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`);
    }
}

// Example usage:
calculateAreaOrPrintMessage(5);         
calculateAreaOrPrintMessage('hello');   
calculateAreaOrPrintMessage([1, 2, 3]); 
calculateAreaOrPrintMessage(NaN);       
