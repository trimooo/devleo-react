import "./projects.css";

const Projects = () => {
    return (

            <div className="container justify-content-center text-center">
                <h1 className="fw-bold display-4 fa-5x titlee translate-key" data-key="projectsTitle" id="projects">Projects</h1>
                <h5 className="translate-key" data-key="projectsSubtitle">Each project is a unique piece of development</h5>
                <card className="card-group row row-cols-1 row-cols-md-2 g-4">
                    {/* Start Weather-App */}
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-4">
                            <div className="col"></div>
                            <div className="col-md-13">
                                <img src="../../weather.png" className="img-fluid rounded-start rounded-5 card_img" alt="..." />
                            </div>
                            <h5 className="card-title fw-bold fa-2x translate-key" data-key="project2Title" style={{ display: 'inline-block' }}>Weather-App</h5>
                            <div className="col">
                                <div className="m-4" style={{ display: 'inline-block' }}>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center" style={{ display: 'inline-block' }}>
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Weather-App" target="_blank" style={{ color: '#fff' }}>Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center" style={{ display: 'inline-block' }}>
                                        <i className="fas fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://weather-app-three-mauve-73.vercel.app/" target="_blank" style={{ color: '#000' }}>Live Demo</a>
                                    </button>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasWeather" role="button" aria-controls="offcanvasWeather" style={{ display: 'inline-block' }}>More</a>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasWeather" aria-labelledby="offcanvasWeatherLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasWeatherLabel">Weather-App</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div>
                                    Weather App is a dynamic web application meticulously crafted using HTML, CSS, and JavaScript. It presents users with up-to-date and accurate weather information in an intuitive and visually appealing manner. Seamlessly blending design and functionality, the Weather App offers a user-friendly interface where users can effortlessly access current weather conditions, forecasts, and other meteorological data for any desired location. With its responsive design, the Weather App ensures a seamless experience across various devices, enabling users to stay informed about the weather no matter where they are.
                                </div>
                                <div className="m-4">
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center">
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Weather-App" target="_blank" style={{ color: '#fff' }}> Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center">
                                        <i className="fas fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://weather-app-three-mauve-73.vercel.app/" target="_blank" style={{ color: '#000' }}> Live Demo</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Weather-App */}
                    {/* Start Budget */}
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-4">
                            <div className="col"></div>
                            <div className="col-md-13">
                                <img src="../../budget.png" className="img-fluid rounded-start rounded-5 card_img" alt="..." />
                            </div>
                            <h5 className="card-title fw-bold fa-2x translate-key" data-key="project2Title" style={{ display: 'inline-block' }}>Budget-App</h5>
                            <div className="col">
                                <div className="m-4" style={{ display: 'inline-block' }}>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center" style={{ display: 'inline-block' }}>
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Budget-App" target="_blank" style={{ color: '#fff' }}>Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center" style={{ display: 'inline-block' }}>
                                        <i className="fa-solid fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://budget-app-amber.vercel.app/" target="_blank" style={{ color: '#000' }}>Live Demo</a>
                                    </button>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasBudget" role="button" aria-controls="offcanvasBudget" style={{ display: 'inline-block' }}>More</a>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasBudget" aria-labelledby="offcanvasBudgetLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasBudgetLabel">Budget</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div>
                                The Budget App is an intuitive financial management tool that helps individuals and businesses track their income and expenses effectively. Built using HTML, CSS, and JavaScript, this app offers a simple yet powerful solution for budgeting and expense tracking. Users can easily input their income and expenses, categorize transactions, and view comprehensive reports to gain insights into their financial activities. With features like budget goal setting, transaction categorization, and customizable expense categories, the Budget App provides a tailored solution for users to manage their finances efficiently. Whether it s personal budgeting, small business accounting, or expense tracking for freelancers, the Budget App offers a user-friendly interface and robust functionality to meet diverse financial needs.                                </div>
                                <div className="m-4">
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center">
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Budget-App" target="_blank" style={{ color: '#fff' }}> Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center">
                                        <i className="fas fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="hhttps://budget-app-amber.vercel.app/" target="_blank" style={{ color: '#000' }}> Live Demo</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Budget */}

                    {/* Start Type Test */}
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-4">
                            <div className="col"></div>
                            <div className="col-md-13">
                                <img src="../../type-test-png.png" className="img-fluid rounded-start rounded-5 card_img" alt="..." />
                            </div>
                            <h5 className="card-title fw-bold fa-2x translate-key" data-key="project2Title" style={{ display: 'inline-block' }}>Type Test</h5>
                            <div className="col">
                                <div className="m-4" style={{ display: 'inline-block' }}>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center" style={{ display: 'inline-block' }}>
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Type-Test-App" target="_blank" style={{ color: '#fff' }}>Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center" style={{ display: 'inline-block' }}>
                                        <i className="fa-solid fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://type-test-app-tau.vercel.app/" target="_blank" style={{ color: '#000' }}>Live Demo</a>
                                    </button>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasTypeTest" role="button" aria-controls="offcanvasTypeTest" style={{ display: 'inline-block' }}>More</a>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasTypeTest" aria-labelledby="offcanvasTypeTestLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasTypeTestLabel">Type Test</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div>
                                    Test App is a compact web application designed to streamline the testing process and facilitate efficient quality assurance. Developed using HTML, CSS, and JavaScript, this app provides a user-friendly interface for conducting various types of tests, such as software testing, user acceptance testing, or even educational quizzes. The Test App offers an intuitive and organized layout, allowing users to create test cases, define test parameters, and execute tests with ease. It provides real-time feedback and results, enabling users to quickly identify and address any issues or errors. With its responsive design, the Test App ensures compatibility across different devices, making it convenient for testers to conduct tests on the go. Whether it s for developers, QA professionals, or educators, the Test App simplifies the testing process, enhances efficiency, and contributes to the overall quality of software and educational materials.
                                </div>
                                <div className="m-4">
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center">
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Type-Test-App

" target="_blank" style={{ color: '#fff' }}> Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center">
                                        <i className="fas fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://type-test-app-tau.vercel.app/" target="_blank" style={{ color: '#000' }}> Live Demo</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Type Test*/ }
                    
                    {/* Start Rectify */}
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-4">
                            <div className="col"></div>
                            <div className="col-md-13">
                                <img src="../../rectify.png" className="img-fluid rounded-start rounded-5 card_img" alt="..." />
                            </div>
                            <h5 className="card-title fw-bold fa-2x translate-key" data-key="project2Title" style={{ display: 'inline-block' }}>Rectify</h5>
                            <div className="col">
                                <div className="m-4" style={{ display: 'inline-block' }}>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center" style={{ display: 'inline-block' }}>
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Rectify" target="_blank" style={{ color: '#fff' }}>Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center" style={{ display: 'inline-block' }}>
                                        <i className="fa-solid fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://rectify-lilac.vercel.app/" target="_blank" style={{ color: '#000' }}>Live Demo</a>
                                    </button>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasRectify" role="button" aria-controls="offcanvasRectify" style={{ display: 'inline-block' }}>More</a>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasRectify" aria-labelledby="offcanvasRectifyLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasRectifyLabel">Rectify</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div>
                                Rectify uses a combination of an elastic T-shirt and a sensor called FlexTail. This flexible technology developed by MinkTec over a period of 10 weeks aims to improve your body position and movement for better back health. In this period, the blouse can be used in the work environment, in the home office, or during free time. Rectify is an innovation that can help improve their back health.
                                </div>                                
                                <div className="m-4">
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center">
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="https://github.com/trimooo/Rectify" target="_blank" style={{ color: '#fff' }}> Code</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center">
                                        <i className="fas fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://rectify-lilac.vercel.app/" target="_blank" style={{ color: '#000' }}> Live Demo</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Rectify */}
                    <br />
                    {/* Start Portfolio-demo */}
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-4">
                            <div className="col"></div>
                            <div className="col-md-13">
                                <img src="../../Portfolio-leo.png" className="img-fluid rounded-start rounded-5 card_img" alt="..." />
                            </div>
                            <h5 className="card-title fw-bold fa-2x translate-key" data-key="project2Title" style={{ display: 'inline-block' }}>Portfolio demo</h5>
                            <div className="col">
                                <div className="m-4" style={{ display: 'inline-block' }}>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center" style={{ display: 'inline-block' }}>
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="#" target="_blank" style={{ color: '#fff' }}>Code not Valid</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center" style={{ display: 'inline-block' }}>
                                        <i className="fa-solid fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://trimoocv.pages.dev/" target="_blank" style={{ color: '#000' }}>Live Demo</a>
                                    </button>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasPortfolio" role="button" aria-controls="offcanvasPortfolio" style={{ display: 'inline-block' }}>More</a>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasPortfolio" aria-labelledby="offcanvasPortfolioLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasPortfolioLabel">Portfolio demo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div>
                                Portfolio Demo: This web application exemplifies my expertise in front-end development, utilizing HTML, CSS, and JavaScript to create a modern and visually appealing interface. The portfolio demo showcases my skills in crafting responsive and user-friendly designs, ensuring a seamless experience across various devices. Explore the demo to see firsthand my commitment to delivering high-quality web solutions.                                </div>
                                <div className="m-4">
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark text-center">
                                        <i className="fab fa-github fa-1x" style={{ color: '#fff' }}></i>
                                        <a href="#" target="_blank" style={{ color: '#fff' }}>Code not Valid</a>
                                    </button>
                                    <button type="button" className="btn btn-white text-center">
                                        <i className="fas fa-arrow-up-right-from-square fa-1x" style={{ color: '#000' }}></i>
                                        <a href="https://trimoocv.pages.dev/" target="_blank" style={{ color: '#000' }}> Live Demo</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Rectify */}
                </card>
            </div>

    )
}

export default Projects;