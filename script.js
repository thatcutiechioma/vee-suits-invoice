// Set today's date automatically
document.getElementById('invoice-date').textContent = new Date().toLocaleDateString('en-GB', {
  day: 'numeric', month: 'long', year: 'numeric'
});

// Add new row
function addRow() {
  const tbody = document.getElementById('items-body');
  const rowCount = tbody.rows.length + 1;
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${rowCount}</td>
    <td contenteditable="true" class="editable"></td>
    <td contenteditable="true" class="editable qty"></td>
    <td contenteditable="true" class="editable price"></td>
    <td class="amount"></td>
  `;
  tbody.appendChild(row);
}

// Clear invoice
function clearInvoice() {
  if (confirm('Clear all editable fields?')) {
    document.querySelectorAll('.editable').forEach(el => {
      el.textContent = '';
    });
    document.getElementById('invoice-date').textContent = new Date().toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }
}