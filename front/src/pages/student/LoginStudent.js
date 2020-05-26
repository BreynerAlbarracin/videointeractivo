import React from 'react'
import './LoginStudent.css'
import 'react-bootstrap'
import { LoginStudentService } from '../../services/LoginService'
import { Row, Card, Col, Button, Form, Container, Alert, Modal } from 'react-bootstrap'
import { SadEmoji, HappyEmoji } from "../../assets/icons/Emojis"

export default class LoginStudent extends React.Component {
    state = {}

    constructor(props) {
        super(props)
        console.log("Login Student")
    }

    SubmitForm = event => {
        event.preventDefault()

        let loginData =
        {
            user: event.target.elements.number.value
        }

        console.log(loginData)

        LoginStudentService(loginData)
            .then(response => {
                console.log("Login result: ")
                console.log(response)

                if (response.err) {
                    console.log("Error -> " + response.text)
                    this.setState({ errCode: response.err, errText: response.text })
                    return
                }

                if (response.result) {
                    console.log("Result -> State")
                    this.setState({ result: response.result })
                }
            });
    }

    ModalSelect = event => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <Container fluid className="full-h bg-m p-5">
                <Row>
                    <Col className="align-self-center col-md-4 mx-auto">
                        <Card className="mx-auto p-3">
                            <Form className="text-center" onSubmit={this.SubmitForm}>
                                <Form.Group controlId="number">
                                    <p className="h1 mx-3 my-5">HOLA!</p>
                                    <Form.Control type="text" placeholder="Pon tu numero justo aqui" />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    JUGAR!
                                </Button>
                            </Form>
                        </Card>
                        {this.state.errCode ?
                            this.state.errCode === 1 ?
                                <Alert variant='warning'>
                                    {this.state.errText}
                                </Alert>
                                : this.state.errCode === 2 ?
                                    <Alert variant='danger'>
                                        {this.state.errText}
                                    </Alert> : null
                            : null}
                        {this.state.result ?
                            <Modal onHide={this.ModalSelect}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.ModalSelect}>
                                        No! Asi no me llamo! <SadEmoji />
                                    </Button>
                                    <Button variant="primary" onClick={this.ModalSelect}>
                                        Si! Soy yo! <HappyEmoji />
                                    </Button>
                                </Modal.Footer>
                            </Modal> :
                            null
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}