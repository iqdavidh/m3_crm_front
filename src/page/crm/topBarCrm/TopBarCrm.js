import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

class TopBarCrm extends Component {
  render() {
    return (
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    );
  }
}

export default TopBarCrm;
