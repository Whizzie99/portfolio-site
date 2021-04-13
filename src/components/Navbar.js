import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/my_logo.png';




const Navbar = () => {

    const [show, setShow] = useState(false);

    const showMenu = () => {
        setShow(true);
    }

    const hideMenu = () => {
        setShow(false);
    }
    
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-items">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>

                    <div onClick={showMenu} className="hamburger-menu">
                        <i className="fas fa-bars fa-2x"></i>
                    </div>
                </div>
            </div>
            
            {
                show ?
                <div className="menu">
                    <div className="container">
                        <div className="close-section">
                            <div onClick={hideMenu} className="close">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                    <div className="menu-items">
                        <ul>
                            <li className="menu-item">
                                <Link onClick={hideMenu} to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link onClick={hideMenu} to="/about">About</Link>
                            </li>
                            <li className="menu-item">
                                <Link onClick={hideMenu} to="/projects">Projects</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                : null
            }

        </nav>
    );
}
 
export default Navbar;