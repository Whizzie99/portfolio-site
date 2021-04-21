import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import hello from '../assets/imgs/hello_hand.png';
import Socials from '../components/Socials';
import { useEffect, useRef } from 'react';

const Home = () => {

    const homeLine1 = useRef(null);
    const homeLine2 = useRef(null);
    const homeLine3 = useRef(null);
    const handRef = useRef(null);

    useEffect(() =>{

        const el1 = homeLine1.current;
        const el2 = homeLine2.current;
        const el3 = homeLine3.current;
        const handImg = handRef.current;

        gsap.from([el1, el2, el3], 1, {
            delay: 1,
            ease: "power3.out",
            x: -20,
            opacity: 0,
            stagger: {
                amount: 0.18
            }
        });

        gsap.from(handImg, 1.5, {
            delay: 1.5,
            ease: "Bounce.easeOut",
            y: 50,
            opacity: 0
        });
    }, [homeLine1, homeLine2, homeLine3, handRef]);


    return (
        <section className="home-content">
            <div className="left-section">
                <div className="left-section-content">
                    <div className="container">
                        <h2 ref={homeLine1}>Hi,</h2>
                        <h4 ref={homeLine2}>Welcome to my space!</h4>
                        <p ref={homeLine3}>I'm wisdom obioma, a frontend developer.I build accessible, optimised and responsive websites and web apps.
                        </p>
                        <div className="social-links">
                            <Socials/>
                            <button className="tour-btn">
                                <Link to="/about">Let's tour<i className="fas fa-arrow-right"></i></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="hand-img" ref={handRef}>
                    <img src={hello} alt="hello"/>
                </div>
            </div>
        </section>
    );
}
 
export default Home;