import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'reactstrap';
import { fetchLinks } from '../redux/actionCreators/linksActions';

class Links extends Component {
    componentDidMount(){
        const { fetchLinks } = this.props;
        fetchLinks()
    }
    render(){
        const { links } = this.props;
        console.log('data links', links)
        // const allLinks = links.map(link => (
        //     <Card body>
        //         <CardTitle tag="a" href="first">
        //         {link.title}
        //         </CardTitle>
        //         <CardText>category: {link.category}</CardText>
        //         <CardText>Posted by: Ezrqn kemboi</CardText>
        //     </Card>
        // ))
        return(
            <div>
                
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
}

const actionCreators = {
    fetchLinks
}

const mapStateToProps = ({ links }) => ({
    ...links
})

export default connect(mapStateToProps, actionCreators)(Links);