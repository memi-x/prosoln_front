import React, {Component} from 'react';
import { CardTitle } from 'reactstrap';

class MostRecentLinks extends Component {
    render(){
        // const { links } = this.props;
        // const allLinks = links.map((link, index) => (
        //     <CardTitle tag="a" href="first" key={index+1}>
        //         {link.title}
        //     </CardTitle>
        //     ))
        return(
            <div>
                <h3 align="center">Most Recent Links</h3>
                {/* {allLinks} */}
            </div>
        )
    }
}

export default MostRecentLinks;