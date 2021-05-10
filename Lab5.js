const prompt = require('prompt-sync')();

const total_bill = (bill_init, add_percentage) => (bill_init + (bill_init * add_percentage));

let bill = parseInt(prompt('Bill Amount?: '));
let tip_percent = parseInt(prompt('Tip(%)?: '));
let bill_total = total_bill(bill, tip_percent);

console.log('Bill Total = ' + bill_total);