import React from 'react'
import './list.css'

export function List({ head = [], data = [], listCustom = () => null, children }) {
  return (
    <table className='list-box'>
      <thead>
        <tr>
          {head.map(header => {
            return (
              <td className={header.className} key={header.colunm}>
                {header.text}
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((container, i) => {
          listCustom(container)
          return (
            <tr key={container.id ? container.id : i}>
              {head.map(header => {
                return (
                  <td className={header.className} key={`${container.id ? container.id : i}-${header.colunm}`}>
                    {container[header.colunm] ? container[header.colunm] : ''}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
