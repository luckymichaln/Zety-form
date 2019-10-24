import React from 'react'
import classNames from 'class-names';

const Input = ({ name, label, type, value, onBlur, onChange, string, email, errorMessage }) => {
  const handleOnBlur = ev => {
    onBlur({
      event: ev,
      value,
      string,
      email
    })
  }

  const inputClass = classNames({
    'Input': true,
    'Input--error': errorMessage
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
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  )
}

export default Input
