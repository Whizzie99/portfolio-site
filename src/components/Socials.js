import { Link } from 'react-router-dom';


const Socials = () => {
    return ( 
        <ul>
            <li className="link-item">
                <Link to={{ pathname: "https://github.com/whizzie99" }} target="_blank">
                    <i className="fab fa-github"></i>
                </Link>
            </li>
            <li className="link-item">
                <Link to={{ pathname: "https://www.linkedin.com/in/wisdom-obioma-244191208/" }} target="_blank">
                    <i className="fab fa-linkedin"></i>
                </Link>
            </li>
            <li className="link-item">
                <Link to={{ pathname: "https://twitter.com/_whizzie" }} target="_blank">
                    <i className="fab fa-twitter"></i>
                </Link>
            </li>
        </ul>
    );
}
 
export default Socials;