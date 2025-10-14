 const priceElements = document.querySelectorAll('.prices');
    let total = 0;

    // Sum all the prices
    priceElements.forEach(price => {
      total += parseFloat(price.textContent);
    });

    // Create a new row for total
    const table = document.getElementById('grocery-table');
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = `Total Price: ₹${total}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  </script>