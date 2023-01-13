import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Social from '../Social/Social';
import './menu.css';

function Menu() {
  return (
    <aside className='menu-container'>
      <Logo />
      <Navbar />
      <Social />
    </aside>
  );
}

export default Menu;
