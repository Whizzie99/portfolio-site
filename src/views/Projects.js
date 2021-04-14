import ProjectCard from '../components/ProjectCard';
import pluto from '../assets/imgs/pluto.png';



const Projects = () => {
    return (
        <section className="projects-content">
            <div className="container">
                <div className="projects-hero">
                    <div className="projects-hero-text">
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum debitis doloribus. Suscipit, cum laboriosam.</p>
                    </div>
                    <div className="hero-img">
                        <img src={pluto} alt=""/>
                    </div>
                </div>
            </div>
            <div className="projects-list-section">
                <div className="container">
                    <ProjectCard/>
                </div>
            </div>
        </section>
    );
}
 
export default Projects;