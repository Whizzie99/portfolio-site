import { gsap } from 'gsap';
import Socials from '../components/Socials';
import handWithPhone from '../assets/imgs/hand_with_phone.png';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';


const Contact = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {

        const element1 = ref1.current;
        const element2 = ref2.current;
        const element3 = ref3.current;

        gsap.from(element1, 1, {
            delay: 1,
            ease: "Elastic.easeOut",
            opacity: 0,
            x: -20
        });

        gsap.from(element2, 1.5, {
            delay: 1.5,
            ease: "power3.out",
            x: -20,
            opacity: 0,
        });

        gsap.from(element3, 1.5, {
            delay: 1.5,
            ease: "Bounce.easeOut",
            y: 50,
            opacity: 0
        });
    }, []);

    return (
        <section className="contact-content">
            <Helmet>
                <title>Wisdom Obioma | Contact</title>
            </Helmet>
            <div className="left-section">
                <div className="left-section-content">
                    <div className="container">
                        <h2 ref={ref1}>Get in touch <span className="emoji">🤙🏾</span></h2>
                        <p ref={ref2}>Interested in working with me or have a project in mind? Feel free to send me an <a className="send-email-btn" href="mailto:wisdomobiomadev@gmail.com" target="_blank" rel="noreferrer">Email</a>
                        </p>
                        <div className="social-links">
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="hand-img" ref={ref3}>
                    <img src={handWithPhone} alt="hello"/>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;