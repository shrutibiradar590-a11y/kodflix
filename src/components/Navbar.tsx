import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show ? 'navbar--black' : ''}`}>
      <div className="navbar__contents">
        <div className="navbar__left">
          <h1 className="navbar__logo">KODFLIX</h1>
          <ul className="navbar__links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="navbar__right">
          <span className="navbar__icon">🔍</span>
          <span className="navbar__icon">🔔</span>
          <div className="navbar__avatar">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
              alt="Avatar" 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
