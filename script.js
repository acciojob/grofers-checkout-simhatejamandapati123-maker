  // Select all elements with class 'price'
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    // Add up all prices
    priceElements.forEach(price => {
      total += parseFloat(price.textContent);
    });

    // Create total row
    const table = document.getElementById('grocery-table');
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: ₹${total}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);