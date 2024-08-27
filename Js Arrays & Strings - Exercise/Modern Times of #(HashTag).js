function solve(sentence){
 let isTrue = true;

    let arr = sentence.split(" ").filter(x => x[0] === '#' && x.length > 1).map(x => x.substring(1))

    let resultArr = [];

    for (const word of arr) {

        let isTrue = true;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z')) {
                isTrue = false;
                break; 
            }
        }

        if (isTrue) {
            resultArr.push(word)
        }

        isTrue = true;
    }    

    return resultArr;
}

console.log(solve('The symbol # is known #variously in English-speaking #regions as the #number sign'))