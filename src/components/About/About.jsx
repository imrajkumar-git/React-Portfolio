import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Lottie from 'react-lottie'
import Laptop from '../../Assets/71619-coding.json'
import 'react-multi-carousel/lib/styles.css';
import Skills from './Skills';
import mycv from "../../Assets/../Assets/Black Blue Modern Professional CV Resume Template.pdf";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Laptop,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function About() {



  return (
 <>
   
<Skills/>
<Container fluid className="about-section"  data-aos="fade-up" data-aos-offset="200" data-aos-duration = "600">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            
            <Aboutcard />
                                        <a
                                      
                                            class="cvbutton"
                                        
                                            href={mycv} download="Rajkumar CV">Download CV </a>
                                 
          </Col>
          
          <Col
            md={5}
            style={{ paddingBottom: "50px" }}
            className="about-img"
          >
            <Lottie options={defaultOptions}
              height={400}
              width={384}
            />           </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        {/* <Team/> */}
        <Github />
      </Container>
    </Container>
    </>
  );
}

export default About;
