const warStartDate = new Date(2022, 1, 24)
const today = new Date()
let dayFromStartElem = document.getElementById('dayFromStartId')
let someId = document.getElementById('someId')
let dayFromStart = today - warStartDate
console.log(dayFromStart)
dayFromStart = Math.ceil(dayFromStart/(1000*60*60*24))

console.log("Hello world")
console.log(warStartDate)
console.log(today)
console.log(dayFromStart)

dayFromStartElem.innerText = dayFromStart


