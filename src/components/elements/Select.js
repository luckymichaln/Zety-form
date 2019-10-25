import React from 'react'
import classNames from 'class-names';

const Select = ({ list, name, placeholder, validate, onChange, value, required, errorMessage }) => {
  const handleOnChange = ev => {
    onChange(ev)
    validate({ name: ev.target.name, value: ev.target.value })
  }
  const SelectClass = classNames({
    'Select': true,
    'Select--is-danger': required && errorMessage
  });

  const optionsList = list.map((o, i) => {
    return (
      <option
        key={i}
        name={name}
        id={o}
        value={o.value}
      >
        {o.label}
      </option>
    )
  })

  return (
    <div className={SelectClass}>
      <select
        name={name}
        onChange={ev => handleOnChange(ev)}
        selected={value}
        value={value}
      >
        {optionsList}
      </select>
      {!value && <span className="Select-placeholder">{placeholder}</span>}
      {((errorMessage && required)) && <span className="Select-error">{errorMessage}</span>}
    </div>
  )
}

export default Select
