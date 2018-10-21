import React, { Component } from 'react';
import { Table } from 'reactstrap';

class CategoryWithHigherLinks extends Component{
  constructor(props){
    super(props)
    this.state = {
      category: 'My Category',
      noOfLinks: 0
    }
  }
  handleLoad = () => {
    this.setState((prevState) => ({
      category: prevState.category,
      noOfLinks: prevState.noOfLinks + 1
    }))
  }
  render(){

    return(
        <div>
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
                    <td>{this.state.category}</td>
                    <td>{this.state.noOfLinks}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>{this.state.category}</td>
                    <td>{this.state.noOfLinks}</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>{this.state.category}</td>
                    <td>{this.state.noOfLinks}</td>
                  </tr>
                </tbody>
              </Table>
        </div>
    )
  }
}

export default CategoryWithHigherLinks;