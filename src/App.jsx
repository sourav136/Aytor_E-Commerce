import React from 'react';
import Nav from './components/NavBar/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AllRoutes from './components/NavBar/AllRoutes';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Grid from './components/Grid/Grid';
import NotFound from './components/NotFound/NotFound';
import Wishlist from './components/Wishlist/Wishlist';
import {CartProvider} from './components/Context/CartContext'
import { WishlistProvider } from "./components/Context/WishlistContext";
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <div>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <ScrollToTop/>
            <Nav/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/shop/grid" element={<Grid />} />
              <Route path="/shop/cart" element={<Cart />} />
              <Route path="/shop/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router >
        </CartProvider>
      </WishlistProvider>
    </div>
  );
};

export default App;