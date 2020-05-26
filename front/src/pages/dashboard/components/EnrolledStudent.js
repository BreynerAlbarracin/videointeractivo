import React from 'react'
import { Row, Col, Card, Form, Dropdown, Button, Alert } from 'react-bootstrap'
import { GetStudents, GetRooms, EnrolledStudents } from '../../../services/DashboardService'

export default class EnrolledStudent extends React.Component {
    state = {
        admin: JSON.parse(localStorage.getItem("Admin"))
    }

    constructor(props) {
        super(props)
        console.log("EnrolledStudent")
    }

    componentDidMount() {
        console.log("Get Students")
        GetStudents().then(students => {
            console.log(students)

            if (students.err) {
                this.setState({
                    err: students.err,
                    text: students.text
                })

                return
            }

            console.log("Get Rooms")
            GetRooms().then(rooms => {
                console.log(rooms)

                if (students.err) {
                    this.setState({
                        err: students.err,
                        text: students.text
                    })
                }

                this.setState({
                    students: students.result,
                    rooms: rooms.result
                })
            })
        })
    }

    selectStudent(student) {
        console.log(student)

        this.setState({
            studentSelect: student
        })
    }

    selectRoom(room) {
        console.log(room)

        this.setState({
            roomSelect: room
        })
    }

    OnSubmit(e) {
        e.preventDefault()

        var passwd = e.target.elements.passwd.value

        console.log(passwd)

        if (passwd !== "") {
            EnrolledStudents({
                teacherId: this.state.admin._id,
                studentId: this.state.studentSelect._id,
                roomId: this.state.roomSelect._id,
                accessNumber: passwd
            }).then(result => {
                console.log(result)
                if (result.result) {
                    console.log("Result -> State")
                    this.setState({
                        ok: true,
                        text: "Se matriculo al estudiante",
                        studentSelect: null,
                        roomSelect: null
                    })
                }
            })
        } else {
            this.setState({
                errCode: 2,
                errText: "Sebe ingresar la constraseña"
            })
        }
    }

    render() {
        console.log("render")
        console.log(this.state)

        return (
            <Row className="p-5">
                {this.state.ok ?
                    <Alert className='alert-top' variant='success'>
                        {this.state.text}
                    </Alert> :
                    this.state.errCode ?
                        this.state.errCode === 1 ?
                            <Alert className='alert-top' variant='warning'>
                                {this.state.errText}
                            </Alert>
                            : this.state.errCode === 2 ?
                                <Alert className='alert-top' variant='danger'>
                                    {this.state.errText}
                                </Alert>
                                : null
                        : null}
                <Col>
                    <Card className="mt-5 p-5">
                        <Form onSubmit={e => this.OnSubmit(e)}>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Seleccione Un Estudiante</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        {this.state.studentSelect ?
                                            this.state.studentSelect.name :
                                            "Seleccione un Estudiante"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {this.state.students?.map(student => {
                                            return <Dropdown.Item key={student._id} onClick={e => this.selectStudent(student)}>{student.name}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Seleccione Una Sala</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        {this.state.roomSelect ?
                                            this.state.roomSelect.name :
                                            "Seleccione una Sala"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {this.state.rooms?.map(room => {
                                            return <Dropdown.Item key={room._id} onClick={e => this.selectRoom(room)}>{room.name}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                            <Form.Group as={Col} controlId="passwd">
                                <Form.Label>Contraseña Para El Estudiante</Form.Label>
                                <Form.Control type="number" placeholder="La Contraseña Va Aqui" />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Matricular Estudiante
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }
}