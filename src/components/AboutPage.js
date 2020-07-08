import React, { Component } from "react";
import { Jumbotron, Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

class AboutPage extends Component {

    render() {
        return (
            <section id="about">
                <Jumbotron className="jumbotron-about">
                    <div className="inner-jumbotron-about">
                        <h1>About Me</h1>
                        <p style={{"marginBottom": "5%"}}>Click each icon below to learn a little more about me!</p>
                        <Row>
                            <Col>
                                <Row className="center"><p>Education</p></Row>
                                <Row className="center"><FaGraduationCap className="about-me-icon"/></Row>
                            </Col>
                            <Col>
                                <Row className="center"><p>Work Experience</p></Row>
                                <Row className="center"><FaBriefcase className="about-me-icon"/></Row>
                            </Col>
                            
                            <Col>
                                <Row className="center"><p>Technologies</p></Row>
                                <Row className="center"><FaCode className="about-me-icon"/></Row>
                            </Col>
                        </Row>

                    </div>
                </Jumbotron>
            </section>
        );
    }
}

export default AboutPage;