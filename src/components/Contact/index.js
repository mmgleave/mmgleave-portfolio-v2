import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            setFormState({ [event.target.name]: event.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section>
            <h1>
                Contact Me
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label htmlFor="name">Name:</label><br></br>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <br></br>
                <div className='inputDiv'>
                    <label htmlFor="email">Email Address:</label><br></br>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <br></br>
                <div className='inputDiv'>
                    <label htmlFor="message">Message:</label><br></br>
                    <textarea name="message" rows="3" defaultValue={message} onBlur={handleChange} />
                </div>
                <br></br>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;