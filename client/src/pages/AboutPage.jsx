import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const AboutPage = () => {
    const url = "http://localhost:7000/experience";

    const [pythonExperience, setPythonExperience] = useState(null);
    const [jsExperience, setJsExperience] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setPythonExperience(data.python_exp)
            setJsExperience(data.js_exp)
        };

        fetchData();
    }, [])
    return (
        <>
            <Header />
            <ScrollToTop />
            <h1 className="font-monospace text-center">About Me</h1>
            <div className="container">
                <div className="about-hr">
                    <p className="text-center fs-4 lh-lg fw-lighter">I now have {pythonExperience} year experience working with <strong>Python</strong> and {jsExperience} years with <strong>JavaScript</strong>.</p> 
                    <p className="text-center fs-4 lh-lg fw-lighter">I enjoy building software products with <strong>accessibility</strong>, <strong>security</strong> and <strong>progressiveness</strong> in mind.</p>
                    <p className="text-center fs-4 lh-lg fw-lighter"></p>
                </div>

                <div className="about-tech-start d-flex flex-column align-items-center about-hr">
                    <h3 className="font-monospace">Favorite tech stack</h3>
                    <ul className="text-center">
                        <li className="fs-4 lh-lg fw-lighter">Frontend: React & Bootstrap</li>
                        <li className="fs-4 lh-lg fw-lighter">Backend: Flask or Express</li>
                        <li className="fs-4 lh-lg fw-lighter">Database: MySQL, MongoDB, Redis</li>
                        <li className="fs-4 lh-lg fw-lighter">Cloud: Google Cloud Platform</li>
                        <li className="fs-4 lh-lg fw-lighter">Tools and Environments: Ubuntu, nginx, docker, git&github, graphql, mongoose, sqlalchemy, Figma</li>
                    </ul>
                </div>

                <div className="about-hr">
                    <h2 className="font-monospace text-center my-4">You are a click away from building your dream product.</h2>
                    <p className="text-center">Got a Project? <Link className="btn btn-outline-secondary" to="/hire">Hire Me</Link></p>

                </div>

                <div className="text-center interest">
                    <h2>Area of Interest</h2>
                    <ul>
                        <li className="fs-4 lh-lg fw-lighter">Containerization, Kubernetes & Networking</li>
                        <li className="fs-4 lh-lg fw-lighter">Perfomance and Caching algorithms</li>
                        <li className="fs-4 lh-lg fw-lighter">Authentication & Authorization</li>
                        <li className="fs-4 lh-lg fw-lighter">Micro services</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;