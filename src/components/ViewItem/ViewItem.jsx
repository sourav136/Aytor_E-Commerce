import React, { useState } from "react";
import "../ViewItem/ViewItem.css";
import Rating from "../../assets/images/Rating.png";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useWishlist } from "../Context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../Context/CartContext.jsx';

const ViewItem = ({ cardHide, cardShow }) => {
  const { selectedItem, viewItemDetails } = useWishlist();
  const [itemNumber, setItemNumber] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const Add = () => {
    if (itemNumber < 5) {
      setItemNumber((prev) => prev + 1);
    }
  };

  const Decrease = () => {
    if (itemNumber > 1) {
      setItemNumber((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedItem) return; // ✅ Ensure selectedItem exists before using it
    addToCart({ ...selectedItem, quantity: itemNumber });
    navigate("/shop/cart");
  };

  return (
    <div className={`view-card-container ${cardShow ? "view-card-show" : ""}`}>
      {selectedItem ? ( // ✅ Handle null case in JSX instead of early return
        <div className="view-card">
          <img src={selectedItem.image} alt={selectedItem.name} className="view-card-image" />

          <div className="view-card-content">
            <h5>{selectedItem.name}</h5>
            <p>${selectedItem.price.toFixed(2)}</p>

            <div className="card-rating">
              <img src={Rating} alt="Rating" />
            </div>

            <div className="item-quantity">
              <button className="item-add" onClick={Add}><FaPlus /></button>
              <input type="text" value={itemNumber} readOnly className="item-number" />
              <button className="item-decrease" onClick={Decrease}><FaMinus /></button>
            </div>

            <button className="add-to-cart" onClick={handleAddToCart}>
              Add To Cart <MdAddShoppingCart />
            </button>
          </div>

          <div className="view-card-cross" onClick={() => {
            cardHide();
            viewItemDetails(null);
          }}>
            <RxCross1 className="view-card-cross-icon" />
          </div>
        </div>
      ) : (
        <p className="no-item-selected">No item selected.</p> // ✅ Show a fallback message instead of breaking hooks order
      )}
    </div>
  );
};

export default ViewItem;
