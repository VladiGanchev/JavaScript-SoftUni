function solve(words, sentence){

    let wordsArray = words.split(", ");
    let sentenceArray = sentence.split(" ");

    for (const word of wordsArray) {
        if(sentenceArray.some(x => x.length === word.length)){
            
            let idx = sentenceArray.findIndex(x => x.length === word.length && x.includes("*"))
            sentenceArray[idx] = word
        }
    }

    console.log(sentenceArray.join(" "));
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'

)