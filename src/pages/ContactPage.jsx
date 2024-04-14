import { useState } from "react";

export default function ContactForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };



    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your Name here."
                    value={input}
                    name="name"
                    className="contact-input"
                    onChange={handleChange}
                ></input>

                <input
                    type="text"
                    placeholder="Enter your Email here."
                    value={input}
                    name="email"
                    className="contact-input"
                    onChange={handleChange}
                ></input>

                <input
                    type="text"
                    placeholder="Enter your message here."
                    value={input}
                    name="message"
                    className="contact-input"
                    onChange={handleChange}
                ></input>

            </form>
        </div>
    )
}