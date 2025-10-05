window.onload = function () {
    // Step 1: Select all elements with class 'prices'
    const priceElements = document.querySelectorAll('.prices');

    let total = 0;

    // Step 2: Loop through and sum up the prices
    priceElements.forEach(priceEl => {
        const priceText = priceEl.textContent.trim();
        const price = parseFloat(priceText);
        if (!isNaN(price)) {
            total += price;
        }
    });

    // Step 3: Create a new row and cell
    const table = document.getElementById('grocery-table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    // Set the colspan to span full row
    totalCell.colSpan = 2;
    totalCell.textContent = "Total Price: ₹" + total.toFixed(2);
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'right';

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};