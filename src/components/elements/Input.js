import React from 'react'

const Input = ({ label, type, value, onBlur }) => {
  const handleOnBlur = ev => {
    onBlur()
  }

  return (
    <input
      type={type || 'text'}
      placeholder={label}
      value={value}
      onBlur={handleOnBlur}
    />
  )
}

export default Input
