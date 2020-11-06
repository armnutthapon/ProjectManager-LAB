const calc = require('./calc');

const arrayNumber = [6, 9, 15, -2, 92, 11]

test('minimum', () => {
    let i, minimum;
    for (i = 0; i < arrayNumber.length; i++) {
        if (i == 0) {
            minimum = arrayNumber[0];
        }
        if (arrayNumber[i] <= minimum) {
            minimum = arrayNumber[i];
        }
    }
    let result = minimum;
    let result2 = calc.min(result)
    expect(calc.min(result2)).toBe(minimum);
})

test('maximum', () => {
    let i, maximum;
    for (i = 0; i < arrayNumber.length; i++) {
        if (i == 0) {
            maximum = arrayNumber[0];
        }
        if (arrayNumber[i] >= maximum) {
            maximum = arrayNumber[i];
        }
    }
    let result = maximum;
    let result2 = calc.max(result)
    expect(calc.max(result2)).toBe(maximum);
})

test('count', () => {
    let result = arrayNumber.length
    let result2 = calc.count(result)
    expect(calc.count(result2)).toBe(result);
})

test('average', () => {
    let i, average = 0;
    for (i = 0; i < arrayNumber.length; i++) {
        average = average + arrayNumber[i];
    }
    let result = average / arrayNumber.length;

    console.log(average);
    let result2 = calc.avg(result)
    expect(calc.avg(result2)).toBe(result);
})