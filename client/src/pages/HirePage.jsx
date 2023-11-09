import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";

const HirePage = () => {
    // const url = "/api/hire"
    const url = "/api/hire";
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [code, setCode] = useState("")

    const [backendMessage, setBackendMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = async () => {
            const reqOpts = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location: location, email: email, address: address, city: city, country: country, code: code })
            }

            const res = await fetch(url, reqOpts);
            const data = await res.json();
            setBackendMessage(data.msg);
        };

        postData();
    }
    return (
        <>
            <Header />
            <div className="my-4 hire-hr container mx-auto">
                <p className="font-poppins text-center fs-4 lh-lg fw-lighter">You found a gem & you are making a great addition to your team, always positive.</p>
                <p className="font-poppins text-center fs-4 lh-lg fw-lighter"><strong>A few steps and we are done.</strong></p>
            </div>
            <div className="custom-container mx-auto">
                <h2 className="text-center font-poppins">Build your Team & Products</h2>
                <form className="row g-3 custom-form-margin my-4" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="inputEmail4" 
                            placeholder="pete@pete.com" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Location</label>
                        <select 
                            className="form-select" 
                            aria-label="Default select example" 
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            required
                        >
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="OnSite">On site</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputAddress" 
                            placeholder="1234 Anytown" 
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputCity" 
                            placeholder="Optional"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="country" 
                            placeholder="Optional"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip / Postal code</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputZip" 
                            placeholder="Optional"
                            value={code}
                            onChange={e => setCode(e.target.value)}
                        />
                    </div>
                    {/* <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <button type="submit" className="btn btn-outline-secondary">Send proposal</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};


export default HirePage;
