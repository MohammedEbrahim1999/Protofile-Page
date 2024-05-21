import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';
import Lottie from "lottie-react";
import DoneAnimation from '../../animation/done.json';
import ContactUs from '../../animation/Contact Us.json';

const Contact = () => {
    const [state, handleSubmit] = useForm("xoqgbaea");
    return (
        <section className="contact-us" id="contact">
            <h1 className="title"> <span className="icon-envelope"></span> Contact Me</h1>
            <p className="subtitle"> Contact Me for more information.</p>
            <div className="contact-form flex" style={{justifyContent: "space-between",}}>
                <form action="" className="" onSubmit={handleSubmit}>
                    <div className="flex">
                        <label htmlFor="email"> Email Address: </label>
                        <input autoComplete="off" type="email" name="email" id="email" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div style={{ marginTop: "24px" }} className="flex">
                        <label htmlFor="message"> Your Message: </label>
                        <textarea name="message" id="message" required></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button type="submit" className="submit" disabled={state.submitting}> {state.submitting ? "Submiting....." : "Submit"} </button>
                    {state.succeeded && (<p className="submit-message flex"> <Lottie className="done-animation" loop= {false} animationData={DoneAnimation} /> Your Message Has Been Sent Successfully 👌.</p>)}
                </form>
                <div className="animation"> 
                    <Lottie className="contact-animation" animationData={ContactUs} />
                </div>
            </div>
        </section>
    );
}
export default Contact;