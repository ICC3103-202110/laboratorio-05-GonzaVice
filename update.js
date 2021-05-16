
const bill_with_tip = (bill_init, add_percentage) => (bill_init * add_percentage * 0.01);
const total_bill = (bill_init, bill_w_tip) => (bill_init + bill_w_tip);

function update(bill, percent, model)
{
    const bill_tip = bill_with_tip(bill, percent);
    const bill_total = total_bill(bill, bill_tip);
    
    return{
        ...model,
        bill_amount: bill,
        percent: percent,
        bill_tip: bill_tip,
        bill_total: bill_total,
    }
}

// Exportation
module.exports = {
    update
}