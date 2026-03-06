let expenses = [
    { item: "food", amount: 200 },
    { item: "travel", amount: 100 }
];

function addexpense(item, amount){
    let expense = {
        item: item,
        amount: amount
    };
    expenses.push(expense);
}

addexpense("cinema", 500);

function showexpense(){
    for(let i=0; i<expenses.length; i++){
        console.log(expenses[i].item, "-", expenses[i].amount);
    }
}

function totalexpense(){
    let total = 0;
    for(let i = 0; i<expenses.length; i++){
        total += expenses[i].amount;
    }
    console.log("total expenses", total );
}

function highestexpense(){
    let max = expenses[0];
    for (let i = 0; i<expenses.length; i++){
        if(expenses[i].amount > max.amount){
            max = expenses[i]
        }
    }
    console.log("highest expense", max.item, max.amount);
}

addexpense("food", 500);
addexpense("cloths", 100);

showexpense();
totalexpense();
highestexpense();