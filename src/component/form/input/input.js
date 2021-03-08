import React from 'react'

export function Input({ children, action, value, label = '', name, type = 'text', color = '', disabled = false }) {
  return (
    <div className={`form-box ${color} `}>
      {
        label != '' ?
        <label htmlFor={`id-${name}`}>{label}</label>
        : null
      }
      <div>
        <input type={type} name={name} id={`id-${name}`} value={value} onChange={action} disabled={disabled} />
        <div className='input-actions'>
          {children && children.length
            ? children.map(e => {
                return e && e.type && e.type.name === 'ActionForm' ? e : null
              })
            : children && children.type && children.type.name === 'ActionForm'
            ? children
            : null}
        </div>
      </div>
      {children && children.length
        ? children.map(e => {
            return e && e.type && e.type.name !== 'ActionForm' ? e : null
          })
        : children && children.type && children.type.name !== 'ActionForm'
        ? children
        : null}
    </div>
  )
}
