import './button.css';

function Button({ text, src }) {
  return (
    <a href={src}>
      <button className='btn'>{text}</button>
    </a>
  );
}

export default Button;
