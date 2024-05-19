import "./about.css"

const About = () => {
    return (
    <div>
        <div className="container justify-content-center my-5 text-center">
  <h1 className="fw-bold display-4 fa-5x title translate-key" data-key="aboutTitle" id="about">About Me</h1>
  <div className="card mb-10 mx-lg-5 justify-content-center border-0 shadow-0 text-center" style={{maxWidth: 1140, marginTop: '10%'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src="../../full-image-leo.png" alt="Leotrim Photo" className="img-fluid rounded-start imagee " />
      </div>
      <div className="col-md-8">
        <div className="card-body mb-14">
          <h5 className="card-title fw-bold fa-2x translate-key" data-key="cardTitle">
            A dedicated Front-End Developer based in Kosovo.
          </h5>
          <p className="card-text fw-lighter translate-key" data-key="cardDescription">
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
          <div className="m-4">
            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">HTML</button>
            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">CSS</button>
            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">JavaScript</button>
            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">php</button>
            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">React</button>
            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Sass</button>
            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Bootstrap</button>
          </div>
          {/*<p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
          </p>*/}
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    )
}

export default About



