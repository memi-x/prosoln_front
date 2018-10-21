import React from 'react';
import { CardTitle } from 'reactstrap';

const MostRecentLinks = () => {
    return(
        <div>
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
        </div>
    )
}

export default MostRecentLinks;