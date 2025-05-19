//TODO 📚 Module 4 - Lesson 02.03.03 Creating a Function - Budget Tracker App

//  Set up references

const amoInput = document.getElementById('amountInput');
const descInput = document.getElementById('descriptionInput');
const addBtn = document.getElementById('add-btn');

const inputType = document.querySelector('input[name = "type"]:checked')?.value;

const transactionList = document.getElementById('transaction-list');
const currentBalance = document.getElementById('balance');
const totalIncome = document.getElementById('total-income');
const totalExpense = document.getElementById('total-expense');

//  Set up an event listener

addBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const description = descInput.value.trim();
    const rawAmount = amoInput.value.trim();
    const amount = parseFloat(rawAmount);
    const type = document.querySelector('input[name="type"]:checked')?.value;

    if (!description) {
        alert("Please enter a description.");
        return;
    }


    if (!rawAmount || isNaN(amount) || amount <= 0  || amount > 9999999.99) {
        alert("Please enter a valid amount between 0.01 and 9,999,999.99.");
        return;
    }

    const transaction = document.createElement('div');
    transaction.className = `transaction ${type}`;

    const amountSpan = document.createElement('span');
    amountSpan.className = 'amount';
    amountSpan.textContent = (type === 'expense' ? '-' : '+') + amount.toFixed(2);
    
    const descriptionSpan = document.createElement('span');
    descriptionSpan.className = 'description-span';
    descriptionSpan.textContent = description;

    const deleteTransactionButton = document.createElement('button');
    deleteTransactionButton.className = 'delete-btn';
    deleteTransactionButton.textContent = 'X';

    deleteTransactionButton.addEventListener('click', function () {
        transaction.remove();
        const index = transactions.findIndex(t => t.amount === amount && t.type === type);
        if (index > -1) {
            transactions.splice(index, 1);
            updateTotals();
        }
    });

    transaction.appendChild(amountSpan);
    transaction.appendChild(descriptionSpan);
    transaction.appendChild(deleteTransactionButton);

    transactionList.appendChild(transaction);
    transactions.push({ type, amount });
    updateTotals();
});

// Update the totals

// Initialize the transactions array
let transactions = [];

// Get references to summary elements
const balance = document.getElementById('balance');
const income = document.getElementById('total-income');
const expense = document.getElementById('total-expense');

// Function to recalculate totals and update the display
function updateTotals() {
    let totalBalance = 0;
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            totalBalance += transaction.amount;
            totalIncome += transaction.amount;
        } else if (transaction.type === 'expense') {
            totalBalance -= transaction.amount;
            totalExpense += transaction.amount;
        }
    });
    
    // Update the DOM elements
    balance.textContent = `$${totalBalance.toFixed(2)}`;
    income.textContent = `$${totalIncome.toFixed(2)}`;
    expense.textContent = `$${totalExpense.toFixed(2)}`;
}


descInput.value = '';
amoInput.value = '';





















