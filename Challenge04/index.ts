function numberHaveIncrementalDigits(splittedNumber: Array<string>):boolean {
    const checkedNumbers = []

    splittedNumber.reduce((prev, curr) => {
      checkedNumbers.push(prev <= curr)
      
      return curr
    })
    
    return !checkedNumbers.some((val) => val === false)
}

function isAValidNumber(number: number):boolean{
    const splittedNumber = number.toString().split('')
    
    const fiveNumberAtLeastTwoTimes =  splittedNumber.filter(number => number === '5').length >= 2

    return numberHaveIncrementalDigits(splittedNumber) && fiveNumberAtLeastTwoTimes
}

const minRangeOfNumbers = 11098
const maxRangeOfNumbers = 98123

// Creo un array del tamaño de la diferencia entre el rango de los números
let rangeOfNumbers = Array((maxRangeOfNumbers + 1) - minRangeOfNumbers)

// Relleno el array desde el valor mínimo especificado hasta el máximo
rangeOfNumbers = Array.from(rangeOfNumbers, (_, indx) => minRangeOfNumbers + indx)

const validPasswords = rangeOfNumbers.filter((number) => isAValidNumber(number))

console.log(validPasswords.length, validPasswords[55]);