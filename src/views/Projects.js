import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import pluto from '../assets/imgs/pluto.png';



const Projects = () => {
    return (
        <section className="projects-content">
            <div className="container">
                <div className="projects-hero">
                    <div className="projects-hero-text">
                        <h2>Projects</h2>
                        <p>I enjoying exploring and learning new things to help me a become better developer. Here are some of the projects I've built on using frontend technologies I work with.</p>
                    </div>
                    <div className="hero-img">
                        <img src={pluto} alt=""/>
                    </div>
                </div>
            </div>
            <div className="projects-list-section">
                <div className="container">
                    <ProjectCard/>
                    <button className="tour-btn">
                        <Link to="/contact">Continue<i className="fas fa-arrow-right"></i></Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default Projects;