function solve(grade){
    let result = formatGrade(grade);

    console.log(result);
    
}

solve(5.55)

function formatGrade(grade){
    if(grade < 3) {
        return `Fail (2)`
    }

    if(grade < 3.50) {
        return `Poor (${grade.toFixed(2)})`
    }

    if(grade < 4.50) {
        return `Good (${grade.toFixed(2)})`

    }

    if(grade < 5.50) {
        return `Very good (${grade.toFixed(2)})`

    }

    return `Excellent (${grade.toFixed(2)})`


    
}