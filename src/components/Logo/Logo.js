import logo from '../../imgs/logo.png';
import './logo.css';

function Logo() {
  return (
    <div className='logo-container'>
      <img src={logo} alt='logo' />
      <h3>Alex</h3>
      <h3>Mucenic</h3>
      <span>Web developer</span>
    </div>
  );
}
export default Logo;
