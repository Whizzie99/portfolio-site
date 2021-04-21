import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';


const Socials = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        const gitHub = ref1.current;
        const linkedIn = ref2.current;
        const twitter = ref3.current;

        gsap.from([gitHub, linkedIn, twitter], 1, {
            delay: 1,
            ease: "Bounce.easeOut",
            opacity: 0,
            y: 65,
            rotate: 360,
            stagger:{
                amount: 0.18
            }

        })



    }, []);

    return ( 
        <ul>
            <li className="link-item" ref={ref1}>
                <a href="https://github.com/whizzie99" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li className="link-item" ref={ref2}>
                <a href="https://www.linkedin.com/in/wisdom-obioma-244191208/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="link-item" ref={ref3}>
                <a href="https://twitter.com/_whizzie" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
        </ul>
    );
}
 
export default Socials;