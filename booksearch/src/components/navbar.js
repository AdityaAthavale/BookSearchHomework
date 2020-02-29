import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Google Book Search</a>
                <Link to="/" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
                <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </nav>
        )
    }
}

export default Navbar