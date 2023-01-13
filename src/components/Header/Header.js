import './header.css';

function Header({ title, description, children }) {
  return (
    <header className='header-container'>
      <h1 className='header-title'> {title}</h1>
      <p className='header-description'>{description}</p>
      <div className='header-child-container'> {children} </div>
    </header>
  );
}

export default Header;
