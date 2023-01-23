import Button from '../Button/Button';

import cluj from '../../imgs/Cluj.png';
import './contactSection.css';

function ContactSection() {
  return (
    <footer className='contact-container' id='contact'>
      <div className='contact-form-container'>
        <h2 className='contact-form-title'>Contact Me</h2>
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
        <div className='location-container'>
          <h3>My Location</h3>
          <p>Cluj-Napoca</p>
          <p>Romania</p>
          <p>Lat: 46.770439</p>
          <p>Long: 23.591423</p>
        </div>
        <img src={cluj} alt='Cluj-Napoca' />
      </div>
    </footer>
  );
}

export default ContactSection;
