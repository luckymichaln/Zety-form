import React from 'react'
import classNames from 'class-names';

const Select = ({ list, name, placeholder, onChange, required, errorMessage }) => {
  const SelectClass = classNames({
    'Select': true,
    'Select--error': required && errorMessage
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
      {placeholder && <span>{placeholder}</span>}
      <select
        name={name}
        onChange={ev => onChange(ev)}
      >
        {optionsList}
      </select>
      {((errorMessage && required)) && <span>{errorMessage}</span>}
    </div>
  )
}

export default Select
