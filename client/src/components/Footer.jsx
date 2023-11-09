import { Link } from 'react-router-dom';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import SmallSpinner from './spinner/SmallSpinner.jsx';

const Footer = () => {
    const [year, setYear] = useState(null);

    // const url = "/api/date_year"
    const url = "/api/date_year";
    useEffect(() => {
        const fetchYear = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setYear(data.msg)

        };

        fetchYear();
    }, [])
    return (
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; {year === null? <SmallSpinner /> : year} Peter Kibet Byegon</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><Link target='_blank' to="https://twitter.com/kibetpete" className="text-body-secondary" href="#"><BsTwitter className="bi" width="24" height="24" /></Link></li>
                    <li className="ms-3"><Link target='_blank' to="https://github.com/Byekibe" className="text-body-secondary" href="#"><BsGithub className="bi" width="24" height="24" /></Link></li>
                    <li className="ms-3"><Link target='_blank' to="https://www.linkedin.com/in/byekibe/"  className="text-body-secondary" href="#"><BsLinkedin className="bi" width="24" height="24" /></Link></li>
                    </ul>
                </footer>
            </div>
    );
};

export default Footer;
