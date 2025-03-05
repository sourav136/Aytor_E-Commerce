import React, { useState } from 'react';
import './Cart.css';
import CommonButton from '../CommonButton/CommonButton';
import BlankBanner from '../BlankBanner/BlankBanner';
import IconsMini from '../IconsMini/IconsMini';
import { ImBin } from 'react-icons/im';
import { FaPlus, FaMinus, FaArrowRightLong } from 'react-icons/fa6';
import CommonFooter from './../CommonFooter/CommonFooter';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/Context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0); // Discount percentage (0 for no discount)

  // Handle item quantity increase
  const itemAdd = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // Handle item quantity decrease
  const itemRemove = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  // Handle coupon code submission
  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (couponCode === 'SS26') {
      setDiscount(26); // Apply 26% discount
    } else {
      alert('Invalid coupon code');
      setDiscount(0); // Reset discount if the code is invalid
    }
  };

  // Ensure price and quantity are valid numbers before calculation
  const cartTotal = cart.reduce((acc, item) => {
    let price = parseFloat(item.price); // Parse price to number
    if (isNaN(price)) {
      price = 0; // If price is not a valid number, set it to 0
    }
    const quantity = parseInt(item.quantity, 10);
    if (!isNaN(price) && !isNaN(quantity)) {
      return acc + price * quantity;
    }
    return acc;
  }, 0);

  // Apply discount to subtotal if discount is greater than 0
  const discountedTotal = cartTotal - (cartTotal * (discount / 100));

  return (
    <div>
      <BlankBanner blankHead="Cart" blankSubHead="Home  /  Cart" />
      <div className="cart-list-section mt-5 mb-5">
        <div className="container">
          <ul>
            {cart.length === 0 ? (
              <p className="empty-cart-message">Your cart is empty!</p>
            ) : (
              cart.map((item) => (
                <li key={item.id}>
                  <div className="cart-list-item-container">
                    <div className="list-image-container common-container-style">
                      <div className="list-image-text common-header-style">
                        <h5>Image</h5>
                      </div>
                      <div className="list-image common-body-style">
                        <img src={item.image} className="list-image-style" alt="" />
                      </div>
                    </div>
                    <div className="product-name-container common-container-style">
                      <div className="product-name-head common-header-style">
                        <h5>Product Name</h5>
                      </div>
                      <div className="product-name common-body-style">
                        <p>{item.heading}</p>
                      </div>
                    </div>
                    <div className="price-unit-container common-container-style">
                      <div className="price-unit-head common-header-style">
                        <h5>Price/Unit</h5>
                      </div>
                      <div className="price-unit common-body-style">
                        <p>${parseFloat(item.price).toFixed(2)}</p> {/* Convert price to number */}
                      </div>
                    </div>
                    <div className="quantity-container common-container-style">
                      <div className="quantity-head common-header-style">
                        <h5>Quantity</h5>
                      </div>
                      <div className="quantity common-body-style d-flex">
                        <button
                          className="quantity-button"
                          onClick={() => itemAdd(item.id)}
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="m-auto" />
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          className="quantity-button-input"
                          value={item.quantity}
                          disabled
                        />
                        <button
                          className="quantity-button"
                          onClick={() => itemRemove(item.id)}
                          aria-label="Decrease quantity"
                        >
                          <FaMinus className="m-auto" />
                        </button>
                      </div>
                    </div>
                    <div className="total-container common-container-style fixed-width">
                      <div className="total-head common-header-style">
                        <h5>Total</h5>
                      </div>
                      <div className="total common-body-style">
                        <p>${(parseFloat(item.price) * item.quantity).toFixed(2)}</p> {/* Convert price to number */}
                      </div>
                    </div>
                    <div className="remove-container common-container-style fixed-width">
                      <div className="remove-head common-header-style">
                        <h5>Remove</h5>
                      </div>
                      <div className="remove common-body-style">
                        <ImBin
                          className="remove-icon"
                          onClick={() => removeFromCart(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
            )}
            <li>
              <div className="coupon">
                <div className="coupon-part">
                  <form onSubmit={handleCouponSubmit} id="coupon-code">
                    <input
                      type="text"
                      id="coupon-code"
                      placeholder="Enter your coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)} // Set coupon code
                    />
                    <button className="cart-list-button" type="submit">
                      Submit <FaArrowRightLong />
                    </button>
                  </form>
                </div>
                <div className="continue-shopping mt-3 m-sm-0">
                  <Link to="/shop/grid" className="cart-list-button">
                    Continue Shopping <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="cart-total-part w-100 pt-5 pb-5">
            <div className="cart-total-container">
              <h5>Cart Total</h5>
              <div className="subtotal d-flex">
                <div className="subtotal-text">
                  <p>Subtotal</p>
                </div>
                <div className="subtotal-number">
                  <p>${cartTotal.toFixed(2)}</p> {/* Format cart total */}
                </div>
              </div>
              {discount > 0 && (
                <div className="discount d-flex">
                  <div className="discount-text">
                    <p>Discount ({discount}%)</p>
                  </div>
                  <div className="discount-number">
                    <p>-${(cartTotal * (discount / 100)).toFixed(2)}</p> {/* Show discount */}
                  </div>
                </div>
              )}
              <div className="total d-flex">
                <div className="total-text">
                  <p>Total</p>
                </div>
                <div className="total-number">
                  <p>${discountedTotal.toFixed(2)}</p> {/* Show discounted total */}
                </div>
              </div>
              <Link to="/checkout" className="cart-list-button">
                Proceed To Checkout <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CommonFooter />
      <IconsMini />
    </div>
  );
};

export default Cart;
