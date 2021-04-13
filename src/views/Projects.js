import { Link } from 'react-router-dom';

import crane from '../assets/imgs/crane.3DS';

const Projects = () => {
    return (
        <section className="projects-content">
            <div className="container">
                <div className="projects-list-section">
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum debitis doloribus. Suscipit, cum laboriosam.</p>

                    <div className="project">
                        <div className="project-card">
                            <div className="project-thumbnail">
                                <img src="" alt="thumbnsil"/>
                            </div>
                            <div className="project-description">
                                <h5>Aquila Aveionen</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque asperiores nihil. Repudiandae, fuga quod.</p>
                                <div className="project-tools">
                                    <div className="tools-header">Tools</div>
                                    <div className="tools-icons">
                                        <span className="tool">
                                            <i className="fab fa-html5"></i>
                                        </span>
                                        <span className="tool">
                                            <i className="fab fa-css3-alt"></i>
                                        </span>
                                        <span className="tool">
                                            <i className="fab fa-js-square"></i>
                                        </span>
                                        <span className="tool">
                                            <i class="fab fa-vuejs"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-preview">
                            <div className="preview-navs">
                                <span className="code-base">
                                    <Link to={{ pathname: "https://github.com/Whizzie99/aquila-aveion" }} target="_blank">
                                        <i className="fab fa-github"></i>
                                    </Link>
                                </span>
                                <span className="view-live">
                                    <Link to={{ pathname: "https://aquila-landing.netlify.app" }} target="_blank">
                                        <i className="fas fa-globe"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-img">
                    <img src={crane} alt=""/>
                </div>
            </div>
        </section>
    );
}
 
export default Projects;