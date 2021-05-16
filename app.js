// Importation
const {view, input_bill, input_percent} = require('./view');
const {init_model} = require('./model');
const {update} = require('./update');
const {printTable} = require('console-table-printer');

const state = {
    model: init_model,
    view_model: view(init_model)
}

async function app(state, view, update)
{
    while (true){
        const {model, view_model} = state;
        const {title, table} = view_model;

        console.clear();
        console.log(title);
        printTable(table);

        const {bill_amount} = await input_bill(model);
        const {percent} = await input_percent(model);

        const updated_model = update(bill_amount, percent, model);
        state = {
            ...state,
            model: updated_model,
            view_model: view(updated_model)
        }
    }
}

app(state, view, update);