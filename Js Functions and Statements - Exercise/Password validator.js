const isValidLength = password => password.length >= 6 && password.length <= 10
const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password)
const isStrong = password => password.split('').filter(ch => Number.isInteger(Number(ch))).length > 2

function solve(password){
    let isValid = true;

    if(!isValidLength(password)) {
        isValid = false
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isAlphaNumerical(password)) {
        isValid = false
        console.log("Password must consist only of letters and digits");
    }

    if (!isStrong(password)) {
        isValid = false
        console.log("Password must have at least 2 digits");
    }

    if(isValid) {
        console.log('Password is valid');
        
    }
}

solve('Pa$s$s')