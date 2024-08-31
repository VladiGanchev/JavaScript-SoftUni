function solve(a,b){
    let arr = getSortedCharacters([a,b])

    let start = arr[0]
    let end = arr[1]


    let result = printResult(start, end)

    return result

}

function getSortedCharacters(numbers){

    return numbers.sort()
}

function printResult(start, end){

    let result = []

    for(let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
        result.push(String.fromCharCode(i))
    }

    return result
}

console.log(solve('a', 'd'))