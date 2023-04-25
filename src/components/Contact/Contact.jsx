import React, { useContext, useRef } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import toast, { Toaster } from 'react-hot-toast';
import stavit from "../../img/stavit.png";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const handleSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!form.current || !form.current.user_name.value.trim() || !form.current.user_email.value.trim() || !form.current.message.value.trim()) {
            toast(
                (t) => (
                    <span className="textSpan">
                        <img src={stavit} alt="" className="stavitImg" />
                        Please fill in all input fields to send me a message
                        <button onClick={() => toast.dismiss(t.id)}>Close</button>
                    </span>
                )
            );
            return;
        }
        if (!emailRegex.test(form.current.user_email.value)) {
            toast(
                (t) => (
                    <span className="textSpan">
                        <img src={stavit} alt="" className="stavitImg" />
                        Invalid email address
                        <button onClick={() => toast.dismiss(t.id)}>Close</button>
                    </span>
                )
            );
            return;
        } else {
            // Send the message to my email
            const message = `Name: ${form.current.user_name.value}\nEmail: ${form.current.user_email.value}\nMessage: ${form.current.message.value}`;
            const recipient = 'stavitmaimoni@gmail.com';
            const subject = `New message from ${form.current.user_name.value}`;
            const body = encodeURIComponent(message);
            const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
            window.open(mailtoLink);
            toast(
                (t) => (
                    <span className="textSpan">
                        <img src={stavit} alt="" className="stavitImg" />
                        Thank you very much for your message, have a great day 😉
                        <button onClick={() => toast.dismiss(t.id)}>Close</button>
                    </span>
                )
            );
        }
    }

    return (
        <div className="contact-form" id="contact">
            <Toaster position="top-center" />
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="button" value="Send" className="sendButton" onClick={handleSubmit} />
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
