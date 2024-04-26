import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css'

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_b56921a', 'template_5awj47f', form.current, {
                publicKey: 'OCp0r2MH9vTjDstnv',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message Sent')
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className='form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    )
};