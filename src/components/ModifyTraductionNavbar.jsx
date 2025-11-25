import { Link } from 'react-router';
import './Navbar.css';

const ModifyTraductionNavbar = () => {
    return (
        <nav className="nav-container">
            <div className="nav-logo">CSL Dictionary</div>

            <div className="nav-links">
                <a href="/dictionary" className="nav-link">Dictionary</a>
                <Link to="/" className="nav-btn">Go Back to Home Page</Link>
            </div>
        </nav>
    );
};

export default ModifyTraductionNavbar;