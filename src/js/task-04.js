let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]')
console.log(decrementButton)
const incrementButton = document.querySelector('[data-action="increment"]')
console.log(incrementButton)
const valueSpan = document.querySelector('#value')
console.log(valueSpan)

decrementButton.addEventListener("click", () => {
    counterValue-=1
    valueSpan.textContent = counterValue
});
incrementButton.addEventListener("click", () => {
    counterValue+=1
    valueSpan.textContent = counterValue
});
