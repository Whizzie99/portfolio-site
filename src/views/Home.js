import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Tourbutton from '../components/Tourbutton';

import hello from '../assets/imgs/hello_hand.png';
import Socials from '../components/Socials';

const Home = () => {
	const homeLine1 = useRef(null);
	const homeLine2 = useRef(null);
	const homeLine3 = useRef(null);
	const handRef = useRef(null);

	useEffect(() => {
		const el1 = homeLine1.current;
		const el2 = homeLine2.current;
		const el3 = homeLine3.current;
		const handImg = handRef.current;

		gsap.from(el1, 1, {
			delay: 1,
			ease: 'Elastic.easeOut',
			opacity: 0,
			x: -20,
		});

		gsap.from(el2, 1.3, {
			delay: 1.3,
			ease: 'power3.out',
			x: -20,
			opacity: 0,
		});

		gsap.from(el3, 1.5, {
			delay: 1,
			ease: 'power3.out',
			x: -20,
			opacity: 0,
		});

		gsap.from(handImg, 1.5, {
			delay: 1.5,
			ease: 'Bounce.easeOut',
			y: 50,
			opacity: 0,
		});
	}, []);

	return (
		<section className="home-content">
			<Helmet>
				<title>Wisdom Obioma | Home</title>
			</Helmet>
			<div className="left-section">
				<div className="left-section-content">
					<div className="container">
						<h2 ref={homeLine1}>
							Hi,<span className="emoji hi-emoji">🖐🏾</span>
						</h2>
						<h4 ref={homeLine2}>Welcome to my space!</h4>
						<p ref={homeLine3}>
							I'm Wisdom Obioma, a frontend engineer reshaping how you
							experience the web, one line at a time.
						</p>
						<div className="social-links">
							<Socials />
							<Tourbutton path="/about" text="Let's Tour" />
						</div>
					</div>
				</div>
			</div>
			<div className="right-section">
				<div className="hand-img" ref={handRef}>
					<img src={hello} alt="hello" />
				</div>
			</div>
		</section>
	);
};

export default Home;
