import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalOpen } from './redux/AppActions'
import { Modal, ActionsModal, Button } from '../component'

export default () => {
  const dispatch = useDispatch()
  const statusModal = useSelector(state => state.appState.modalOpen)
  return (
    <Modal
      title='Sair da aplicação'
      size='small'
      open={statusModal === 'sair' ? true : false}
      close={() => dispatch(modalOpen(''))}
      closeText='Fechar'
    >
      Tem certeza que deseja sair da aplicação?
      <ActionsModal>
        <Button color='danger' action={() => dispatch(modalOpen(''))}>
          Confirmar
        </Button>
      </ActionsModal>
    </Modal>
  )
}
