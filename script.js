
const inputAmount = document.querySelector("input");

inputAmount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g

    inputAmount.value = inputAmount.value.replace(hasCharactersRegex, "")
    
    console.log(inputAmount.value);
});

