import React from 'react'

function Services() {
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
                <a href="About" className="nav-item nav-link">
                  About
                </a>
                <a href="Services" className="nav-item nav-link active">
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
          <h1 className="text-white animated slideInDown">Service</h1>
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
                Service
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
  {/* Navbar & Hero End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span />
                Our Services
                <span />
              </p>
              <h1 className="text-center mb-5">What Solutions We Provide</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-search fa-2x" />
                  </div>
                  <h5 className="mb-3">Digital Marketing</h5>
                  <p className="m-0">
                    Experience unrivaled business growth through our expert
                    digital marketing strategies
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-laptop-code fa-2x" />
                  </div>
                  <h5 className="mb-3">Promotion & Advertising</h5>
                  <p className="m-0">
                    Supercharge your brand's visibility and impact with our
                    expert promotion and advertising solutions.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-facebook-f fa-2x" />
                  </div>
                  <h5 className="mb-3">Branding & Logo Design</h5>
                  <p className="m-0">
                    Craft a compelling brand identity and leave a lasting
                    impression with our expert branding and logo design
                    services.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-mail-bulk fa-2x" />
                  </div>
                  <h5 className="mb-3">Email Marketing</h5>
                  <p className="m-0">
                    Unlock the potential of email marketing with our expertise.
                    Engage, convert, and grow your audience effortlessly.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-thumbs-up fa-2x" />
                  </div>
                  <h5 className="mb-3">Website Designing</h5>
                  <p className="m-0">
                    Discover our expertise in creating websites that uniquely
                    reflect your brand while seamlessly engaging your audience.{" "}
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-android fa-2x" />
                  </div>
                  <h5 className="mb-3">Brochure Designing</h5>
                  <p className="m-0">
                    Brochure designing: Where creativity meets communication.
                    Engage your audience with stunning visuals and compelling
                    content.{" "}
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  {/* Service End */}
  {/* Newsletter Start */}
  <div
    className="container-xxl bg-primary newsletter py-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container py-5 px-lg-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <p className="section-title text-white justify-content-center">
            <span />
            Newsletter
            <span />
          </p>
          <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
          <p className="text-white mb-4">
          Introducing our newsletter: your direct link to the latest updates, exclusive offers, and industry insights. Stay connected with us to stay ahead
          </p>
          <div className="position-relative w-100 mt-3">
            <input
              className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
              type="text"
              placeholder="Enter Your Email"
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
  </div>
  {/* Newsletter End */}
  {/* Testimonial Start */}
  {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
      <p className="section-title text-secondary justify-content-center">
        <span />
        Testimonial
        <span />
      </p>
      <h1 className="text-center mb-5">What Say Our Clients!</h1>
      <div className="owl-carousel testimonial-carousel">
        <div className="testimonial-item bg-light rounded my-4">
          <p className="fs-5">
            <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit sed stet lorem sit clita duo justo.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded-circle"
              src="./image/testimonial-1.jpg"
              style={{ width: 65, height: 65 }}
            />
            <div className="ps-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item bg-light rounded my-4">
          <p className="fs-5">
            <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit sed stet lorem sit clita duo justo.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded-circle"
              src="./image/testimonial-2.jpg"
              style={{ width: 65, height: 65 }}
            />
            <div className="ps-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item bg-light rounded my-4">
          <p className="fs-5">
            <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit sed stet lorem sit clita duo justo.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded-circle"
              src="./image/testimonial-3.jpg"
              style={{ width: 65, height: 65 }}
            />
            <div className="ps-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Testimonial End */}
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
                If you have any questions or would like to discuss your digital marketing needs, please feel free to get in touch with us.
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
                  <a className="border-bottom" href="https://htmlcodex.com">
                    
                  </a>
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
  <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</div>

    </div>
  )
}

export default Services
