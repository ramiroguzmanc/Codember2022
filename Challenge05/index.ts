import fetch from "node-fetch"

async function fetchMecenas():Promise<Array<string>>{
    const res = await fetch("https://codember.dev/mecenas.json")
    const mecenas = await res.json()
    return mecenas
}

const findNextIndexToKill = (actualValueIndex: number, array: Array<string>): number => {
    
    let elementIndexToKill = array.findIndex((element, index) => element !== "X" && index > actualValueIndex )
    
    if(elementIndexToKill === -1){ // Element not found
        elementIndexToKill =  array.findIndex((element) => element !== "X")
    }
    
    return elementIndexToKill
}

const makeAPurge = (arr: Array<string>):Array<string> => {
    
    arr.forEach((el, indx, arr) => {
        if(el === "X") return el
    
       const itemIndexToKill = findNextIndexToKill(indx, arr)
       console.log(`${el} killed ${arr[itemIndexToKill]}`);
       
       arr[itemIndexToKill] = "X"
        
    })
    
    if(arr.filter(el => el !== "X").length > 1) { 
    console.log("---- New Purge ----");
     makeAPurge(arr)
    }

    return arr
}

async function app() {
    const mecenas = await fetchMecenas()

    const survivor = makeAPurge(mecenas).filter((item, index) => item !== "X").toString()
    const indexOfSurvivor = mecenas.indexOf(survivor)
    console.log(`Survivor: ${survivor}\nindex: ${indexOfSurvivor}`)
}

app()
