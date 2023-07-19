import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <Link to="/" className="navbar-brand my-font" href="#">Peter</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contact</Link>
                </li>
                <li className="nav-item">
                <Link to="/hire" className="nav-link">Build products</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Header;