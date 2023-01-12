import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/header-img.svg";
import TrackVisibility from 'react-on-screen';
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from '../About/About';
import Projects from '../Projects/Projects';
import Services from "../Projects/services";
import ContactUs from "../About/Contact";
// import MyTeam from "../My-Team";
function Home() {
  return (
    <section id="section_1">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" >
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rajkumar Aryal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} class='type-text'>
                <Type />
                
              </div>
            
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={homeLogo} className="wave1" alt="Header Img"/>
                </div>}
            </TrackVisibility>
          
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Home2 />
<About/>
<Services/>
{/* <MyTeam/> */}
<Projects/>
<ContactUs/>

</section>
    
  );
}

export default Home;
