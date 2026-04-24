// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

const fromDollarToYen = function(valueInDollar) {
    return valueInDollar * (oneEuroIs.JPY / oneEuroIs.USD);
}

const fromYenToPound = function(valueInYen) {
    return valueInYen * (oneEuroIs.GBP / oneEuroIs.JPY);
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };