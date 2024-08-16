const form = document.querySelector("form")
const inputAmount = document.querySelector("input")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")

const USD_price = 5.49
const EUR_price = 6.02
const GBP_price = 7.06

inputAmount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g

    inputAmount.value = inputAmount.value.replace(hasCharactersRegex, "")

    
});

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD": 
            convertCurrency(inputAmount.value, USD_price, "US$")
            break;

        case "EUR":
            convertCurrency(inputAmount.value, EUR_price, "€")
            break;
        
        case "GBP":
            convertCurrency(inputAmount.value, GBP_price, "£")
            break;
    }
};

function convertCurrency(amount, price, symbol) {
    
    try {

        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        footer.classList.add("show-result")

    } catch (error) {
        footer.classList.remove("show-result")

        console.log("It was not possible to display the result. Please try again later")

        console.log(error)
    }
};

function formatCurrencyBRL (value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

