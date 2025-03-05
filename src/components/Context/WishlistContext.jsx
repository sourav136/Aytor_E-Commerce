import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleWishlist = (item) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some(wishItem => wishItem.id === item.id)) {
        return prevWishlist.filter(wishItem => wishItem.id !== item.id);
      } else {
        return [...prevWishlist, item];
      }
    });
  };

  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id);
  };

  const viewItemDetails = (item) => {
    setSelectedItem(item);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist, viewItemDetails, selectedItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
