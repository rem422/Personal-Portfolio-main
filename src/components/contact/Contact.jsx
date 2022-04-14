import React, { useRef } from 'react';
import'./Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  // EMAILJS
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7j1gl8e', 'template_0ebwauk', form.current, 'VkSTmqvCFsQnrbFsM')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>contact Me</h2> 
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abc@example.com</h5>
            <a href="mailto:remsimiyu@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>John Doe</h5>
            <a href="https://www.facebook.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+123456789" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;