import Socials from '../components/Socials';
import Tourbutton from '../components/Tourbutton';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';

import victoryHand from '../assets/imgs/victory_hand.png';
import { useEffect, useRef } from 'react';

const About = () => {

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
        <section className="about-content">
            <Helmet>
                <title>Wisdom Obioma | About</title>
            </Helmet>
            <div className="left-section">
                <div className="left-section-content">
                    <div className="container">
                        <h2 ref={ref1}>About Me <span className="emoji">✌🏾</span></h2>
                        <p ref={ref2}>I transform web designs into optimized, responsive
                            and accessible websites. I love learning about technologies
                            and practices that would help me build projects efficiently,
                            that also aid my career development.
                            I listen to music a lot(even when working...lol)it helps ease
                            the mind. I play video games or soccer in my free time. Technologies I work with include HTML, CSS, Javascript, React, Bootstrap, Materialize css.
                            My resume is available <a className="send-email-btn" href="https://drive.google.com/file/d/1abEB3c4AWKbHGzrZ6EO48Q0J3IiEtdoW/view?usp=sharing" target="_blank" rel="noreferrer">Here</a>
                        </p>
                        <div className="social-links">
                            <Socials/>
                            <Tourbutton path="/projects" text="continue"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="hand-img" ref={ref3}>
                    <img src={victoryHand} alt="hello"/>
                </div>
            </div>
        </section>
    );
}
 
export default About;