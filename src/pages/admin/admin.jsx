import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Admin() {
  const [productTitle, setProductTitle] = useState('');
  const [productImg, setProductImg] = useState('');
  const [products, setProducts] = useState([]);
  

//   const file = inputProductImageElement.files[0]

//   if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") {
//       const readerFile = new FileReader()

//       readerFile.addEventListener("load", () => {
//           productData.image = readerFile.result
//       }),

  useEffect(() => {
    axios.get('http://localhost:7777/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  

  const addProduct = () => {
    if (!productTitle.trim() && !productImg.trim() && productImg.type !== "image/jpeg" || productImg.type === "image/jpg" || productImg.type === "image/png") {
      alert('Ощипка');
      return;
    }

    const newProduct = { 
        title: productTitle.trim(),   
        photo: productImg.trim()
    };
    

    axios.post('http://localhost:7777/products', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setProductTitle('');
        setProductImg('')
      })
      .catch(error => console.error('Error adding product:', error));
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:7777/products/${id}`)
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
        value={productTitle}
        onChange={(e) => setProductTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="file"
        value={productImg}
        onChange={(e) => setProductImg(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={addProduct}>Добавить продукт</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
              
                return(
                  <div className="card-product">
                <img className="product-image" src={product?.photo} alt="error" />
                <b className="product-category">{product?.category?.categoryName}</b>
                <br />
                <Link to="/tabacks/product/${product.id}" className="product-title">
                     {product?.title}
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">{product.category?.taste1}</p>
                  <p className="taste-item">{product.category?.taste2}</p>
                  <p className="taste-item">{product.category?.taste3}</p>
                  <p className="taste-item">{product.category?.taste4}</p>
                  <p className="taste-item">{product.category?.taste5}</p>
               
                </div>
              </div>
                )
              
            <button onClick={() => deleteProduct(product.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

