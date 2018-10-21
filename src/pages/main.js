import React, {Component} from 'react';
import { Col, Row, Container } from 'reactstrap';
import NavBar from '../components/navbar';
import LeftSideBar from '../components/leftSideBar';
import SearchButton from '../components/searchButton';
import Links from '../components/links';
import RightSidebar from '../components/rightSideBar';

class Main extends Component{
    render(){
        return(
            <div>
                <Container fluid>
                    <NavBar />
                    <Row id="main-page">
                        <Col xs="2" id="left-sidebar">
                            <LeftSideBar/>
                        </Col>
                        <Col xs="7">
                            <SearchButton />
                            <Links />
                        </Col>
                        <Col xs="3" id="right-sidebar">
                            <RightSidebar/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Main;