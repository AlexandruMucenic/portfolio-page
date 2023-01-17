import './headerSection.css';

function Header({ children }) {
  return (
    <header className='header-container'>
      <h1 className='header-title'>
        <span>Hi,</span>
        <br />
        <span>I'm Alex</span>
      </h1>
      <p className='header-description'>
        Web development enthusiast, at the beginning of his carrer. Welcome on
        my presentation page!
      </p>
      <div className='header-child-container'>{children}</div>
    </header>
  );
}

export default Header;
