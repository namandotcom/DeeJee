import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"

const Header = () => {
    return (
        <>
            <div className='bgi1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-5">
                            <Link className="nav-link fs-2 hlogo1 text-white ms-5" to="/">DeeJee<span style={{ color: "blueviolet" }}>.</span></Link>
                        </div>
                        <div className="col-md-6 pt-5">
                            <nav className="navbar navbar-expand-lg bg-transparent">
                                <div className="container-fluid">
                                    <button className="navbar-toggler bg-white mar_manh" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse text-left mar_manh1" id="navbarTogglerDemo01">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link className="nav-link text-white fs-5 ms-3" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white fs-5 ms-3" to="djs">DJs</Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link className="nav-link text-white fs-5 ms-3" to="/">Show</Link> */}
                                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item dropdown">
                                                            <Link className="nav-link dropdown-toggle text-white fs-5 ms-3" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Shows
                                                            </Link>
                                                            <ul className="dropdown-menu dropdown-menu-dark ms-3">
                                                                <li><Link className="dropdown-item text-white fs-5" to="events">Events</Link></li>
                                                                <li><Link className="dropdown-item text-white fs-5" to="podcasts">Podcast</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white fs-5 ms-3" to="about-us">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white fs-5 ms-3" to="contact-us">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div align="center" style={{ marginTop: "12%" }}>
                    <h1 className='text-white fw-semibold font-monospace display-2'>TURN ON THE <br /> FEELING WITH MUSIC</h1>
                </div>
            </div>
        </>
    )
}

export default Header