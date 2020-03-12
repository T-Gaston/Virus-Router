import React from "react";
import { Form } from "semantic-ui-react"

export default class VirusForm extends React.Component {
  state = {name: "", body: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name:"", body: "",});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
          label="Name"
          placeholder="Name of Virus"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />

          <Form.Input
          label="Body"
          placeholder="Info About Virus"
          name="body"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}