import React from 'react'
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import contact from '../images/contact.png';
import {Footer} from './Footer';

export const Contact = () => {
    const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_y8pthxf','template_qery7fj', toSend,'1fZkOBLDxizq6sVW_')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
       setToSend({ ...toSend,from_name: '',
       to_name: '',
       message: '',
       reply_to: '', });
	}, function(err) {
	   console.log('FAILED...', err);
	});
  };


  return (
    <>
    <div id="contacts" className='row contactSection'>
    <div className='col-lg-6 contactIMG'>
        <img src={contact} className="contactImage img-fluid"/>
    </div>
    <div className='col-lg-6 Email'>
        <form onSubmit={onSubmit}>
            <div className='getintouch'>
               <h1> Get in Touch </h1>
            </div>
        <div className='form-group'>  
        <input
        className='from form-control'
        type='text'
        name='from_name'
        placeholder='From:'
        value={toSend.from_name}
        onChange={handleChange}
        required
    />
    </div>
        <div>
        <input
        className='to form-control'
        type='text'
        name='to_name'
        placeholder='To:'
        value={toSend.to_name}
        onChange={handleChange}
   
    />
        </div>
    <div>
     <textarea rows = "5" cols = "60" name='message'
             className='message form-control'
             type='text'
             
             placeholder='Your message'
             value={toSend.message}
             onChange={handleChange}
             required
     />
    </div>
    <div>
    <input
        className='yourEmail form-control'
        type='email'
        name='reply_to'
        placeholder='Your email'
        value={toSend.reply_to}
        onChange={handleChange}
        required
    />
    </div>
    <button type='submit' className="btn btn-outline-primary">Send</button>
    </form>
    </div>
    <Footer />
    </div>

    </>
  )
}
