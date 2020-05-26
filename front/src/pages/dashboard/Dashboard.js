import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import Home from './components/Home'
import Students from './components/Students'
import RegisterRoom from './components/RegisterRoom'
import EnrolledStudent from './components/EnrolledStudent'
import "./Dashboard.css"

export default class Dashboard extends React.Component {
    state = {
        view: 'home'
    }

    constructor(props) {
        super(props)
        console.log("Dashboard")
    }

    ChangeView = view => {
        console.log("Change View -> " + view)

        if (view === 'admin') {
            this.setState({ logout: true })
        }

        this.setState({
            view: view
        })
    }

    render() {
        if (this.state.logout) {
            return <Redirect to={'/admin'} />
        }

        return (
            <Container fluid className="p-4 db-w full-h">
                <Row className="h-100">
                    <Col md={2}>
                        <Card className="h-100" style={{ borderRadius: '2rem', overflow: 'hidden' }}>
                            <SideMenu
                                changeView={this.ChangeView}
                            />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100" style={{ borderRadius: '2rem', overflow: 'hidden' }}>
                            {this.state.view === 'home' ?
                                <Home />
                                : this.state.view === 'students' ?
                                    <Students /> :
                                    this.state.view === 'register' ?
                                        <RegisterRoom /> :
                                        this.state.view === 'enrolledstudent' ?
                                            <EnrolledStudent />
                                            : null
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}