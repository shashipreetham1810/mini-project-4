Expense Tracker — JavaScript Mini Project

Overview

This project is a simple Expense Tracker built using core JavaScript.
It helps track different expenses, calculate the total amount spent, and identify the highest expense.

The goal of this project is to practice JavaScript fundamentals such as arrays, objects, loops, functions, and conditions.

---

Features

- Add a new expense
- View all expenses
- Calculate total expenses
- Find the highest expense

---

Concepts Used

- Arrays
- Objects
- Functions
- Loops ("for")
- Conditional statements ("if")
- Array methods ("push")

---

Data Structure

Expenses are stored as objects inside an array.

Example:

let expenses = [
  { item: "food", amount: 200 },
  { item: "travel", amount: 100 }
];

Each expense contains:

- "item" → name of the expense
- "amount" → money spent

---

Functions

addExpense(item, amount)

Adds a new expense to the list.

Example:

addExpense("shopping", 500);

---

showExpenses()

Displays all expenses.

Example output:

food - 200
travel - 100
shopping - 500

---

totalExpense()

Calculates the total amount spent on all expenses.

Example output:

Total: 800

---

highestExpense()

Finds the expense with the highest amount.

Example output:

Highest: shopping 500

---

Example Execution

addExpense("food", 200);
addExpense("travel", 100);
addExpense("shopping", 500);

showExpenses();

totalExpense();

highestExpense();

---

Learning Outcome

After completing this project, you will understand:

- How to store and manage data using arrays and objects
- How to process data using loops and conditions
- How to build simple real-world logic systems using JavaScript

---

Author

Chichu
Aspiring Smart Contract & Web3 Developer
