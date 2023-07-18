import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const AboutPage = () => {
    const url = "http://localhost:7000/experience";

    const [pythonExperience, setPythonExperience] = useState(null);
    const [jsExperience, setJsExperience] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
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
                <p>I now have {pythonExperience} year experience working with Python and {jsExperience} years with JavaScript.</p> 
                <p>I enjoy building software products with accessibility, security and progressiveness in mind.</p>

                <div className="about-tech-start">
                    <h3>Favorite tech stack: </h3>
                    <ul>
                        <li>Frontend: React & Bootstrap</li>
                        <li>Backend: Flask or Express</li>
                        <li>Cloud: Google Cloud Platform</li>
                        <li>Tools and Environments: Ubuntu, nginx, docker, git&github</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutPage;