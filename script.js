const form = document.querySelector("form");
const inputAmount = document.querySelector("input");
const currency = document.querySelector("#currency");

const USD_price = 5.49;
const EUR_price = 6.02;
const GBP_price = 7.06;

inputAmount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g

    inputAmount.value = inputAmount.value.replace(hasCharactersRegex, "")

    
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD": 
            console.log(currency.value)
            break;

        case "EUR":
            console.log(currency.value)
            break;
        
        case "GBP":
            console.log(currency.value)
            break;

        default:
            console.log("Please, select one valid value")
    }
}

function convertCurrency(amount, price, symbol) {

}

