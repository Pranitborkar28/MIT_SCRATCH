// src/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <h1 style={{ margin: 0 }}>Sprite Manager</h1>
            <p style={{ margin: 0 }}>Effortlessly control and position your sprites!</p>
        </nav>
    );
};

// Navbar styles
const navbarStyle = {
    backgroundColor: '#1f2937',
    color: '#f9fafb',
    padding: '15px',
    textAlign: 'center',
};

export default Navbar;
