import { useState } from "react";

export default function ContactForm(props) {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameInput('');
        setEmailInput('');
        setMessageInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };



    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>

                
                <div>
                    <p>
                        Name: {nameInput}
                        <input
                        type="text"
                        placeholder="Enter your Name here."
                        value={nameInput}
                        name="name"
                        className="contact-input"
                        onChange={(e) => { setNameInput(e.target.value) }}
                    ></input>
                    </p>
                    <p>
                        Email: {emailInput}
                        <input
                        type="text"
                        placeholder="Enter your Email here."
                        value={emailInput}
                        name="email"
                        className="contact-input"
                        onChange={(e) => { setEmailInput(e.target.value) }}
                    ></input>
                    </p>
                    <p>
                        Message: {messageInput}
                        <input
                    type="text"
                    placeholder="Enter your message here."
                    value={messageInput}
                    name="message"
                    className="contact-input"
                    onChange={(e) => { setMessageInput(e.target.value) }}
                ></input>
                    </p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}