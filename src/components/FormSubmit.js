import React from 'react'

const FormSubmit = ({ form }) => {
  return (
    <div className="FormSubmit">
      <div style={{ marginTop: '30px', fontSize: '16px' }}>
        Form data
        <div style={{ marginTop: '10px' }}>
          <span>Name: </span> {form.name.value}
        </div>
        <div style={{ marginTop: '10px' }}>
          <span>Nickname: </span> {form.nickname.value}
        </div>
        <div style={{ marginTop: '10px' }}>
          <span>Email: </span> {form.email.value}
        </div>
        <div style={{ marginTop: '10px' }}>
          <span>Field: </span> {form.field.value}
        </div>
        <div style={{ marginTop: '10px' }}>
          <span>Position: </span> {form.position.value}
        </div>
      </div>
    </div>
  )
}

export default FormSubmit
