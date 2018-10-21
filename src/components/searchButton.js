import React from 'react';
import {Input, InputGroup, Button, InputGroupAddon } from 'reactstrap';

const SearchButton = (props) => {
    return(
    <InputGroup id="input-search">
        <Input placeholder="Search" />
        <InputGroupAddon addonType="append">
            <Button outline color="success">
            Search
            </Button>
        </InputGroupAddon>
    </InputGroup>
    )
}
export default SearchButton;