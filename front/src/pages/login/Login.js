import React from 'react'
import './Login.css'
import { LoginService } from '../../services/Services'
import { Button, Container, Row, Col, Form, Alert, Card } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    SubmitForm = event => {
        event.preventDefault()

        this.setState({})

        let loginData =
        {
            user: event.target.elements.user.value,
            pass: event.target.elements.pass.value
        }

        LoginService(loginData)
            .then(response => {
                console.log("Login result: ")
                console.log(response)

                if (response.result) {
                    console.log("Result -> State")
                    this.setState({ result: response.result })
                }

                if (response.err) {
                    console.log("Error -> " + response.text)
                    this.setState({ errCode: response.err, errText: response.text })
                    return
                }
            });
    }

    render() {
        return (
            <Container fluid className="full-h bg-m p-5">
                {this.state.result ? <Redirect to={'/home'} /> : null}
                <Row>
                    {this.state.errCode ?
                        this.state.errCode === 1 ?
                            <Alert className='alert-top' variant='warning'>
                                {this.state.errText}
                            </Alert>
                            : this.state.errCode === 2 ?
                                <Alert variant='danger'>
                                    {this.state.errText}
                                </Alert> : null
                        : null}
                </Row>
                <Row className="h-100">
                    <Col className="col-md-4 my-auto">
                        <Card className="p-3">
                            <Form onSubmit={this.SubmitForm}>
                                <Form.Group controlId="user">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placeholder="Tu Nombre De Usuario Va Aqui" />
                                </Form.Group>
                                <Form.Group controlId="pass">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Tu Contraseña Va Aqui" />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Entrar
                            </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container >
        )
    }
}