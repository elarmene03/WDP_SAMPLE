const products = [
  { name: 'Product 1', price: 19.99, image: 'product1.j' },
  { name: 'Product 2', price: 24.99, image: 'product2.jpg' },
  // Add more products as needed
];

const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;

  const name = document.createElement('h3');
  name.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = $${product.price};

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(price);

  productList.appendChild(card);
});