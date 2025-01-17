import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Vista Developer
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                aria-expanded={!isCollapsed}
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={handleToggle}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/story" onClick={handleToggle}>
                            Our Story
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/team" onClick={handleToggle}>
                            Team
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services" onClick={handleToggle}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" onClick={handleToggle}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
