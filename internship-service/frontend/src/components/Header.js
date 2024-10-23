import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-light p-3">
            <h1>Job Application Portal</h1>
            <nav>
                <Link className="btn btn-link" to="/">Home</Link>
                <Link className="btn btn-link" to="/jobs">Jobs</Link>
                <Link className="btn btn-link" to="/applications">Applications</Link>
                <Link className="btn btn-link" to="/profile">Profile</Link>
            </nav>
        </header>
    );
}

export default Header;