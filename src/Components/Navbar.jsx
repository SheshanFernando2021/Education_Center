import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import burger from "../assets/hamburger.svg";
import "./navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [signup, setSignup] = useState(false);
    const [login, setLogin] = useState(false);

    const handleCloseSignup = () => {
        setSignup(false);
    }

    const handleCloseLogin = () => {
        setLogin(false);
    }

    return (
        <>
            <div className='all'>
                <div className='bg'>
                    <div className='menubar'>
                        &nbsp;&nbsp;
                        <h2>Education Center</h2>&nbsp;&nbsp;&nbsp;
                        <img src={burger} alt="" onClick={() => setShow(!show)} />
                        {show ? (
                            <div className='drop' id='drops'>
                                <ul>
                                    <li style={{ backgroundColor:"black"}}><Link to="Home" smooth={true} offset={-100} >Home</Link></li>
                                    <li style={{ backgroundColor:"black"}}><Link to="AboutUs" smooth={true} offset={-100} >About Us</Link></li>
                                    <li style={{ backgroundColor:"black"}}><Link to="Students" smooth={true}offset={-100}>Students</Link></li>
                                    <li style={{ backgroundColor:"black"}}><Link to="ContactUs" smooth={true}>Contact Us</Link></li>
                                    <li onClick={() => { setLogin(!login); setSignup(false); }}>Sign In</li>
                                    <li onClick={() => { setSignup(!signup); setLogin(false); }} style={{ backgroundColor: "black", color: "white" }}>Sign Up</li>
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className='navbar-links'>
                    <div className='logo'><h1>Education Center</h1></div>
                    <div className='menu-links'>
                        <Link to="Home" smooth={true} offset={-100}><p>Home</p></Link>
                        <Link to="AboutUs" smooth={true} offset={-140}><p>About Us</p></Link>
                        <Link to="Students" smooth={true} offset={-240}><p>Students</p></Link>
                        <Link to="ContactUs" smooth={true}><p>Contact Us</p></Link>
                        <p onClick={() => { setLogin(!login); setSignup(false); }}>Sign In</p>
                        <p onClick={() => { setSignup(!signup); setLogin(false); }} style={{ color: "white", padding: "5px", borderRadius: "5px", marginTop: "-5px" }}>Sign Up</p>
                    </div>
                </div>

                {signup ? (
                    <div className='signup-popup'>
                        <button onClick={handleCloseSignup} style={{ position: "absolute", top: "5px", right: "5px", color: "black", border: "none" }}>close</button>

                        <p style={{ marginTop: "10px" }}>Sign Up</p>
                        <p style={{ marginTop: "10px" }}>username: <input type="text" required style={{ borderRadius: "5px", border: "none" }} /></p>
                        <p style={{ marginTop: "10px" }}>email: <input type="email" placeholder='someone@gamil.com' required style={{ borderRadius: "5px", border: "none" }} /></p>
                        <p style={{ marginTop: "10px" }}>password: <input type="password" required style={{ borderRadius: "5px", border: "none" }} /></p>
                    </div>
                ) : null}

                {login ? (
                    <div className='signup-popup'>
                        <button onClick={handleCloseLogin} style={{ position: "absolute", top: "5px", right: "5px", color: "black", border: "none" }}>close</button>
                        <p style={{ marginTop: "10px" }}>Sign in</p>
                        <p style={{ marginTop: "10px" }}>email: <input type="email" placeholder='someone@gamil.com' required style={{ borderRadius: "5px", border: "none" }} /></p>
                        <p style={{ marginTop: "10px" }}>password: <input type="password" required style={{ borderRadius: "5px", border: "none" }} /></p>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default Navbar;