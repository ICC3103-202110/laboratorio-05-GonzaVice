const figlet = require('figlet');
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const {printTable} = require('console-table-printer');

function printTitle()
{
    figlet('Tip Calculator App', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
};

const bill_with_tip = (bill_init, add_percentage) => (bill_init * add_percentage * 0.01);
const total_bill = (bill_init, bill_w_tip) => (bill_init + bill_w_tip);

printTitle();

let bill = parseInt(prompt(chalk.blue.bold('Bill Amount?: ')));
let tip_percent = parseInt(prompt(chalk.blue.bold('Tip(%)?: ')));
let bill_tip = bill_with_tip(bill, tip_percent);
let bill_total = total_bill(bill, bill_tip);

console.log(chalk.red.bold('Bill Total = ') + bill_total);

const testCases = [{
    'Bill Amount': '$' + bill,
    'Tip (%)': tip_percent + '%',
    'Tip': '$' + bill_tip,
    'Total': '$' + bill_total}
  ];

  printTable(testCases);