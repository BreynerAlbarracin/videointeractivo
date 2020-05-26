import React from 'react';
import { TiUserOutline, TiThumbsUp, TiThumbsDown } from 'react-icons/ti'
import { Row, Col, Card, Spinner, Alert } from 'react-bootstrap'
import { GetStats } from '../../../services/DashboardService'

export default class Home extends React.Component {
    state = {
        loading: true
    }

    constructor(props) {
        super(props)
        console.log("Home")
    }

    componentDidMount() {
        console.log("Loading Stats")

        GetStats().then(stats => {
            console.log(stats)

            if (stats.err) {
                this.setState({
                    err: stats.err,
                    text: stats.text
                })

                return
            }

            this.setState({
                count: stats.count,
                best: stats.best,
                worse: stats.worse,
                loading: false
            })
        })
    }

    render() {
        return (
            <Row className="p-5" >
                {this.state.err ?
                    this.state.err === 1 ?
                        <Alert className='alert-top' variant='warning'>
                            {this.state.text}
                        </Alert>
                        : this.state.err === 2 ?
                            <Alert className='alert-top' variant='danger'>
                                {this.state.text}
                            </Alert> : null
                    : null}
                {
                    this.state.loading ?
                        <div className="h-100 w-100 d-flex justify-content-center">
                            <Spinner animation="grow" className="align-self-center" />
                        </div>
                        : < Row className="p-5" >
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
                                                    <Card.Title className="text-center h1">{this.state.count}</Card.Title>
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
                                                    <Card.Title className="text-center h1">{this.state.best?.score}</Card.Title>
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
                                                    <Card.Title className="text-center h1">{this.state.worse?.score}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted text-center">Peor Puntaje</Card.Subtitle>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Row >
                }
            </Row>
        )
    }
}