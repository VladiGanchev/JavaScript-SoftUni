function solve(sentence){

    let matches = sentence.matchAll(/[A-Z][a-z]*/g)
    let arr = Array.from(matches).map(x => x[0])

    console.log(arr.join(" "));
    


}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')