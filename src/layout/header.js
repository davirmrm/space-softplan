import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebarRigth, setSidebarLeft } from './redux/AppActions'
import { IcoMenu, IcoDotsHorizontalTriple } from '../component'
import App from './app.json'

export default () => {
  const dispatch = useDispatch()
  const sidebar = useSelector(state => state.appState)
  return (
    <header id='box-header'>
      <button
        className={sidebar.sidebarLeft ? 'btn-menu open' : 'btn-menu'}
        onClick={() => dispatch(setSidebarLeft(!sidebar.sidebarLeft))}
      >
        <IcoMenu />
      </button>
      <div>{App.titulo}</div>
      <button
        className={sidebar.sidebarRight ? 'open' : ''}
        onClick={() => dispatch(setSidebarRigth(!sidebar.sidebarRight))}
      >
        <IcoDotsHorizontalTriple />
      </button>
    </header>
  )
}
