import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Row>
                <Col className="p-4">
                    <div className="py-5 text-center">
                        Menu Principal
                    </div>
                    <Button onClick={() => this.props.changeView('home')} variant="info" block>
                        Inicio
                    </Button>
                    <Button onClick={() => this.props.changeView('students')} variant="info" block>
                        Estudiantes
                    </Button>
                    <Button onClick={() => this.props.changeView('results')} variant="info" block>
                        Resultados
                    </Button>
                    <Button onClick={() => this.props.changeView('register')} variant="info" block>
                        Registrar Salón
                    </Button>
                    <Button onClick={() => this.props.changeView('logout')} variant="danger" block>
                        Salir
                    </Button>
                </Col>
            </Row>
        )
    }
}