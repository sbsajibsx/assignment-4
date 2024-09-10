// problem 1 start
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
// problem 1 end


// problem 2 start
// problem 2
function sendNotification(email) {
    if(email.indexOf('@') === -1){
        return 'Invalid Email';
    }
    let beforeDomain = email.split('@')[0];
    let afterDomain = email.split('@')[1];
    const notification = beforeDomain + ' sent you an email from ' + afterDomain;
    return notification;
}
// test problem 2
console.log(sendNotification('zihad@gmail.com'))
console.log(sendNotification('farhan34@yahoo.com'))
console.log(sendNotification('nadim.naem5@outlook.com'))
console.log(sendNotification('fahim234.hotmail.com'))
console.log(sendNotification('sadia8icloud.com'))
// problem 2 end



