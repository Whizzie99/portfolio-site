import { Link } from 'react-router-dom';
import hello from '../assets/imgs/hello_hand.png';
import Socials from '../components/Socials';

const Home = () => {
    return (
        <section className="home-content">
            <div className="left-section">
                <div className="left-section-content">
                    <div className="container">
                        <h2>Hi,</h2>
                        <h4>Welcome to my space!</h4>
                        <p>I'm wisdom obioma, a frontend developer.I build accessible, optimised and responsive websites and web apps.
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
                <div className="hand-img">
                    <img src={hello} alt="hello"/>
                </div>
            </div>
        </section>
    );
}
 
export default Home;