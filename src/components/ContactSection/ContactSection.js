import Button from '../Button/Button';
import './contactSection.css';

function ContactSection() {
  return (
    <footer className='contact-container' id='contact'>
      <div className='contact-form-container'>
        <h2 className='contact-form-title'>Contact</h2>
        <form className='contact-form'>
          <div className='name-email-container'>
            <input className='contact-form-input' placeholder='Name' />
            <input className='contact-form-input' placeholder='Email' />
          </div>
          <input className='contact-form-input' placeholder='Subject' />
          <textarea
            className='contact-form-textarea'
            placeholder='Message'
          ></textarea>
        </form>
        <Button text='Send Message!' />
      </div>

      <div className='map-container'>
        <canvas className='map-canvas'>Here will be the map</canvas>
      </div>
    </footer>
  );
}

export default ContactSection;
