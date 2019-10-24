import React from 'react'

const Input = ({ name, label, type, value, onBlur, onChange }) => {
  const handleOnBlur = ev => {
    onBlur()
  }

  return (
    <input
      type={type || 'text'}
      name={name}
      placeholder={label}
      value={value}
      onBlur={handleOnBlur}
      onChange={ev => onChange(ev)}
    />
  )
}

export default Input
