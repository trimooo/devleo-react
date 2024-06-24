
import "./about.css";

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h1 className="section-title" id="about">About Me</h1>
                <div className="about-content">
                    <div className="about-image">
                        <img src="../../full-image-leo.png" alt="Leotrim Photo" className="profile-image" />
                    </div>
                    <div className="about-text">
                        <h2 className="about-subtitle">A dedicated Front-End Developer based in Kosovo.</h2>
                        <p className="about-description">
                            As a Junior Front-End Developer, I possess an impressive arsenal
                            of skills in HTML, CSS, JavaScript, React, Bootstrap and SCSS. I
                            excel in designing and maintaining responsive websites that
                            offer a smooth user experience. My expertise lies in crafting
                            dynamic, engaging interfaces through writing clean and optimized
                            code and utilizing cutting-edge development tools and
                            techniques. I am also a team player who thrives in collaborating
                            with cross-functional teams to produce outstanding web
                            applications.
                        </p>
                        <div className="skills-container">
                            {['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Sass', 'Bootstrap'].map((skill, index) => (
                                <span key={index} className="skill-badge">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;