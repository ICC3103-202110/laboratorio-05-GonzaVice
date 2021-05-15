// Importation
const {view, inputBill, inputPercent} = require('./view');
const {initModel} = require('./model');
const {update} = require('./update');
const {printTable} = require('console-table-printer');

const state = {
    model: initModel,
    viewModel: view(initModel)
}

// Impure
async function app(state, view, update)
{
    while (true){
        const {model, viewModel} = state;
        const {title, table} = viewModel;

        console.clear();
        console.log(title);
        printTable(table);

        const {billAmount} = await inputBill(model);
        const {percent} = await inputPercent(model);

        const updatedModel = update(billAmount, percent, model);
        state = {
            ...state,
            model: updatedModel,
            viewModel: view(updatedModel)
        }
    }
}

app(state, view, update);

/*
// Exportation
module.exports = {
    app
}
*/