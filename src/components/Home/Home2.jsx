import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.png";

import Lottie from 'react-lottie'
import Laptop from '../../Assets/laptop.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Laptop,
  rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
  }
};
function Home2() {
  return (
    <Container fluid className="home-about-section" id="section_2">
      <Container>
        <Row>


        <Col md={8} className="home-about-description">
            <h1  class='about-title'>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
            <Lottie options={defaultOptions} class='lottie'
                                    height={330}
                                    width={380}
                                />
          </Col>
        <Col md={4} className="myAvtar">
              <img src={myImg} alt="rajkumar profile" class="imagecss2  mb-3 shadow-sm" loading="lazy" />
          </Col>
      
       
        </Row>
        {/* <Row>
          <Col md={6} className="home-about-social" width='32%'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="home-about-social">
             
</Col>

        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
