import React from 'react'

const Select = ({ list, name, placeholder, onChange }) => {
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
    <div className="Select">
      {placeholder && <span>{placeholder}</span>}
      <select
        name={name}
        onChange={ev => onChange(ev)}
      >
        {optionsList}
      </select>
    </div>
  )
}

export default Select
