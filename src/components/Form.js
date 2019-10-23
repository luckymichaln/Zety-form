import React, { Component } from 'react';
import Button from './elements/Button';
import Input from './elements/Input';
import Select from './elements/Select';
import { fieldsOptions, positionsOptions } from '../constants/form-data';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: null
    }

    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    console.log('validate callback')
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  render() {
    const { validate, handleSubmit } = this;

    return (
      <form id="zety-form" onSubmit={handleSubmit}>
        <Input
          label="Name"
          onBlur={validate}
        />
        <Input
          label="Nickname"
          onBlur={validate}
        />
        <Input
          type="email"
          label="E-mail"
          onBlur={validate}
        />
        <Select
          list={fieldsOptions}
        />
        <Select
          list={positionsOptions[0]}
        />
        <Button
          label="submit"
        />
      </form>
    )
  }
}

export default Form
