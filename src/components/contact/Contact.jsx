import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {MdOutlineSms} from 'react-icons/md'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dulm1b7', 'template_7yiebsl', form.current, 'HaxTy6L--eQyiQZUM')
      .then((result) => {
          form.current.reset();
          setMessageSent(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nguyen133@usf.edu</h5>
            <a href="mailto:nguyen133@usf.edu" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref = {form} onSubmit = {sendEmail}>
          <input type="text" name="name" placeholder= "Your Full Name" required />
          <input type="email" name = "email" placeholder='Your Email' required />
          <textarea type="message" name = "message" rows = "7" placeholder='Your Message' required ></textarea>
          <button type = 'submit' className='btn btn-primary'>{messageSent ? "✔ Message sent" : "Send message!"}</button>
        </form>
      
      </div>
    </section>
  )
}


export default Contact
