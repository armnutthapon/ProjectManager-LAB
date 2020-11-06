const fizzbuzz = require('./fizzbuzz');
test('multiple by 3 should print Fizz', () => {
    let number = 3
    let result = fizzbuzz(number)
    expect(result).toEqual("Fizz");
})
test('multiple by 5 should print Buzz', () => {
    let number = 5
    let result = fizzbuzz(number)
    expect(result).toEqual("Buzz");
})
test('multiple by 15 should print FizzBuzz', () => {
    let number = 15
    let result = fizzbuzz(number)
    expect(result).toEqual("FizzBuzz");
})
test('multiple by 2 should print 2', () => {
    let number = 2
    let result = fizzbuzz(number)
    expect(result).toEqual(2);
});