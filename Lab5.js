const figlet = require('figlet');
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const { printTable } = require('console-table-printer');

const total_bill = (bill_init, add_percentage) => (bill_init + (bill_init * add_percentage * 0.01));

let bill = parseInt(prompt(chalk.blue.bold('Bill Amount?: ')));
let tip_percent = parseInt(prompt(chalk.blue.bold('Tip(%)?: ')));
let bill_total = total_bill(bill, tip_percent);

console.log(chalk.red.bold('Bill Total = ') + bill_total);


figlet('Tip Calculator App', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

const testCases = [{
    'Bill Amount': '$' + bill,
    'Tip (%)': tip_percent + '%',
    'Tip': '$' + (bill * tip_percent * 0.01),
    'Total': '$' + bill_total}
  ];

  printTable(testCases);