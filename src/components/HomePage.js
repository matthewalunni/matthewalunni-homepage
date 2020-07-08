import React, { Component } from "react";
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";


class HomePage extends Component {

    render() {
        return (
            <section id="home">
                <Jumbotron className="jumbotron-home">
                    <div className="inner-jumbotron-home">
                        <h1>Hello, my name is Matthew Alunni.</h1>
                        <p>
                            I am a software developer.
                            Check out my <a href="#projects">personal projects</a>, or some of my previous <a href="#projects">freelance work</a>.
                            Feel free to read some <a href="#testimonials">testimonials</a> given to me by previous employers or freelance customers.

                        </p>
                        <Row>
                            <Col>
                                <Link className="w-100 btn btn-primary white-text" to='/files/Matthew Alunni Resume.pdf' target="_blank" download>Resume</Link>
                            </Col>
                            <Col>
                                <Button variant="primary" className="w-100" onClick={() => {window.open("https://github.com/matthewalunni")}}><FaGithub /> &nbsp; GitHub</Button>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
            </section>
        );
    }
}

export default HomePage;