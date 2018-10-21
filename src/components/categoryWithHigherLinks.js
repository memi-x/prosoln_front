import React from 'react';
import { Table } from 'reactstrap';

const CategoryWithHigherLinks = (props) => {
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
        </div>
    )
}

export default CategoryWithHigherLinks;