// problem 1
function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0){
        return 'Invalid Input';
    }
    else if(expenses > income){
        return 'Invalid Input';
    }
    const difference = income - expenses;
    return difference * .20;
}
// test problem 1
console.log(calculateTax(10000, 3000))
console.log(calculateTax(340000, 1753))
console.log(calculateTax(5000, 1500))
console.log(calculateTax(7000, 7000))
console.log(calculateTax(-5000, 2000))
console.log(calculateTax(6000, -1500))