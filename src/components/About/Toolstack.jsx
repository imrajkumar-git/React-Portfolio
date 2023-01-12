import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGitlab } from "react-icons/ai";
import { FaSlack } from "react-icons/fa";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiPostgresql,
  SiPycharm,
  SiAndroidstudio,
  SiXampp,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" id='git'>
        <AiFillGitlab />
        <a href="git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" id='git'>
        <SiXampp />
        <a href="git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" id='git'>
        <FaSlack />
        <a href="git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
    </Row>
  );
}

export default Toolstack;
