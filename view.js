const {printTable} = require('console-table-printer');
const figlet = require('figlet');

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


function viewTable()
{
    const testCases = [{
        'Bill Amount': '$' + bill,
        'Tip (%)': tip_percent + '%',
        'Tip': '$' + bill_tip,
        'Total': '$' + bill_total}
    ];

    printTable(testCases);
};

module.exports
{
    printTable,
    textCases
}