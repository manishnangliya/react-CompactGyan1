import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        < >
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
            <div className="container">
                <Link className="navbar-brand" to="/react-CompactGyan1">
                    <span style={{color: "#5e9693"}}>Compact_</span>
                    <span style={{color: "#fff"}}>Gyan</span></Link>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/react-CompactGyan1">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3 me-lg-0">
                        <a className="nav-link"  rel="noopener noreferrer" target="_blank" href="https://www.google.com/">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                        <a className="nav-link" rel="noopener noreferrer" target="_blank" href="https://www.google.com/">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" rel="noopener noreferrer" target="_blank" href="https://www.google.com/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
