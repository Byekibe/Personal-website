import { useEffect, useState } from "react";
import Spinner from '../components/Spinner.jsx';

const ContactForm = () => {
    const text = "Send Message"
    const [status, setStatus] = useState(text);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => { 
            setStatus(text)
        }, 2000);

        return () => clearTimeout(timer);
    }, [status]);

    const handleClick = () => {
        setTimeout(() => {
            setStatus("Sending...");
        }, 2000)

        setTimeout(() => {
            setStatus("Sent");
        }, 4000)

        setTimeout(() => {
            setStatus(text);
        }, 6000)

        setTimeout(() => {
            window.location = "/message"
        }, 6000)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }


    return (
        <div className="card card-custom-width p-3">
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="floatingName" 
                    placeholder="Peter" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <label htmlFor="floatingPassword">Name</label>
                </div>
                <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control focus-ring-light" 
                    id="floatingInput" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                <textarea 
                    className="form-control text-area-height" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea" 
                    style={{ height: "10rem" }} 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
                </div>
                <button className="btn btn-outline-secondary" type="submit">{status}</button>
            </form>
        </div>
    );
};

export default ContactForm;