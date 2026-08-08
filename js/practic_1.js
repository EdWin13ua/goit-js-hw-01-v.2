function getDiscount(totalSpent) {
    if (totalSpent >= 50000) {
        return(0.1);
    } else if (totalSpent >= 20000) {
        return(0.05)
    } else if (totalSpent >= 10000) {
        return(0.02);
    } else {
        return(0);
    }
}

console.log(getDiscount(137000)); // 0.1
console.log(getDiscount(29000));  // 0.05
console.log(getDiscount(12000));  // 0.02
console.log(getDiscount(8000));   // 0



