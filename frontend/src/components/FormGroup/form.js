import React from 'react'

function Form(heading, label) {
  return (
    <div>
      <h3>{heading}</h3>
      <form>
          <input label={label} placeholder="" type="text"/>
      </form>
    </div>
  )
}

export default Form;
