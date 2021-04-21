import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Tourbutton = (props) => {

    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;

        gsap.from(button, 2, {
            delay: 2,
            ease: "Elastic.easeOut",
            opacity: 0,
            x: -20
        });

    }, [])

    return (
        <button className="tour-btn" ref={buttonRef}>
            <Link to={props.path}>{props.text}<i className="fas fa-arrow-right"></i></Link>
        </button>
    );
}

export default Tourbutton;