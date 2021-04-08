import { Link } from 'react-router-dom';
import hello from '../assets/imgs/hello_hand.png';

const Home = () => {
    return (
        <section className="home-content">
            <div className="left-section">
                <div className="left-section-content">
                    <div className="container">
                        <h2>Hi,</h2>
                        <h4>Welcome to my space!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus vitae doloremque odit repudiandae veritatis aspernatur! Corporis eos eveniet rerum.
                        </p>
                        <div className="social-links">
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
                            <button className="tour-btn">
                                <Link to="#">Let's tour<i className="fas fa-arrow-right"></i></Link>
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