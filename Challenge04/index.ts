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

const validPasswords = []

const minRangeOfNumbers = 11098
const maxRangeOfNumbers = 98123

for(let i = minRangeOfNumbers; i <= maxRangeOfNumbers; i++){
    if(isAValidNumber(i)){
        validPasswords.push(i)
    }
}

console.log(validPasswords.length, validPasswords[55]);