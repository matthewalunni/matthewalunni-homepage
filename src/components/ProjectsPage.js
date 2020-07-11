import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { Link } from "react-router-dom";


class ProjectsPage extends Component {

    render() {
        return (
            <section id="projects">
                <Jumbotron className="jumbotron-projects">
                    <div className="inner-jumbotron-projects">
                        <h1 className="jumbotron-heading">Personal Projects</h1>
                        <p className="courier">
                            Check out a few of my favourite personal projects! See the rest of them <a href="https://github.com/matthewalunni" target="_blank">here</a>!
                        </p>
                        <Row>
                            <Col className="center" xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
                                <CardObject
                                    title={"File Organization Tool"}
                                    description={"This program is made to help me organize my school notes. "}
                                    listItems={["Python Script"]}
                                    gitHub={"https://github.com/matthewalunni/organizefiles"}
                                />
                            </Col>
                            <Col className="center" xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}>
                                <CardObject 
                                title={"Drag & Drop Website Builder"}
                                description={"This is a drag and drop website builder used to design and export static html files."}
                                listItems={["React", "Bootstrap"]} 
                                gitHub={"https://github.com/matthewalunni/drag-and-drop-editor"}
                                seeMore={"https://matthewalunni.github.io/drag-and-drop-editor/"}  />
                            </Col>
                            <Col className="center" xs={{ span: 12, order: 3 }} md={{ span: 4, order: 3 }}>
                                <CardObject 
                                title={"Chess"}
                                description={"Chess program implemented with a minmax algorithm."} 
                                listItems={["C#"]}
                                gitHub={"https://github.com/matthewalunni/chess"} 
                                seeMore={"https://youtu.be/JqJ6I68Uxms"}
                                />
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
            </section>
        );
    }
}

class CardObject extends Component {
    showListItems = () => {
        try {
            var results = []
            for (let index = 0; index < this.props.listItems.length; index++) {

                results.push(<ListGroupItem key={index}>{this.props.listItems[index]}</ListGroupItem>)

            }
            return results;
        } catch (error) {
            return null;
        }
    }

    render() {
        return (
            <Card style={{ width: '18rem', marginBottom: "5%" }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {this.showListItems()}
                </ListGroup>
                <Card.Body>
                    <Card.Link href={this.props.seeMore}>See More</Card.Link>
                    <Card.Link href={this.props.gitHub}>Read the Code</Card.Link>
                </Card.Body>
            </Card >
        );
    }
}

export default ProjectsPage;