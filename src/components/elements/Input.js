import React from 'react'
import classNames from 'class-names';

const Input = ({ name, label, type, value, onBlur, onChange, email, errorMessage }) => {
  const handleOnBlur = event => {
    onBlur({
      event,
      value,
      email
    })
  }

  const inputClass = classNames({
    'Input': true,
    'Input--is-danger': errorMessage
  })

  return (
    <div className={inputClass}>
      <input
        type={type || 'text'}
        name={name}
        placeholder={label}
        value={value}
        onBlur={ev => handleOnBlur(ev)}
        onChange={ev => onChange(ev)}
      />
      {errorMessage && <span className="Input-error">{errorMessage}</span>}
    </div>
  )
}

export default Input
