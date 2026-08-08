function checkAge(age) {
    if (age >= 18) {
        return `Adult`;
    } else {
        return `Minor`
    }
}

console.log(checkAge(12));
console.log(checkAge(18));
console.log(checkAge(15));
console.log(checkAge(20));
console.log(checkAge(17));
console.log(checkAge(25));
console.log(checkAge(1));
console.log(checkAge(19));