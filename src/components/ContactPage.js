import React, { Component } from "react";
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Waypoint } from 'react-waypoint';

class ContactPage extends Component {
    onEnter = () => {
        var contactLink = document.getElementById("contactLink");
        contactLink.classList.add("active");

        var inactivelinks = [];
        var aboutLink = document.getElementById("aboutLink");
        var projectsLink = document.getElementById("projectsLink");
        var homeLink = document.getElementById("homeLink");

        inactivelinks.push(aboutLink);
        inactivelinks.push(projectsLink);
        inactivelinks.push(homeLink);

        for (const link in inactivelinks) {
            try {
                link.classList.remove("active");
            } catch (error) {

            }
        }
    }

    onLeave = () => {
        try {
            var contactLink = document.getElementById("contactLink");
            contactLink.classList.remove("active");
        } catch (error) {

        }
    }


    render() {
        return (
            <section id="contact">

                <Waypoint
                    onEnter={this.onEnter}
                    onLeave={this.onLeave}>
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
                </Waypoint>
            </section>
        );
    }
}

export default ContactPage;