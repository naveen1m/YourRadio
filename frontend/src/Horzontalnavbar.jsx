import React from 'react';
import { Link } from 'react-router-dom'


const Horzontalnavbar = () => {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff',
    };

    const linkHoverStyle = {
        textDecoration: 'underline',
    };

    return (
        <div style={navbarStyle}>
            <Link to="/" style={linkStyle}>
                Home
            </Link>
            <Link to="/search" style={linkStyle}>
                Search
            </Link>
            <Link to="/podcast" style={linkStyle}>
                Podcast
            </Link>
            <Link to="/notification" style={linkStyle}>
                Notification
            </Link>
            {/* Add more navigation links as needed */}
        </div>
    );
};

export default Horzontalnavbar;
