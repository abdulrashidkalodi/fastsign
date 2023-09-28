import React from "react";

function About() {
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        {/* Spinner Start */}
        {/* Spinner End */}
        {/* Navbar & Hero Start */}
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <img
                    src="https://static.wixstatic.com/media/d1c5cd0055c94e3bb1acee9e2fda9f0e.jpg/v1/fill/w_80,h_53,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_auto/d1c5cd0055c94e3bb1acee9e2fda9f0e.jpg"
                    alt="LoginImage"
                    style={{
                      borderRadius: "25%",
                      zIndex: 1,
                      marginBottom: "8px ",
                    }}
                  />
                </div>
                <h1
                  className="m-0"
                  style={{
                    paddingLeft: "20px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Fast<span style={{ color: "#FBA504" }}>Sign</span>
                </h1>
              </div>{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <a href="/" className="nav-item nav-link ">
                  Home
                </a>
                <a href="About" className="nav-item nav-link active">
                  About
                </a>
                <a href="Services" className="nav-item nav-link">
                  Service
                </a>
                <a href="Contactus" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <a
                href="Contactus"
                className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
              >
                Contact Us
              </a>
            </div>
          </nav>
          <div className="container-xxl py-5 bg-primary hero-header">
            <div className="container my-5 py-5 px-lg-5">
              <div className="row g-5 py-5">
                <div className="col-12 text-center">
                  <h1 className="text-white animated slideInDown">About Us</h1>
                  <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                          Pages
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        About
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}
        {/* Feature Start */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-mail-bulk text-primary mb-4" />
                  <h5 className="mb-3">Digital Marketing</h5>
                  <p className="m-0">
                    EExperience unrivaled business growth through our expert
                    digital marketing strategies</p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-search text-primary mb-4" />
                  <h5 className="mb-3">Promotion & Advertising</h5>
                  <p className="m-0">
                  Supercharge your brand's visibility and impact with our
                    expert promotion and advertising solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-laptop-code text-primary mb-4" />
                  <h5 className="mb-3">Branding & Logo Design</h5>
                  <p className="m-0">
                  Craft a compelling brand identity and leave a lasting
                    impression with our expert branding and logo design
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary">
                  About Us
                  <span />
                </p>
                <h1 className="mb-5">
                  Our Story: Crafting Success with Passion and Innovation
                </h1>
                <p className="mb-4">
                  At FASTSIGN, our journey began in March 2021 under the
                  visionary leadership of our founder, Mohammed Jadheer. Since
                  our inception, we've been dedicated to delivering top-notch
                  digital marketing and advertising services that exceed our
                  clients' expectations. Our mission is clear: to empower
                  businesses in building a formidable online presence and
                  effectively reaching their target audiences. With expertise
                  spanning web design, web development, digital marketing,
                  online advertising, brochure and logo design, branding, and
                  more, we are your comprehensive solution for all your online
                  needs. We're not just a service provider; we're your committed
                  partner in achieving digital success.
                </p>
                {/* <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Digital Marketing</p>
              <p className="mb-2">85%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div> */}
                {/* <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">SEO &amp; Backlinks</p>
              <p className="mb-2">90%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-secondary"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div> */}
                {/* <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Design &amp; Development</p>
              <p className="mb-2">95%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div> */}
                <a
                  href=""
                  className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3"
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                  src="./image/about.png"
                  alt="noimage"
                />
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Facts Start */}
        <div
          className="container-xxl bg-primary fact py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-certificate fa-3x text-secondary mb-3" />
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1+
                </h1>
                <p className="text-white mb-0">Years Experience</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-users-cog fa-3x text-secondary mb-3" />
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  10+
                </h1>
                <p className="text-white mb-0">Team Members</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-users fa-3x text-secondary mb-3" />
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  20+
                </h1>
                <p className="text-white mb-0">Satisfied Clients</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.7s"
              >
                <i className="fa fa-check fa-3x text-secondary mb-3" />
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  50+
                </h1>
                <p className="text-white mb-0">Compleate Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* Facts End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span />
                Our Team
                <span />
              </p>
              <h1 className="text-center mb-5">Our Team Members</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img
                      className="img-fluid rounded-circle mb-4"
                      src="https://static.wixstatic.com/media/7b3151_5e3ebad72a6145279ecc2e6a35e96689~mv2.jpeg/v1/fill/w_640,h_480,q_90/7b3151_5e3ebad72a6145279ecc2e6a35e96689~mv2.webp"
                      alt=""
                    />
                    <h5>John Doe</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img
                      className="img-fluid rounded-circle mb-4"
                      src="https://static.wixstatic.com/media/7b3151_5e3ebad72a6145279ecc2e6a35e96689~mv2.jpeg/v1/fill/w_640,h_480,q_90/7b3151_5e3ebad72a6145279ecc2e6a35e96689~mv2.webp"
                      alt=""
                    />
                    <h5>Jessica Brown</h5>
                    <span>Web Designer</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img
                      className="img-fluid rounded-circle mb-4"
                      src="https://static.wixstatic.com/media/7b3151_5e3ebad72a6145279ecc2e6a35e96689~mv2.jpeg/v1/fill/w_640,h_480,q_90/7b3151_5e3ebad72a6145279ecc2e6a35e96689~mv2.webp"
                      alt=""
                    />
                    <h5>Tony Johnson</h5>
                    <span>SEO Expert</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Footer Start */}
        <div
          className="container-fluid bg-primary text-light footer wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 px-lg-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">
                  Address
                  <span />
                </p>
                <p>
                  <i className="fa fa-map-marker-alt me-3" />
                  Malappuram, Kerala, India
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3" />
                  +91-8301 094 401
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3" />
                  +91-9061 094 401
                </p>
                <p>
                  <i className="fa fa-envelope me-2" />
                  fastsignofficial@gmail.com
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href="/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">
                  Quick Link
                  <span />
                </p>
                <a className="btn btn-link" href="/">
                  Home
                </a>
                <a className="btn btn-link" href="About">
                  About Us
                </a>
                <a className="btn btn-link" href="Contactus">
                  Contact Us
                </a>
                <a className="btn btn-link" href="Services">
                  Services
                </a>
              </div>
              <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">
                  Gallery
                  <span />
                </p>
                <div className="row g-2">
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src="https://static.wixstatic.com/media/7b3151_c4cc11e26ee54566887a264317c60910~mv2.jpg/v1/fill/w_640,h_640,q_90/7b3151_c4cc11e26ee54566887a264317c60910~mv2.webp"
                      alt="Image"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src="https://static.wixstatic.com/media/7b3151_0f7dd857ed174b8fa46da3b949d8e0d0~mv2.jpg/v1/fill/w_640,h_640,q_90/7b3151_0f7dd857ed174b8fa46da3b949d8e0d0~mv2.webp"
                      alt="Image"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src="https://static.wixstatic.com/media/7b3151_b21d3f56d8aa4afe9aa8db6dad39f8ba~mv2.jpg/v1/fill/w_640,h_640,q_90/7b3151_b21d3f56d8aa4afe9aa8db6dad39f8ba~mv2.webp"
                      alt="Image"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src="https://static.wixstatic.com/media/7b3151_d51b541c9a77444eb09a96b3171418a5~mv2.jpg/v1/fill/w_640,h_640,q_90/7b3151_d51b541c9a77444eb09a96b3171418a5~mv2.webp"
                      alt="Image"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src="https://static.wixstatic.com/media/7b3151_51a1789cef4b463987b5ceabe355690b~mv2.jpg/v1/fill/w_640,h_640,q_90/7b3151_51a1789cef4b463987b5ceabe355690b~mv2.webp"
                      alt="Image"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src="https://static.wixstatic.com/media/7b3151_d86ecce14f404eff9fe312dde6dfeb03~mv2.jpg/v1/fit/w_375,h_668,q_90/7b3151_d86ecce14f404eff9fe312dde6dfeb03~mv2.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <p className="section-title text-white h5 mb-4">
                  Newsletter
                  <span />
                </p>
                <p>
                  If you have any questions or would like to discuss your
                  digital marketing needs, please feel free to get in touch with
                  us.
                </p>
                <div className="position-relative w-100 mt-3">
                  <input
                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                    style={{ height: 48 }}
                  />
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i className="fa fa-paper-plane text-primary fs-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-lg-5">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  ©{" "}
                  <a className="border-bottom" href="site link pasted here">
                    Your Site Name
                  </a>
                  , All Right Reserved.
                  <a className="border-bottom" href="https://htmlcodex.com"></a>
                  <br />
                  <br />
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href="/">Home</a>
                    <a href="/">Cookies</a>
                    <a href="/">Help</a>
                    <a href="/">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-secondary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
}

export default About;
