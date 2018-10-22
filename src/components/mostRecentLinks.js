import React, {Component} from 'react';
import { Button } from 'reactstrap';

class MostRecentLinks extends Component {
    render(){
        // const allLinks = links.map((link, index) => (
        //     <CardTitle tag="a" href="first" key={index+1}>
        //         {link.title}
        //     </CardTitle>
        //     ))
        // const {fetchLinks} = this.props
        return(
            <div>
                <h3 align="center">Most Recent Links</h3>
                {/* {allLinks} */}
                <Button onClick={this.handleFetchLinks}>click</Button>
            </div>
        )
    }
}

export default MostRecentLinks;