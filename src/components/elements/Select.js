import React from 'react'

const Select = ({ list }) => {
  const optionsList = list.map((o, i) => {
    return (
      <option
        key={i}
        defaultValue={i === 0}
        disabled={i === 0}
        id={o}
      >
        {o}
      </option>
    )
  })

  return (
    <select>
      {optionsList}
    </select>
  )
}

export default Select
