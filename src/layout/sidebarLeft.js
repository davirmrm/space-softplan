import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IcoAdd, Menu } from '../component'
import Language from '../component/translate/translate'
import MenuJSON from './app.json'
import { modalOpen } from './redux/AppActions'
import NovosLancamentos from '../pages/lancamentos/adicionar'

export default ({ style }) => {
  const dispatch = useDispatch()
  const sidebarLeft = useSelector(state => state.appState.sidebarLeft)
  const translate = require(`${Language()}`)
  return (
    <div id='box-sidebar-left' className={sidebarLeft ? 'open-sidebar' : ''} style={style}>
      <Menu data={MenuJSON.menu} />
      
      <div className='menu menu-bottom'>
        <button onClick={() => dispatch(modalOpen('novosLancamentos'))}>{translate.novosLancamentos} <IcoAdd /></button>
      </div>
      <NovosLancamentos />
    </div>
  )
}
