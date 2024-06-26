
import "./home.css";





const Home = () => {

    
    return (
        <div className="home-container">
            <div className="content-wrapper">
                <div className="text-content">
                    <h1 className="title">Junior Front-End Developer</h1>
                    <p className="subtitle" >
                        Hi, I am <span className="highlight">Leotrim Thaqi - devleo</span>. 
                        A passionate Front-End Developer based in Kosovo - Germany.
                        <i className="fas fa-map-marker-alt location-icon"></i>
                    </p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/leotrim-thaqi-0212a9228" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.github.com/trimooo" target="_blank" rel="noopener noreferrer" className="social-icon github">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="image-content">
                    <img src="../../small-leo.png" alt="Leotrim Thaqi" className="profile-image" />
                </div>
            </div>
            <div className="tech-stack">
    <h2 className="tech-stack-title">Tech Stack</h2>
    <div className="tech-icons">
        {['html5', 'css3-alt', 'js', 'php', 'react', 'sass', 'bootstrap', ].map((tech, index) => (
            <div key={index} className="tech-icon-wrapper">
                <i className={`fab fa-${tech}`}></i>
                <span className="tech-name">{tech.replace('-alt', '').toUpperCase()}</span>
            </div>
        ))}
    </div>
</div>
        </div>
    )
}

export default Home;
