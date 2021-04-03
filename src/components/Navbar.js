import { Link } from 'react-router-dom';
import logo from '../assets/imgs/my_logo.png';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-items">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>

                    <div className="hamburger-menu">
                        <i className="fas fa-bars fa-2x"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;