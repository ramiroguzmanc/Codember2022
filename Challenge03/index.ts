import fetch from 'node-fetch';

async function  fetchColors(): Promise<Array<string>> {
     try {
        const res = await fetch("https://codember.dev/colors.txt")
        const colors = await res.json()
        return colors
     } catch (error) {
        console.error(error)
     }
}

/*

    zebra más larga
    última zebra
    construyendo zebra

    Si el índice del  array de colores < 3:
        - Pasar a siguiente índice
    
    Indice que estoy evaluando en colores:
    * Si es diferente al anterior 
    * Si es igual al anterior - 1
        * Si construyendo zebra = 0:
            - Push de los últimos 2 índices y del actual a building zebra (se encontró una zebra)
        Sino, Se encontró un índice de zebra
            - Push a construyendo zebra 
    Sino, se acabó una zebra o no hay zebra
        - Pasar construyendo zebra a última zebra
        - Comparar última zebra con zebra más larga y en caso de ser más larga, reemplazar zebra más larga
        - Limpiar construyendo zebra

*/

async function code(): Promise<void> {
    const colors = await fetchColors()

        let longestZebra = []
        let latestZebra = []
        let buildingZebra = []

    colors.forEach((curr, indx, arr) => {
        if(indx < 3) return 
        const previousValue = arr[indx - 1]
        const penultimateValue = arr[indx - 2]

        if(curr !== previousValue && curr === penultimateValue ){ // Se encontró una zebra
            if(buildingZebra.length === 0){              
                buildingZebra.push(penultimateValue)
                buildingZebra.push(previousValue)
                buildingZebra.push(curr)
            }else{                                              // Se encontró un índice de zebra
                buildingZebra.push(curr)
            }
        }else{                                                  // Se acabó una zebra o no hay zebra
            latestZebra = buildingZebra
            if(latestZebra.length >= longestZebra.length){
                longestZebra = latestZebra
            }
            buildingZebra = []
        }

    })

    console.log(longestZebra.length, longestZebra.at(-1))
}

code()



