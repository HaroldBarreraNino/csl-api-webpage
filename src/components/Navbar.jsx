import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">CSL Dictionary</div>

      <div className="nav-links">
        <a href="/dictionary" className="nav-link">Dictionary</a>
        <button className="nav-btn">Modify Traduction</button>
      </div>
    </nav>
  );
};

export default Navbar;