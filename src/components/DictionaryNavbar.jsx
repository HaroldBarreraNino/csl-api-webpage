import { Link } from 'react-router';
import useGifToolTip from '../hooks/useGifToolTip.js';
import ToolTipGif from './ToolTipGif.jsx';
import './Navbar.css';

const DicionaryNavbar = () => {

  const { gifUrl, position, showGif, hideGif } = useGifToolTip(); 

  return (
    <nav className="nav-container">
      <div className="nav-logo">CSL Dictionary</div>

      <div className="nav-links">
        <Link to="/" className="nav-btn" onMouseEnter={(e) => showGif('inicio', e)} onMouseLeave={hideGif}>Go Back to Home Page</Link>
        <ToolTipGif gifUrl={gifUrl} position={position} />
      </div>
    </nav>
  );
};

export default DicionaryNavbar;
