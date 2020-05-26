import React from 'react'
import './LoginAdmin.css'
import { LoginAdminService } from '../../services/LoginService'
import { Button, Container, Row, Col, Form, Alert, Card } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

export default class LoginAdmin extends React.Component {
    state = {
        admin: JSON.parse(localStorage.getItem("Admin"))
    }

    constructor(props) {
        super(props)
        console.log("Login Admin")

        this.SubmitForm = this.SubmitForm.bind(this);
    }

    SubmitForm = (e) => {
        e.preventDefault()

        console.log("Login Request")

        let loginData =
        {
            user: e.target.elements.user.value,
            pass: e.target.elements.pass.value
        }

        LoginAdminService(loginData)
            .then(response => {
                console.log("Login Result: ")
                console.log(response)

                if (response.err) {
                    this.setState({ errCode: response.err, errText: response.text })
                    return
                }

                if (response.result) {
                    localStorage.setItem("Admin", JSON.stringify(response.result))
                    this.setState({ admin: response.result })
                }
            });
    }

    render() {
        console.log("render")
        if (this.state.admin) {
            console.log("Redirect Home")
            return <Redirect to={'/home'} />
        }

        return (
            <Container fluid className="full-h bg-m p-5">
                <Row className="h-100">
                    {this.state.errCode ?
                        this.state.errCode === 1 ?
                            <Alert className='alert-top' variant='warning'>
                                {this.state.errText}
                            </Alert>
                            : this.state.errCode === 2 ?
                                <Alert className='alert-top' variant='danger'>
                                    {this.state.errText}
                                </Alert> : null
                        : null}
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