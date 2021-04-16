import { Link } from 'react-router-dom';


//import images
import porfolioThumb from '../assets/imgs/project_thumbnails/portfolio.png';
import aquilaThumb from '../assets/imgs/project_thumbnails/aquila_aveionen.png';
import reactionTImerThumb from '../assets/imgs/project_thumbnails/click_fast.png'
import oneBurnerThumb from '../assets/imgs/project_thumbnails/one_burner.png';
import regFormThumb from '../assets/imgs/project_thumbnails/reg_form.png';
import cardThumb from '../assets/imgs/project_thumbnails/card.png';


const ProjectCard = () => {
    return (
        <>

            <div className="project">
                <div className="project-card">
                    <div className="project-thumbnail">
                        <img src={porfolioThumb} alt="thumbnail"/>
                    </div>
                    <div className="project-description">
                        <h5 className="project-title">My portfolio site</h5>
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque asperiores nihil. Repudiandae, fuga quod.</p>
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
                                    <i className="fab fa-react"></i>
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

            <div className="project">
                <div className="project-card">
                    <div className="project-thumbnail">
                        <img src={aquilaThumb} alt="thumbnail"/>
                    </div>
                    <div className="project-description">
                        <h5 className="project-title">Aquila Aveionen</h5>
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque asperiores nihil. Repudiandae, fuga quod.</p>
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
                                    <i className="fab fa-vuejs"></i>
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

            <div className="project">
                <div className="project-card">
                    <div className="project-thumbnail">
                        <img src={reactionTImerThumb} alt="thumbnail"/>
                    </div>
                    <div className="project-description">
                        <h5 className="project-title">Reaction timer game</h5>
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque asperiores nihil. Repudiandae, fuga quod.</p>
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
                                    <i className="fab fa-vuejs"></i>
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

            <div className="project">
                <div className="project-card">
                    <div className="project-thumbnail">
                        <img src={oneBurnerThumb} alt="thumbnail"/>
                    </div>
                    <div className="project-description">
                        <h5 className="project-title">One Burner</h5>
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque asperiores nihil. Repudiandae, fuga quod.</p>
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
                                    <i className="fab fa-vuejs"></i>
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

            <div className="project">
                <div className="project-card">
                    <div className="project-thumbnail">
                        <img src={regFormThumb} alt="thumbnail"/>
                    </div>
                    <div className="project-description">
                        <h5 className="project-title">Registration Form</h5>
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque asperiores nihil. Repudiandae, fuga quod.</p>
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

            <div className="project">
                <div className="project-card">
                    <div className="project-thumbnail">
                        <img src={cardThumb} alt="thumbnail"/>
                    </div>
                    <div className="project-description">
                        <h5 className="project-title">Registration Form</h5>
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque asperiores nihil. Repudiandae, fuga quod.</p>
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

            <div className="see-more-area">
                <button className="tour-btn">
                    <Link to={{ pathname: "https://github.com/Whizzie99" }} >See More?</Link>
                </button>
            </div>

        </>
    );
}
 
export default ProjectCard;