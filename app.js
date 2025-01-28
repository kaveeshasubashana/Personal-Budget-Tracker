let totalIncome = 0;
let totalExpenses = 0;

const incomeElement = document.getElementById('total-income');
const expensesElement = document.getElementById('total-expenses');
const remainingElement = document.getElementById('remaining-budget');
const transactionList = document.getElementById('transaction-list');

document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    
    if (category === 'Income') {
        totalIncome += amount;
    } else {
        totalExpenses += amount;
    }

    // Update totals
    incomeElement.textContent = `$${totalIncome}`;
    expensesElement.textContent = `$${totalExpenses}`;
    remainingElement.textContent = `$${totalIncome - totalExpenses}`;

    // Add transaction to the list
    const listItem = document.createElement('li');
    listItem.textContent = `${description} - $${amount} (${category})`;
    transactionList.appendChild(listItem);

    // Clear form
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
});
