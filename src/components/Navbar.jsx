import { Link } from 'react-router';
import useGifToolTip from '../hooks/useGifToolTip.js';
import ToolTipGif from './ToolTipGif.jsx';
import './Navbar.css';

const Navbar = () => {

  const { gifUrl, position, showGif, hideGif } = useGifToolTip(); 

  return (
    <nav className="nav-container">
      <div className="nav-logo">CSL Dictionary</div>

      <div className="nav-links">
        <a href="/dictionary" className="nav-link" onMouseEnter={(e) => showGif('diccionario', e)} onMouseLeave={hideGif}>Dictionary</a>
        <Link to="/create" className="nav-btn" onMouseEnter={(e) => showGif('modificar traduccion', e)} onMouseLeave={hideGif}>Modify Traduction</Link>
        <ToolTipGif gifUrl={gifUrl} position={position} />
      </div>
    </nav>
  );
};

export default Navbar;
