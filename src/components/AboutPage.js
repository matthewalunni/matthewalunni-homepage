import React, { Component, useState } from "react";
import { Jumbotron, Modal, Card, Button, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaCode, FaDownload } from 'react-icons/fa';
import { Link } from "react-router-dom";

class AboutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            educationShowing: false,
            workExperienceShowing: false,
            technologiesShowing: false,
        }
    }

    showEducation = () => {
        this.setState({ educationShowing: true })
    }

    showTechnologies = () => {
        this.setState({ technologiesShowing: true })
    }

    showWorkExperience = () => {
        this.setState({ workExperienceShowing: true })
    }

    close = () => {
        this.setState({
            educationShowing: false,
            workExperienceShowing: false,
            technologiesShowing: false,
        })
    }

    render() {
        return (
            <section id="about">
                <Jumbotron className="jumbotron-about">
                    <div className="inner-jumbotron-about">
                        <h1>About Me</h1>
                        <p style={{ "marginBottom": "5%" }}>Click each icon below to learn a little more about me!</p>
                        <Row>
                            <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} onClick={this.showEducation}>
                                <Row className="center"><FaGraduationCap className="about-me-icon" /></Row>
                                <Row className="center about-col-heading"><p>Education</p></Row>
                            </Col>
                            <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }} onClick={this.showWorkExperience}>
                                <Row className="center"><FaBriefcase className="about-me-icon" /></Row>
                                <Row className="center about-col-heading"><p>Work Experience</p></Row>
                            </Col>

                            <Col xs={{ span: 12, order: 3 }} md={{ span: 4, order: 3 }} onClick={this.showTechnologies}>
                                <Row className="center"><FaCode className="about-me-icon" /></Row>
                                <Row className="center about-col-heading"><p>Technologies</p></Row>
                            </Col>
                        </Row>

                        <Modal show={this.state.educationShowing} onHide={this.close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Education</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p class="modal-text"><strong>Honours Bachelor of Computing and Business, Graduated April 2020</strong></p>
                                <p class="modal-text">Brock University, St. Catharines, Ontario</p>
                                <ul>
                                    <li>Entrance Scholarship, $5000, September 2015</li>
                                    <li>Rotary Medal Scholarship. $500, June 2015</li>
                                </ul>
                                <p class="modal-text">Coursework: </p>
                                <ul>
                                    <li>Data Structures and Abstraction</li>
                                    <li>Advanced Data Structures</li>
                                    <li>Algorithms</li>
                                    <li>Internet Technologies</li>
                                    <li>Database Systems</li>
                                    <li>Introduction to Artificial Intelligence</li>
                                    <li>Advanced Object-Oriented Programming</li>
                                    <li>Mobile Computing</li>
                                    <li>Software Development</li>
                                    <li>Computer Networks</li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.close}>
                                    Close
                                </Button>
                                <Link className="btn btn-primary white-text button" to='/files/Matthew Alunni Resume.pdf' target="_blank" download><FaDownload /> &nbsp;Resume</Link>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={this.state.workExperienceShowing} onHide={this.close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Work Experience</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p class="modal-text"><strong>Security Analyst</strong></p>
                                <p class="modal-text">Royal Bank of Canada</p>
                                <ul>
                                    <li>Worked in an agile environment creating Python/Django web applications using an SQL database on the backend to create a ticketing system to manage the work of security consultants.</li>
                                    <li>Used HTML, CSS, JavaScript, and JQuery to follow mockups in creating a front end for a ticketing system, showing graphs, statistics, and graphics.</li>
                                </ul>
                                <hr style={{ "borderTop": "2px solid #bbb" }} />
                                <p class="modal-text"><strong>Security Analyst Co-op</strong></p>
                                <p class="modal-text">Royal Bank of Canada</p>
                                <ul>
                                    <li>Independently created C# applications to help automate project intake by using analytical skills to save time for cybersecurity consultants.</li>
                                    <li>Created applications that reflected the needs of a team by effectively using communication skills to identify that team’s software requirements successfully.</li>
                                    <li>Added utility by creating a .NET application that integrated with tools such as Active Directory to provide convenience for RBC employees.</li>
                                </ul>
                                <hr style={{ "borderTop": "2px solid #bbb" }} />
                                <p class="modal-text"><strong>Developer</strong></p>
                                <p class="modal-text">Keystone Software Solutions</p>
                                <ul>
                                    <li>Created Windows forms applications for customers integrating Microsoft Excel to SAP
                                        Business One to help customers reduce costs.</li>
                                    <li>Helped meet deadlines by using problem-solving skills to organize resources effectively.</li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.close}>
                                    Close
                                </Button>
                                <Link className="btn btn-primary white-text button" to='/files/Matthew Alunni Resume.pdf' target="_blank" download><FaDownload /> &nbsp;Resume</Link>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={this.state.technologiesShowing} onHide={this.close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Technologies</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p class="modal-text"><strong>Technical Summary</strong></p>
                                <hr style={{ "borderTop": "2px solid #bbb" }} />
                                <p class="modal-text">Front-End Technologies: </p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>JQuery</li>
                                    <li>React</li>
                                </ul>
                                <hr style={{ "borderTop": "2px solid #bbb" }} />
                                <p class="modal-text">Back-End Technologies: </p>
                                <ul>
                                    <li>Java</li>
                                    <li>MySQL</li>
                                    <li>Python</li>
                                    <li>C#</li>
                                    <li>React Native & Android Studio</li>
                                </ul>
                                
                                <hr style={{ "borderTop": "2px solid #bbb" }} />
                                <p class="modal-text">Frameworks & Other Technologies: </p>
                                <ul>
                                    <li>Django</li>
                                    <li>.NET Framework</li>
                                    <li>Node.js</li>
                                    <li>Git</li>
                                    <li>JIRA</li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.close}>
                                    Close
                                </Button>
                                <Link className="btn btn-primary white-text button" to='/files/Matthew Alunni Resume.pdf' target="_blank" download><FaDownload /> &nbsp;Resume</Link>
                            </Modal.Footer>
                        </Modal>


                    </div>
                </Jumbotron>
            </section>
        );
    }
}

export default AboutPage;