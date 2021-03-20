import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <header className="Header">
            <a
                className="Header-link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={logo} className="Header-logo" alt="logo" />
                <sup className="Header-logo__sup">beta</sup>
            </a>
        </header>
    );
}
