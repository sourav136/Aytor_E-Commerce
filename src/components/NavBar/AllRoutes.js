import Home from '../Home/Home'
import Grid from '../Grid/Grid'
import Cart from '../Cart/Cart'
import About from '../About/About'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import NotFound from '../NotFound/NotFound'
import Wishlist from '../Wishlist/Wishlist'

const AllRoutes = [
    {
      path: '/',
      title: 'Home',
      component: Home,
    },
    {
      path: '/shop',
      title: 'Shop',
      subcomponents: [
        {
            path: '/shop/grid', // Ensure this path is correct
            title: 'Grid',
            component: Grid,
          },
          {
            path: '/shop/cart', // Ensure this path is correct
            title: 'Cart',
            component: Cart,
          },
          {
            path: '/shop/wishlist', // Ensure this path is correct
            title: 'Wishlist',
            component: Wishlist,
          },
      ],
    },
    {
      path: '/about',
      title: 'About',
      component: About,
    },
    {
      path: '/blogs',
      title: 'Blogs',
      component: Blogs,
    },
    {
      path: '/contact',
      title: 'Contact',
      component: Contact,
    },
    {
      path: '*',
      title: '',
      component: NotFound,
    },
  ];
  
  export default AllRoutes;
