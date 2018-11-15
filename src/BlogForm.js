import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
    }
  }

  handleClick = (evt) => {
    evt.preventDefault();
    this.props.history.push('/');
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handlePost(this.state);
    this.props.history.push('/');
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="BlogForm">
        <h1>{this.props.header}</h1>
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange} type="text" name="title" id="title" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>Description</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange} type="text" name="description" id="description" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="body" sm={2}>Body</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange} type="textarea" name="body" id="body" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 5, offset: 0 }}>
            <Button className="mx-2" color="success">Save</Button>
            <Button onClick={this.handleClick}>Cancel</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default BlogForm;
