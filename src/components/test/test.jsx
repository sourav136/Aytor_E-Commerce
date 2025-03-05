import React from 'react';

function ProductCard({ name, price, rating, imageSrc, newProduct }) {
  return (
    <div className="product-card">
      {newProduct && <div className="new-badge">New</div>}
      <img src={imageSrc} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <div className="product-rating">
          <span className="rating-stars">*****</span>
          <span className="rating-count">({rating})</span>
        </div>
      </div>
    </div>
  );
}

function test() {
  const products = [
    {
      name: 'Spaghetti Hoodie',
      price: '125.65',
      rating: '5',
      imageSrc: 'https://via.placeholder.com/150',
      newProduct: true,
    },
    {
      name: 'Crew Neck Cotton',
      price: '150.65',
      rating: '5',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Spaghetti Strap Dress',
      price: '125.65',
      rating: '5',
      imageSrc: 'https://via.placeholder.com/150',
      newProduct: true,
    },
    {
      name: 'Pink Neck Frog',
      price: '350.65',
      rating: '5',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'T-shirt Blouse Sleeve',
      price: '125.65',
      rating: '5',
      imageSrc: 'https://via.placeholder.com/150',
      newProduct: true,
    },
    {
      name: 'Crew Neck T-shirt',
      price: '150.65',
      rating: '5',
      imageSrc: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export default test;