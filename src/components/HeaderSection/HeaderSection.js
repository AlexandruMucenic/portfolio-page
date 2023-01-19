import ScrollDownLeft from '../ScrollDownLeft/ScrollDownLeft';
import ScrollDownRight from '../ScrollDownRight/ScrollDownRight';

import './headerSection.css';

function Header({ children }) {
  return (
    <header className='header-container' id='about'>
      <h1 className='header-title'>
        <span>H</span>
        <span>i</span>
        <span>,</span>
        <br />
        <span>I</span>
        <span>'</span>
        <span>m</span>
        <span>A</span>
        <span>l</span>
        <span>e</span>
        <span>x</span>
      </h1>
      <p className='header-description'>
        Web development enthusiast, at the beginning of his carrer. Welcome on
        my presentation page!
      </p>
      <div className='header-child-container'>{children}</div>
      <ScrollDownLeft />
      <ScrollDownRight />
    </header>
  );
}

export default Header;
