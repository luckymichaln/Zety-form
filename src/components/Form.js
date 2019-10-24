import React, { Component } from 'react';
import Button from './elements/Button';
import Input from './elements/Input';
import Select from './elements/Select';
import { fieldsOptions, positionsOptions } from '../constants/form-data';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        nickname: '',
        email: '',
        field: '',
        position: ''
      },
      activeListIndex: 0
    }

    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
    this.isName = this.isName.bind(this);
    this.isEmail = this.isEmail.bind(this);
    this.required = this.required.bind(this);
  }

  validate(name, email, required) {
    if (name) {
      this.isName()
    }

    if (email) {
      this.isEmail()
    }

    if (required) {
      this.required()
    }
    console.log(this.state.form, 'validate callback')
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  handleChange(event) {
    const key = event.target.name;
    const val = event.target.value;

    this.setState(state => ({
      form: { ...state.form, [key]: val }
    }));
  }

  handleFieldsChange(event) {
    const val = event.target.value;

    const index = fieldsOptions.map((el, i) => {
      const selectedEl = el.value === val
      return selectedEl ? i : null
    }).filter(el => el !== null)[0];

    this.setState({
      activeListIndex: index
    })
    this.handleChange(event)
  }

  isName(name) {
    var regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    return regex.text(name);
  }

  isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\/@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  required(value) {
    return value.length > 0;
  }

  render() {
    const { validate, handleSubmit, handleFieldsChange, handleChange, state } = this;
    const { activeListIndex, form } = state;

    return (
      <form id="zety-form" onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Name"
          value={form.name}
          onBlur={validate}
          onChange={handleChange}
        />
        <Input
          name="nickname"
          label="Nickname"
          value={form.nickname}
          onBlur={validate}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          label="E-mail"
          value={form.email}
          onBlur={validate}
          onChange={handleChange}
        />
        <Select
          name="field"
          list={fieldsOptions}
          placeholder="Field"
          value={form.field}
          onChange={handleFieldsChange}
        />
        <Select
          name="position"
          placeholder="Position"
          list={positionsOptions[activeListIndex]}
          value={form.position}
          onChange={handleChange}
        />
        <Button
          label="submit"
        />
      </form>
    )
  }
}

export default Form
