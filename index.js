const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let positiveSum = 0
let positiveAmount = 0
let minElement = arr[0]
let minIndex
let maxElement = arr[0];
let maxIndex
let negativeElement = 0
let unpairedPositiveElement= 0
let pairedPositiveElement = 0
let sumPairedPositiveElement = 0
let sumUnpairedPositiveElement = 0
let multPositiveElement = 1
for (let i = 0; i<arr.length;i++){
    if(arr[i]>0){
        positiveSum +=arr[i]
        positiveAmount++
        multPositiveElement *= arr[i]
        if(arr[i]%2!==0){
            unpairedPositiveElement++
            sumUnpairedPositiveElement +=arr[i]
        }else {
            pairedPositiveElement++
            sumPairedPositiveElement +=arr[i]
        }
    }else {
        negativeElement++
    }
    if(arr[i]<minElement){
        minElement = arr[i]
        minIndex = i
    }
    if(arr[i]>maxElement){
        maxElement = arr[i]
        maxIndex = i
    }

}
console.log(`Cумма позитивных элементов ${positiveSum}`) //cумма позитивных элементов
console.log(`Количество позитивных элементов ${positiveAmount}`)//количество
console.log(`Минимальный елемент ${minElement}`)//
console.log(`Индекс минимального елеменат ${minIndex}`)//количество
console.log(`Максимальный елемента ${maxElement}`)//
console.log(`Индекс максимального елемената ${maxIndex}`)//количество
console.log(`Количество негативных элементов ${negativeElement}`)//количество
console.log(`Количество непарных позитивных элементов ${unpairedPositiveElement}`)//количество
console.log(`Количество парных позитивных элементов ${pairedPositiveElement}`)//количество
console.log(`Cумма парных позитивных элементов ${sumPairedPositiveElement}`)//количество
console.log(`Cумма непарных позитивных элементов ${sumUnpairedPositiveElement}`)//количество
console.log(`Произведение позитивных элементов ${multPositiveElement}`)//количество

for(let i = 0; i<arr.length;i++){
    if(arr[i]!==maxElement){
        arr[i] = 0
    }
}
console.log(arr)
