import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Button from '../Button/Button';

import cluj from '../../imgs/Cluj.png';
import './contactSection.css';

function ContactSection() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [validationMessage, setValidationMesage] = useState('');

  const form = useRef();

  console.log(userName);

  const handleOnSubmit = e => {
    e.preventDefault();

    if (userName && userEmail && userSubject && userMessage) {
      emailjs
        .sendForm(
          process.env.REACT_APP_serviceID,
          process.env.REACT_APP_templateID,
          form.current,
          process.env.REACT_APP_publicKey
        )
        .then(
          () => {
            setValidationMesage('Message sent successfully');

            setUserName('');
            setUserEmail('');
            setUserSubject('');
            setUserMessage('');
          },
          error => {
            setValidationMesage(error.text);
          }
        );
      e.target.reset();
    } else {
      setValidationMesage('Please fill in all the fields');
    }

    setTimeout(() => setValidationMesage(''), 2500);
  };

  return (
    <section className='contact-container' id='contact'>
      <div className='contact-form-container'>
        <h2 className='contact-form-title'>Contact Me</h2>
        <form ref={form} className='contact-form' onSubmit={handleOnSubmit}>
          <div className='name-email-container'>
            <input
              name='from_name'
              className='contact-form-input'
              type='text'
              placeholder=' 🧑‍💻 Name'
              onChange={e => setUserName(e.target.value)}
            />
            <input
              name='from_email'
              className='contact-form-input'
              type='email'
              placeholder='✉️ Email'
              onChange={e => setUserEmail(e.target.value)}
            />
          </div>
          <input
            name='from_subject'
            className='contact-form-input'
            type='text'
            placeholder='Subject'
            onChange={e => setUserSubject(e.target.value)}
          />
          <textarea
            name='from_message'
            className='contact-form-textarea'
            placeholder='Message'
            onChange={e => setUserMessage(e.target.value)}
          ></textarea>
          <span className='validation-message'>{validationMessage}</span>
          <Button text='Send Message!' type='submit' />
        </form>
      </div>
      <div className='map-container'>
        <div className='location-container'>
          <h3>My Location</h3>
          <span>Cluj-Napoca</span>
          <span>Romania</span>
          <span>Lat: 46.770439</span>
          <span>Long: 23.591423</span>
        </div>
        <img src={cluj} alt='Cluj-Napoca Map' />
      </div>
    </section>
  );
}

export default ContactSection;
