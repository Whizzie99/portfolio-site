import { Link } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
        <footer>
            <p>
                copyright &copy; {year}. 
                <Link to={{ pathname: "https://github.com/whizzie99" }} target="_blank">
                    wisdom obioma
                </Link>
            </p>
        </footer>
    );
}
 
export default Footer;