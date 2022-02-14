document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
let food = document.getElementById("food-select")
let transport = document.getElementById("transport-select")
 

 

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    // 2. Display the total cost in the cost-el span.
  let foodCost = parseInt(food.value) 
   let transportCost = parseInt(transport.value) 
 let totalCost = foodCost + transportCost
// console.log(totalCost)
 costEl.innerText = totalCost
}
 
calculate()
