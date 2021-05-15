const prompt = require('prompt-sync')();
const chalk = require('chalk');

const bill_with_tip = (bill_init, add_percentage) => (bill_init * add_percentage * 0.01);
const total_bill = (bill_init, bill_w_tip) => (bill_init + bill_w_tip);

let bill = parseInt(prompt(chalk.blue.bold('Bill Amount?: ')));
let tip_percent = parseInt(prompt(chalk.blue.bold('Tip(%)?: ')));

let bill_tip = bill_with_tip(bill, tip_percent);
let bill_total = total_bill(bill, bill_tip);

console.log(chalk.red.bold('Bill Total = ') + bill_total);
