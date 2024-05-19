import "./home.css"

const Home = () => {
    return (
    <div>

<div className="container d-flex flex-column justify-content-center align-items-center mt-5 ">
  <div className="row">
    <div className="col-md-6 text-center mt-5">
      <h1 className="display-4 fw-medium">Junior Front-End Developer</h1>
      <p className="lead fw-medium ">
        <span className="translate-key" data-key="developer">
          Hi, I am Leotrim Thaqi - devleo. A passionate Front-End Developer based
          in Kosovo - Germany. <i className="fa fa-location-dot" /></span>
      </p>
      <div className="text-md-end ">
        <a href="https://www.linkedin.com/in/leotrim-thaqi-0212a9228" target="_blank">
          <i className="fa-brands fa-linkedin fa-3x m-3" style={{color: '#999'}} />
        </a>
        <a href="https://www.github.com/trimooo" target="_blank">
          <i className="fa-brands fa-github fa-3x" style={{color: '#999'}} />
        </a>
      </div>
    </div>
    <div className="col-md-6 mb-8 text-center ">
      <img src="../../small-leo.png" className="img-fluid rounded-9 img" alt="Photo" />
    </div>
  </div>
  <div className="row my-5 mb-14 ">
    <div className="col text-center">
      <div>
        {/*<h3 class="translate-key" data-key="techStacks">Tech Stacks</h3>*/}
        <div className="icon-container ">
          <i className="fa-brands fa-html5 fa-8x m-3" style={{color: '#000'}} />
          <i className="fa-brands fa-css3-alt fa-8x m-3" style={{color: '#000'}} />
          <i className="fa-brands fa-js fa-8x m-3" style={{color: '#000'}} />
          <i className="fa-brands fa-php fa-8x m-3" style={{color: '#000'}} />
          <i className="fa-brands fa-react fa-8x m-3" style={{color: '#000'}} />
          <i className="fa-brands fa-sass fa-8x m-3" style={{color: '#000'}} />
          <i className="fa-brands fa-bootstrap fa-8x" style={{color: '#000'}} />
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
    )
}

export default Home



