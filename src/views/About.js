import { Link } from 'react-router-dom';
import Socials from '../components/Socials';

import victoryHand from '../assets/imgs/victory_hand.png';

const About = () => {
    return (
        <section className="about-content">
            <div className="left-section">
                <div className="left-section-content">
                    <div className="container">
                        <h2>About Me</h2>
                        <p>I transform web designs into optimized, responsive
                            and accessible websites. I love learning about technologies
                            and practices that would help me build projects efficiently,
                            that also aid my career development.
                            I listen to music a lot(even when working...lol)it helps ease
                            the mind. I play video games or soccer in my free time. Technologies I work with include HTML, CSS, Javascript, React, Bootstrap, Materialize css.
                        </p>
                        <div className="social-links">
                            <Socials/>
                            <button className="tour-btn">
                                <Link to="/projects">Continue<i className="fas fa-arrow-right"></i></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="hand-img">
                    <img src={victoryHand} alt="hello"/>
                </div>
            </div>
        </section>
    );
}
 
export default About;