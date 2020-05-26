import React from 'react';
import { Row, Col, Table, Card, Alert, Spinner } from 'react-bootstrap'
import { GetStudents } from '../../../services/DashboardService'

export default class Home extends React.Component {
    state = {
        loading: true
    }

    constructor(props) {
        super(props)
        console.log("Students")
    }

    componentDidMount() {
        GetStudents().then(students => {
            if (students.err) {
                this.setState({
                    err: students.err,
                    text: students.text
                })

                return
            }

            this.setState({
                students: students,
                loading: false
            })
        })
    }

    render() {
        return (
            <Row className="p-5">
                <Col className="text-center col-12 my-3">
                    <h4>
                        Lista de Estudiantes
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
                                        <th>Nombre</th>
                                        <th>Identificación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.students?.result?.map((student) => {
                                        return <tr>
                                            <td>{student.name}</td>
                                            <td>{student.identification}</td>
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