//Напиши функцію getShippingCost(country), яка повертає вартість доставки (число) залежно від країни:
// "China" ➔ 100
// "Chile" ➔ 250
// "Australia" ➔ 170
// Будь-яка інша країна ➔ "Sorry, there is no delivery to your country"
// Вимога: Обов'язково використай оператор switch.


function getShippingCost(country) {
    switch (country) {
        case `China`:
            return(`100`);
            break;
        case `Chile`:
            return(`250`);
            break;
        case `Australia`:
            return(`170`);
            break;
        default:
            return(`"Sorry, there is no delivery to your country"`)
    }
}

console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Ukraine"));