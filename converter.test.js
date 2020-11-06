const converter = require('./converter');
let currency, result, total = currency / 30;

test('Integer convert currency from Thai Baht to US Dollar.', () => {

    currency = 50000;
    total = currency / 30;
    result = converter(currency)
    expect(result).toBe("$" + total.toFixed(2));
})

test('Float convert currency from Thai Baht to US Dollar.', () => {

    currency = 0.5;
    total = currency / 30;
    result = converter(currency)

    expect(result).toBe("$" + total.toFixed(2));
})

test('-1', () => {

    currency = -1;
    result = converter(currency)
    expect(result).toEqual(currency);
})