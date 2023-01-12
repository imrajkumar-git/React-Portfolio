import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
const Services = () => {
    return (
        <Container fluid className="project-section" id="section_4" >
          <Particle />
          <Container>
            <h1 className="project-heading">
              Services <strong className="purple">Provided From Me </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few Services.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={chatify}
                  isBlog={false}

                  title="Backend Development Using Django"
                  description="Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scene activities that occur when performing any action on a website. It can be an account login or making a purchase from an online store."
                  ghLink="https://www.fiverr.com/rajkumararyal/do-designed-the-website"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="Front End Development"
                  description='The front end is also commonly referred to as the client side, or more broadly speaking, the user interface.

                  While many people use front end to describe website-related development, it can refer to any software that a user interacts with.
                  
                  For the purpose of this article, let’s use a broader definition.'
                  ghLink="https://www.fiverr.com/rajkumararyal/do-designed-the-website"
                  />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="SEO"
                  description=" the number of users who reach your site via organic search results. Users are far more likely to click on search results that appear near the top of the SERP, which is why it’s important to use your SEO strategy to rank relevant pages as highly as you can."

                  ghLink="https://www.fiverr.com/rajkumararyal/do-designed-the-website"
                />
              </Col>
    
              {/* <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={leaf}
                  isBlog={false}
                  title="Plant AI"
                  description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                  ghLink="https://github.com/soumyajit4419/Plant_AI"
                  demoLink="https://plant49-ai.herokuapp.com/"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={suicide}
                  isBlog={false}
                  title="Ai For Social Good"
                  description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                  ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                  // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={emotion}
                  isBlog={false}
                  title="Face Recognition and Emotion Detection"
                  description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                  Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                  ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                  // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                />
              </Col> */}
            </Row>
          </Container>
        </Container>
    )
        
          
}

export default Services