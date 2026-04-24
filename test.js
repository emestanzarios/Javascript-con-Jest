// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("Euro to Dollar", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("Dollar to Yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 * (156.5 / 1.07);
    expect(yens).toBe(expected);
});

test("Yen to Pound", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * (0.87 / 156.5);
    expect(pounds).toBe(expected);
});