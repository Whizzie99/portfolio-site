
import {gsap} from 'gsap';
import ProjectCard from '../components/ProjectCard';
import pluto from '../assets/imgs/pluto.png';
import Tourbutton from '../components/Tourbutton';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';



const Projects = () => {
    
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        const el1 = ref1.current;
        const el2 = ref2.current;
        const el3 = ref3.current;


        gsap.from(el1, 1, {
            delay: 1,
            ease: "Elastic.easeOut",
            opacity: 0,
            x: -20
        });

        gsap.from(el2, 1.5, {
            delay: 1.5,
            ease: "power3.out",
            x: -20,
            opacity: 0,
        });

        gsap.from(el3, 1.5, {
            delay: 1.5,
            ease: "Bounce.easeOut",
            y: 50,
            opacity: 0
        });
    }, []);

    return (
        <section className="projects-content">
            <Helmet>
                <title>Wisdom Obioma | Projects</title>
            </Helmet>
            <div className="container">
                <div className="projects-hero">
                    <div className="projects-hero-text">
                        <h2 ref={ref1}>Projects <span className="emoji">🚀</span></h2>
                        <p ref={ref2}>I enjoying exploring and learning new things to help me a become better developer. Here are some of the projects I've built on using frontend technologies I work with.</p>
                    </div>
                    <div className="hero-img" ref={ref3}>
                        <img src={pluto} alt=""/>
                    </div>
                </div>
            </div>
            <div className="projects-list-section">
                <div className="container">
                    <ProjectCard/>
                    <Tourbutton path="/contact" text="continue"/>
                </div>
            </div>
        </section>
    );
}
 
export default Projects;