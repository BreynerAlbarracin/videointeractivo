import React from 'react';
import { TiUserOutline, TiThumbsUp, TiThumbsDown } from 'react-icons/ti'
import { Row, Col, Card } from 'react-bootstrap'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Row className="p-5">
                <Row className="mx-auto">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col >
                                        <Card.Title className="text-center">
                                            <TiUserOutline fontSize={70} />
                                        </Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Title className="text-center h1">200</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Cantidad de Estudiantes</Card.Subtitle>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col >
                                        <Card.Title className="text-center">
                                            <TiThumbsUp fontSize={70} />
                                        </Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Title className="text-center h1">35.7</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Mejor Puntaje</Card.Subtitle>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col><Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col >
                                        <Card.Title className="text-center">
                                            <TiThumbsDown fontSize={70} />
                                        </Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Title className="text-center h1">21.9</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Peor Puntaje</Card.Subtitle>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row >
        )
    }
}