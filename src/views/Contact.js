// import { Link } from 'react-router-dom';
import Socials from '../components/Socials';
import handWithPhone from '../assets/imgs/hand_with_phone.png';


const Contact = () => {
    return (
        <section className="contact-content">
            <div className="left-section">
                <div className="left-section-content">
                    <div className="container">
                        <h2>Get in touch</h2>
                        <p>Interested in working with me or have a project in mind? Feel free to send me an <a className="send-email-btn" href="mailto:wisdomobiomadev@gmail.com">Email</a>
                        </p>
                        <div className="social-links">
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="hand-img">
                    <img src={handWithPhone} alt="hello"/>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;