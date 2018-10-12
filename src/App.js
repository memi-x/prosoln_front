import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Button,
  Table,
  Input,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">ProSoln</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/register">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Log In</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Row id="main-page">
            <Col xs="2" id="left-sidebar">
              <ListGroup flush>
                <ListGroupItem tag="a" href="#me">
                  This is no one
                </ListGroupItem>
                <ListGroupItem tag="a" href="#me">
                  This is no two
                </ListGroupItem>
                <ListGroupItem tag="a" href="#me">
                  This is no three
                </ListGroupItem>
                <ListGroupItem tag="a" href="#me">
                  This is no one
                </ListGroupItem>
                <ListGroupItem tag="a" href="#me">
                  This is no two
                </ListGroupItem>
                <ListGroupItem tag="a" href="#me">
                  This is no three
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="7">
              <InputGroup id="input-search">
                <Input placeholder="Search" />
                <InputGroupAddon addonType="append">
                  <Button outline color="success">
                    Search
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              <Card body>
                <CardTitle tag="a" href="first">
                  {' '}
                  This first title link provided by the user
                </CardTitle>
                <CardText>Posted by: Ezrqn kemboi</CardText>
              </Card>
              <Card body>
                <CardTitle tag="a" href="first">
                  {' '}
                  This second title link provided by the user
                </CardTitle>
                <CardText>Posted by: Ezrqn kemboi</CardText>
              </Card>
              <Card body>
                <CardTitle tag="a" href="first">
                  {' '}
                  This third title link provided by the user
                </CardTitle>
                <CardText>Posted by: Ezrqn kemboi</CardText>
              </Card>
              <Card body>
                <CardTitle tag="a" href="first">
                  {' '}
                  This fourth title link provided by the user
                </CardTitle>
                <CardText>Posted by: Ezrqn kemboi</CardText>
              </Card>
              <Card body>
                <CardTitle tag="a" href="first">
                  {' '}
                  This fifth title link provided by the user
                </CardTitle>
                <CardText>Posted by: Ezrqn kemboi</CardText>
              </Card>
              <Card body>
                <CardTitle tag="a" href="first">
                  {' '}
                  This sixth title link provided by the user
                </CardTitle>
                <CardText>Posted by: Ezrqn kemboi</CardText>
              </Card>
              <Card body>
                <CardTitle tag="a" href="first">
                  {' '}
                  This seventh title link provided by the user
                </CardTitle>
                <CardText>Posted by: Ezrqn kemboi</CardText>
              </Card>
            </Col>
            <Col xs="3" id="right-sidebar">
              <Table borderless>
                <thead>
                  <tr>
                    <th />
                    <th>Category</th>
                    <th>Links</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Technology</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>marketing</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Graphics</td>
                    <td>21</td>
                  </tr>
                </tbody>
              </Table>
              <h3 align="center">Most Recent Links</h3>
              <CardTitle tag="a" href="first">
                {' '}
                This second title link provided by the user
              </CardTitle>
              <CardTitle tag="a" href="first">
                {' '}
                This second title link provided by the user
              </CardTitle>
              <CardTitle tag="a" href="first">
                {' '}
                This second title link provided by the user
              </CardTitle>
            </Col>
          </Row>
          <Navbar color="light" light expand="md">
            <Nav>
              <NavItem>@ProSoln</NavItem>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default App;
