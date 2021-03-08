import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Menu } from '../component'
import useOutsideClick from '../component/useOusideClick/useoutsideclick'
import { setSidebarRigth, modalOpen } from './redux/AppActions'
import MeusDados from '../pages/usuario/dados'
import MinhaSenha from '../pages/usuario/senha'
import MenuJSON from './app.json'
import Language from '../component/translate/translate'

export default ({ style }) => {
  const dispatch = useDispatch()
  const sidebarRight = useSelector(state => state.appState.sidebarRight)
  const autenticado = useSelector(state => state.usuarioState.usuario)
  const translate = require(`${Language()}`)

  const ref = useRef()
  useOutsideClick(ref, e => {
    if (sidebarRight) {
      dispatch(setSidebarRigth(false))
    }
  })
  
  return (
    <div
      id='box-sidebar-right'
      ref={ref}
      className={sidebarRight ? 'open-sidebar' : ''}
      style={{ maxHeight: `calc(100vh - ${style}px)` }}
    >
      <div className='usuario-logado'>
        <h5>
          {autenticado.nome} <small>{autenticado.perfil}</small>
        </h5>
      </div>
      <div className='menu'>
        <button onClick={() => dispatch(modalOpen('dados'))}>{translate.meusDados}</button>
        <button onClick={() => dispatch(modalOpen('senha'))}>{translate.mudarSenha}</button>
      </div>
      <Menu data={MenuJSON.usuario} />
      <div className='sair-sistema'>
        <Button color='primary' size='block' action={() => dispatch(modalOpen('sair'))}>
          {translate.sair}
        </Button>
      </div>
      <MeusDados />
      <MinhaSenha />
    </div>
  )
}
