import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addProduct = () => {
    if (!productName.trim()) {
      alert('Введите название продукта.');
      return;
    }

    const newProduct = { name: productName.trim() };

    axios.post('http://localhost:3000/products', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setProductName('');
      })
      .catch(error => console.error('Error adding product:', error));
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div style={{ margin: '20px auto', width: '80%' }}>
      <h1>Административная страница</h1>
      <input
        type="text"
        placeholder="Введите название продукта"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={addProduct}>Добавить продукт</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => deleteProduct(product.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

