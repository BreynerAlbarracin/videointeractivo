import React from "react"
import { Row, Col, Card, Form, Button } from 'react-bootstrap'

export default class RegisterRoom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    SubmitForm(event) {
        event.preventDefault()


        /*
        "name": "Matematicas 1",
        "description": "Asociacion entre monedas y productos",
        "url": "videos1" 
        */
    }

    render() {
        return (
            <Row className="p-5">
                <Col className="col-12">

                </Col>
                <Col>
                    <Card className="p-5">
                        <Form onSubmit={(event) => this.SubmitForm(event)}>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre de la sala" />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" placeholder="Breve descripción de la sala" />
                            </Form.Group>
                            <Form.Group controlId="url">
                                <Form.Label>URL</Form.Label>
                                <Form.Control type="text" placeholder="URL de la sala" />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Crear
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }
}