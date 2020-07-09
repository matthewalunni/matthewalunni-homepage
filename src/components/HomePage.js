import React, { Component } from "react";
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { Link } from "react-router-dom";


class HomePage extends Component {

    render() {
        return (
            <section id="home">
                <Jumbotron className="jumbotron-home">
                    <div className="inner-jumbotron-home">
                        <h1 className="jumbotron-heading">Hello, my name is Matthew Alunni.</h1>
                        <p className="courier">
                            I am a software developer.
                            Check out my <a href="#projects">personal projects</a>, or feel free to read some of my 
                            <a href="#testimonials"> testimonials</a> given to me by previous employers.
                        </p>
                        <Row>
                            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                                <Link className="w-100 btn btn-primary white-text top-button" to='/files/Matthew Alunni Resume.pdf' target="_blank" download><FaDownload /> &nbsp;Resume</Link>
                            </Col>
                            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                                <Button variant="primary" className="w-100 button" onClick={() => { window.open("https://github.com/matthewalunni") }}><FaGithub /> &nbsp; GitHub</Button>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
            </section>
        );
    }
}

export default HomePage;