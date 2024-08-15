function solve(a, b){

    let carSpeed = a;
    let roadSpeed = 0;
    let status = '';


    if(b === 'city') {
        roadSpeed = 50;

        if(carSpeed <= roadSpeed) {
            console.log(`Driving ${carSpeed} km/h in a ${roadSpeed} zone`);
        } else if(carSpeed - roadSpeed <= 20) {
            status = 'speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else if(carSpeed - roadSpeed <= 40) {
            status = 'excesive speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else {
            status = 'reckless driving';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        }
    } else  if(b === 'interstate') {
        roadSpeed = 90;

        if(carSpeed <= roadSpeed) {
            console.log(`Driving ${carSpeed} km/h in a ${roadSpeed} zone`);
        } else if(carSpeed - roadSpeed <= 20) {
            status = 'speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else if(carSpeed - roadSpeed <= 40) {
            status = 'excesive speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else {
            status = 'reckless driving';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } 
    }  else  if(b === 'motorway') {
        roadSpeed = 130;

        if(carSpeed <= roadSpeed) {
            console.log(`Driving ${carSpeed} km/h in a ${roadSpeed} zone`);
        } else if(carSpeed - roadSpeed <= 20) {
            status = 'speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else if(carSpeed - roadSpeed <= 40) {
            status = 'excesive speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else {
            status = 'reckless driving';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } 
    } else  if(b === 'residential') {
        roadSpeed = 20;

        if(carSpeed <= roadSpeed) {
            console.log(`Driving ${carSpeed} km/h in a ${roadSpeed} zone`);
        } else if(carSpeed - roadSpeed <= 20) {
            status = 'speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else if(carSpeed - roadSpeed <= 40) {
            status = 'excesive speeding';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } else {
            status = 'reckless driving';
            console.log(`The speed is ${carSpeed - roadSpeed} km/h faster than the allowed speed of ${roadSpeed} - ${status}`);
            
        } 
    }
}

solve(120, 'interstate')