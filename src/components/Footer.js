import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
import { useEffect, useRef } from 'react';

const Footer = () => {

    const year = new Date().getFullYear();
    const footerRef = useRef(null);

    useEffect(() =>{
        
        const footer = footerRef.current;

        gsap.from(footer, 2.2, {
            delay: 2.2,
            ease: "power3.out",
            opacity: 0,
            y: -10
        })
    }, [footerRef]);

    return ( 
        <footer>
            <p ref={footerRef}>
                copyright &copy; {year}. 
                <Link to={{ pathname: "https://github.com/whizzie99" }} target="_blank">
                    wisdom obioma
                </Link>
            </p>
        </footer>
    );
}
 
export default Footer;