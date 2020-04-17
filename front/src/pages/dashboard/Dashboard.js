import React from 'react';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import Home from './components/Home'
import "./Dashboard.css"

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            view: 'home'
        }
    }

    ChangeView = view => {
        if (view == 'logout') {
            this.setState({ logout: true })
        }
        this.setState({ view: view })
        this.setState({ loading: false })
    }

    render() {
        return (
            <Container fluid className="p-4 db-w full-h">
                {this.state.logout ? <Redirect to={'/'} /> : null}
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
                            {this.state.loading ?
                                <div className="h-100 w-100 d-flex justify-content-center">
                                    <Spinner animation="grow" className="align-self-center" />
                                </div>
                                : this.state.view === 'home' ?
                                    <Home />
                                    : null}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}