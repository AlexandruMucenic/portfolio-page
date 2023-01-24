import './button.css';

function Button({ text, src, type }) {
  return (
    <a href={src}>
      <button className='btn' type={type}>
        {text}
      </button>
    </a>
  );
}

export default Button;
