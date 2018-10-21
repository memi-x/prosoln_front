import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Links = (props) => {
    return(
        <div>
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
        </div>
    )
}
export default Links;