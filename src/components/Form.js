import React, { Component } from 'react';
import Button from './elements/Button';
import Input from './elements/Input';
import Select from './elements/Select';
import { fieldsOptions, positionsOptions, validationMessages } from '../constants/form-data';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: {
          value: '',
          errorMsg: null,
          required: true
        },
        nickname: {
          value: '',
          errorMsg: null
        },
        email: {
          value: '',
          errorMsg: null,
          required: true,
          validEmail: true
        },
        field: {
          value: '',
          errorMsg: null,
          required: true
        },
        position: {
          value: '',
          errorMsg: null,
          required: true
        }
      },
      activeListIndex: 0
    }

    this.validate = this.validate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
  }

  validate({ name, event, value, email, string }) {
    const key = name || event.target.name;
    const required = this.state.form[key].required;

    const isString = () => {
      var regex = /^[a-zA-Z\s]{0,}?$/;

      if (!regex.test(value)) {
        this.setState(state => ({
          form: { ...state.form, [key]: { ...state.form[key], errorMsg: validationMessages.string } }
        }));
      }
    }

    const isEmail = () => {
      var regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

      if (!regex.test(value)) {
        this.setState(state => ({
          form: { ...state.form, [key]: { ...state.form[key], errorMsg: validationMessages.email } }
        }));
      }
    }

    const isRequired = () => {
      if (!value.length) {
        this.setState(state => ({
          form: { ...state.form, [key]: { ...state.form[key], errorMsg: validationMessages.required } }
        }));
      }
    }

    if (string) { isString() }

    if (email) { isEmail() }

    if (required) { isRequired() }
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    const { form } = this.state;
    const formElements = Object.entries(form);

    for (let i = 0; i < formElements.length; i++) {
      let el = formElements[i];

      if (el[1].required) {
        this.validate({ name: el[0], value: el[1].value });
      }
    }
  }

  handleChange(event) {
    const key = event.target.name;
    const val = event.target.value;

    this.setState(state => ({
      form: { ...state.form, [key]: { value: val } }
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

  render() {
    const { validate, handleFormSubmit, handleFieldsChange, handleChange, state } = this;
    const { activeListIndex, form } = state;

    return (
      <form id="zety-form" onSubmit={handleFormSubmit}>
        <Input
          name="name"
          label="Name"
          required
          string
          errorMessage={form.name.errorMsg}
          value={form.name.value}
          onBlur={validate}
          onChange={handleChange}
        />
        <Input
          name="nickname"
          label="Nickname"
          string
          errorMessage={form.nickname.errorMsg}
          value={form.nickname.value}
          onBlur={validate}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          label="E-mail"
          email
          required
          errorMessage={form.email.errorMsg}
          value={form.email.value}
          onBlur={validate}
          onChange={handleChange}
        />
        <Select
          name="field"
          list={fieldsOptions}
          placeholder={!!form.field.value || 'Field'}
          required
          errorMessage={form.field.errorMsg}
          value={form.field.value}
          onChange={handleFieldsChange}
        />
        <Select
          name="position"
          placeholder={!!form.position.value || 'Position'}
          required
          errorMessage={form.position.errorMsg}
          list={positionsOptions[activeListIndex]}
          value={form.position.value}
          onChange={handleChange}
        />
        <Button
          label="submit"
          onClick={handleFormSubmit}
        />
      </form>
    )
  }
}

export default Form
