import React from 'react';
import MostRecentLinks from './mostRecentLinks';
import CategoryWithHigherLinks from './categoryWithHigherLinks';

const RightSidebar = (props) => {
    return(
        <div>
            <CategoryWithHigherLinks/>
            <MostRecentLinks/>
        </div>
    )
}

export default RightSidebar;