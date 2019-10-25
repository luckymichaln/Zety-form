import React from 'react'
import { useHistory } from "react-router-dom";

const Button = ({ label, isLink, formValid, onClick }) => {
  let history = useHistory();

  const handleOnClick = ev => {
    onClick(ev)
    if (isLink && formValid) {
      history.push('/submit')
    }
  }

  return (
    <button
      className="Button"
      onClick={ev => { handleOnClick(ev) }}
    >
      {label}
    </button>
  )
}

export default Button
