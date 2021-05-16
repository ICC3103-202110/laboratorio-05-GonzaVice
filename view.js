// Importation
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

function view_title()
{
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
};

function view_table(model)
{
    const {bill_amount} = model;
    const {percent} = model;
    const {bill_tip} = model;
    const {bill_total} = model;
    
    return [{
        'Bill Amount': '$' + bill_amount,
        'Tip (%)': percent + '%',
        'Tip': '$' + bill_tip,
        'Total': '$' + bill_total}
    ];
};

function input_bill(model)
{
    const {bill_amount} = model;
    const message = 'Bill Amount?: ';
    return inquirer.prompt([
        {
            name: 'bill_amount',
            type: 'number',
            message: message,
            default: bill_amount
        }
    ])
};

function input_percent(model)
{
    const {percent} = model;
    const message = 'Tip(%)?: ';
    return inquirer.prompt([
        {
            name: 'percent',
            type: 'number',
            message: message,
            default: percent
        }
    ])
};

function view(model)
{
    return {
        title: view_title(),
        table: view_table(model)
    };
};

// Exportation
module.exports = {
    input_bill,
    input_percent,
    view
}