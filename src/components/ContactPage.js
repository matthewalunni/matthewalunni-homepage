import React, { Component, useState } from "react";
import { Jumbotron, Modal, Card, Button, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa';
import { Link } from "react-router-dom";

class ContactPage extends Component {

    render() {
        return (
            <section id="contact">
                <Jumbotron className="jumbotron-contact">
                    <div className="inner-jumbotron-contact">
                        <h1 className="contact-text">Get In Touch</h1>
                        <h4 className="contact-text">Matthew Alunni</h4>
                        <h6 className="contact-text">Toronto, Ontario, Canada</h6>
                        <Row className="social-links">
                            <Col><Link><FaLinkedinIn className="social-icons" /></Link></Col>
                            <Col><Link><FaMailBulk className="social-icons" /></Link></Col>
                            <Col><Link><FaGithub className="social-icons" /></Link></Col>
                        </Row>



                    </div>
                </Jumbotron>
            </section>
        );
    }
}

export default ContactPage;