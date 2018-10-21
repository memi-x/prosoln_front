import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const LeftSideBar = (props) => {
    return(
        <div>
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
        </div>
    )
}

export default LeftSideBar;