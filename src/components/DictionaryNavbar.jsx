import { Link } from 'react-router';
import './Navbar.css';

const DicionaryNavbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">CSL Dictionary</div>

      <div className="nav-links">
        <Link to="/" className="nav-btn">Go Back to Home Page</Link>
        {/* <button className="nav-btn">Go Back to Home Page</button> */}
      </div>
    </nav>
  );
};

export default DicionaryNavbar;