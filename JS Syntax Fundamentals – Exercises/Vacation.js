function solve(a,b,c){

    let totalPrice = 0;

    if(c === 'Friday') {
        if(b === 'Students' ) {
            if(a >= 30) {
                totalPrice = a * 8,45;
                totalPrice -= totalPrice * 0.15;
            } else {
                totalPrice = a * 8,45;
            }
        } else if(b === 'Business') {
            if(a >= 100) {
                totalPrice = a * 10.90;
                totalPrice -= 10 * 10,9;
            } else{
                totalPrice = a * 10.90;
            }
        } else if(b === 'Regular') {
            if(a >= 10 && a <= 20) {
                totalPrice = a * 15;
                totalPrice -= totalPrice * 0.05;
            } else {
                totalPrice = a * 15;
            }
        }
    } else if(c === 'Saturday') {
        if(b === 'Students' ) {
            if(a >= 30) {
                totalPrice = a * 9,8;
                totalPrice -= totalPrice * 0.15;
            } else {
                totalPrice = a * 9,8;
            }
        } else if(b === 'Business') {
            if(a >= 100) {
                totalPrice = a * 15,6;
                totalPrice -= 10 * 15,6;
            } else{
                totalPrice = a * 15,6;
            }
        } else if(b === 'Regular') {
            if(a >= 10 && a <= 20) {
                totalPrice = a * 20;
                totalPrice -= totalPrice * 0.05;
            } else {
                totalPrice = a * 20;
            }
    } else if(c === 'Sunday') {
        if(b === 'Students' ) {
            if(a >= 30) {
                totalPrice = a * 10,46;
                totalPrice -= totalPrice * 0.15;
            } else {
                totalPrice = a * 10,46;
            }
        } else if(b === 'Business') {
            if(a >= 100) {
                totalPrice = a * 16;
                totalPrice -= 10 * 16;
            } else{
                totalPrice = a * 16;
            }
        } else if(b === 'Regular') {
            if(a >= 10 && a <= 20) {
                totalPrice = a * 22,5;
                totalPrice -= totalPrice * 0.05;
            } else {
                totalPrice = a * 22,5;
            }
    }
    }
}
console.log(totalPrice);

}

solve(30,
    "Students",
    "Sunday"
    )