// order.js

document.addEventListener('DOMContentLoaded', function() {
    const items = ['Nasi Goreng', 'Mie Goreng', 'Sate Ayam'];
    const orderDetails = [
      { item: 'Nasi Goreng', quantity: 2, price: 'Rp 25.000' },
      { item: 'Mie Goreng', quantity: 1, price: 'Rp 20.000' },
      { item: 'Sate Ayam', quantity: 3, price: 'Rp 30.000' }
    ];
  
    const itemsListElement = document.getElementById('items-list');
    const orderDetailsElement = document.getElementById('order-details');
  
    // Populate items list
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      itemsListElement.appendChild(li);
    });
  
    // Populate order details table
    orderDetails.forEach(detail => {
      const tr = document.createElement('tr');
      const itemTd = document.createElement('td');
      const quantityTd = document.createElement('td');
      const priceTd = document.createElement('td');
  
      itemTd.textContent = detail.item;
      quantityTd.textContent = detail.quantity;
      priceTd.textContent = detail.price;
      priceTd.classList.add('right-justified');
  
      tr.appendChild(itemTd);
      tr.appendChild(quantityTd);
      tr.appendChild(priceTd);
  
      orderDetailsElement.appendChild(tr);
    });
  });
  