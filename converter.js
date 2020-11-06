function converter(currency) {
    if (currency < 0) {
        return currency;
    } else if (currency == currency.toFixed(1) || currency == currency.toFixed(2)) {
        return "$" + (currency / 30).toFixed(2);
    }
}
module.exports = converter;