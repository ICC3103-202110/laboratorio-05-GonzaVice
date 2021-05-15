// Importation
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const {initModel} = require('./model');

function viewTitle()
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

function viewTable(model)
{
    const {billAmount} = initModel;
    const {percent} = initModel;
    const {bill_tip} = initModel;
    const {bill_total} = initModel;
    
    return [{
        'Bill Amount': '$' + billAmount,
        'Tip (%)': percent + '%',
        'Tip': '$' + bill_tip,
        'Total': '$' + bill_total}
    ];
};

function inputBill(model)
{
    const {billAmount} = initModel;
    const message = 'Bill Amount?: ';
    return inquirer.prompt([
        {
            name: 'input',
            type: 'number',
            message: message,
            default: billAmount
        }
    ])
};

function inputPercent(model)
{
    const {percent} = initModel;
    const message = 'Tip(%)?: ';
    return inquirer.prompt([
        {
            name: 'input',
            type: 'number',
            message: message,
            default: percent
        }
    ])
};

function view(model)
{
    return {
        title: viewTitle(),
        table: viewTable(model)
    };
};

// Exportation
module.exports = {
    inputBill,
    inputPercent,
    view
}