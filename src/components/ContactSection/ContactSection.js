import Button from '../Button/Button';
import './contactSection.css';

function ContactSection() {
  return (
    <section className='contact-container'>
      <h2 className='contact-title'>Contact</h2>
      <p className='contact-description'></p>
      <form className='contact-form'>
        <label>Name</label>
        <input />
        <label>Email</label>
        <input />
        <label>Subject</label>
        <input />
        <label>Message</label>
        <input />
        <Button text='Send Message!' />
      </form>
    </section>
  );
}

export default ContactSection;
