import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to='/' className='nav-home'>Home</NavLink>
      <NavLink to='/wishlist' className='nav-wishlist'>Wishlist</NavLink>
    </nav>
  );
}

export default NavBar;
