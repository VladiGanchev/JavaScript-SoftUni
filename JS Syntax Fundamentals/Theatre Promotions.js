function solve(a, b){
    if(a == 'Weekday'){
        if(b <= 18){
            console.log('12$');
        } else if(b <= 64){
            console.log('18$')
        } else if(b <= 122){
            console.log('12$')
        } else{
            console.log('Error!')
        }
    }else if(a == 'Weekend'){
        if(b <= 18){
            console.log('15$');
        } else if(b <= 64){
            console.log('20$')
        } else if(b <= 122){
            console.log('15$')
        } else{
            console.log('Error!')
        }
    }else if(a == 'Holiday'){
        if(b <= 18){
            console.log('5$');
        } else if(b <= 64){
            console.log('12$')
        } else if(b <= 122){
            console.log('10$')
        } else{
            console.log('Error!')
        }
    } 
}

solve('Holiday', 130)