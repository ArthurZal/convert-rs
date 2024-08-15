const form = document.querySelector("form");
const inputAmount = document.querySelector("input");
const currency = document.querySelector("#currency");

inputAmount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g

    inputAmount.value = inputAmount.value.replace(hasCharactersRegex, "")

    //console.log(inputAmount.value)
})

form.onsubmit = (event) => {
    event.preventDefault()

    console.log(currency.value)
}

