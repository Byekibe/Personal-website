import { useEffect, useState } from "react";
import Spinner from '../components/spinner/Spinner.jsx';

const ContactForm = () => {
    const text = "Send Message"
    const [status, setStatus] = useState(text);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [backendMessage, setBackendMessage] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => { 
            setBackendMessage(null)
        }, 4000);

        return () => clearTimeout(timer);
    }, [backendMessage]);

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
        const url = "http://localhost:7000/api/mail"
        const postData = async () => {
            const reqOpts = {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ name: name, email: email, message: message })
            };

            const res = await fetch(url, reqOpts);
            const data = await res.json();
            setBackendMessage(data.msg)

            setEmail("");
            setName("");
            setMessage("");
        };

        postData();
    }


    return (
        <>
        {
            backendMessage !== null && (
                <div className="alert alert-success" role="alert">
                    {backendMessage}
                </div>
            )
        }
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
        </>
    );
};

export default ContactForm;