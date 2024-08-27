function solve(word, sentence){
    let wordsArr = sentence.split(" ");

    let isFound = false;

    for (const element of wordsArr) {
        if(element.toLowerCase() === word) {
            console.log(word);
            isFound = true;
        }
    }

    if(isFound === false) {
        console.log(`${word} not found!`);
        
    }
}

solve('python',
'JavaScript is the best programming language'

)