
import './projects.css';

const ProjectCard = ({ title, image, technologies, githubLink, demoLink, description }) => {
    return (
      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          <p className="project-description" title={description}>
            {description}
          </p>
          <div className="project-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
                <i className="fas fa-external-link-alt"></i> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };
const Projects = () => {
  const projectsData = [
    {
      title: "devleo Tracker",
      image: "../../devleo-tracker.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: null,
      demoLink: "https://budget-tracker-liart.vercel.app",
      description: "devleo Tracker is a web application for managing income and expenses. Users can add money to their account and track their spending to see how much they've saved or spent."
    },
    {
      title: "Budget-App",
      image: "../../budget.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/trimooo/Budget-App",
      demoLink: "https://budget-app-amber.vercel.app/",
      description: "The Budget App is an intuitive financial management tool that helps individuals and businesses track their income and expenses effectively."
    },
    {
      title: "Type Test",
      image: "../../type-test-png.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/trimooo/Type-Test-App",
      demoLink: "https://type-test-app-tau.vercel.app/",
      description: "Test App is a compact web application designed to streamline the testing process and facilitate efficient quality assurance."
    },
    {
      title: "Portfolio demo",
      image: "../../Portfolio-leo.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: null,
      demoLink: "https://trimoocv.pages.dev/",
      description: "This web application exemplifies my expertise in front-end development, utilizing HTML, CSS, and JavaScript to create a modern and visually appealing interface."
    },
    // You can add more projects here...
  ];

  return (
    <section className="projects-section mb-10">
      <div className="container">
        <h1 className="section-title" id="projects">Projects</h1>
        <p className="section-subtitle">Each project is a unique piece of development</p>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

