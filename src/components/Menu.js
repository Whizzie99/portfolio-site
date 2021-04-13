import { Link } from 'react-router-dom';

const Menu = () => {
    // const menu = document.querySelector('.menu');

    // const hideMenu = () => {
    //     menu.style.display = 'none';
    // }

    return (
        <div className="menu">
            <div className="container">
                <div className="close-section">
                    <div className="close">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
            <div className="menu-items">
                <ul>
                    <li className="menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#">About</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#">Projects</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Menu;