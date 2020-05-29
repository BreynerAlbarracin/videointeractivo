import React from 'react';
import { Row, Col, Table, Card, Alert, Spinner } from 'react-bootstrap'
import { GetScores } from '../../../services/DashboardService'

export default class Results extends React.Component {
    state = {
        loading: true
    }

    constructor(props) {
        super(props)
        console.log("Results")
    }

    componentDidMount() {
        GetScores().then(scores => {
            if (scores.err) {
                this.setState({
                    err: scores.err,
                    text: scores.text
                })

                return
            }

            this.setState({
                scores: scores,
                loading: false
            })
        })
    }

    render() {
        return (
            <Row className="p-5">
                <Col className="text-center col-12 my-3">
                    <h4>
                        Lista de Resultados
                        </h4>
                </Col>

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
                {this.state.loading ?
                    <div className="h-100 w-100 d-flex justify-content-center">
                        <Spinner animation="grow" className="align-self-center" />
                    </div>
                    :
                    <Col className="mx-auto">
                        <Card className="p-5">
                            <Table responsive striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Estudiante</th>
                                        <th>Sala</th>
                                        <th>Tiempo Empleado</th>
                                        <th>Intentos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.scores?.result?.map((score) => {
                                        return <tr>
                                            <td>{score.studentId}</td>
                                            <td>{score.roomId}</td>
                                            <td>{score.score}</td>
                                            <td>{score.errorsCount}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                }
            </Row>
        )
    }
}