import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {validateEmail } from '../utils/helper';


 function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) =>{
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

    if (inputType === 'email') {
        setFullName(inputValue);
      } else if (inputType === 'userName') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !fullName) {
            setErrorMessage('Email or name is invalid');
            return;
    }
        setFullName('');
        setEmail('');
        setMessage('');
    };



  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Feel free to contact me with any questions or concerns.
      </p>
      <form className ="form">
        <div>
          <input
          value={fullName}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="Email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email@yahoo.com"
        />
        <br/>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <br/>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;