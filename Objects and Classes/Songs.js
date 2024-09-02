class Song{

    constructor(typeList, name, time){
        this.typeList = typeList,
        this.name = name,
        this.time = time
    }
}
function solve(arr){
    let num = arr[0];
    arr.shift()

    let keyWord = arr.pop()

    let newArr = []

    if(keyWord === 'all') {
    
        for (const element of arr) {
            
            let args = element.split('_')
    
            let song = new Song(args[0], args[1], args[2])

            newArr.push(song)
        }
    } else {
        
        for (const line of arr) {
            
            let args = line.split('_')
            
            if(keyWord === args[0]) {
                let song = new Song(args[0], args[1], args[2])

                newArr.push(song)
            }
        }
    }

    for (const key of newArr) {
        console.log(key.name);
        
    }


}

solve([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']


    )
