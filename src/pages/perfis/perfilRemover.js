import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsModal, Button, Modal } from '../../component'
import { modalFechar, removerPerfil } from './redux/perfisActions'
import './perfis.css'

export default () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.perfisState.modalStatus)
  const perfil = useSelector(state => state.perfisState.perfil)

  return (
    <Modal
      title={'Remover perfil'}
      open={modalStatus === 'remover' ? true : false}
      close={() => dispatch(modalFechar())}
      closeText='Fechar'
      size='small'
    >
      <section>
        <p>Tem certeza que deseja remover este perfil?</p>
        <p>{perfil.nome}</p>
      </section>
      <ActionsModal>
        <Button color='danger' action={() => dispatch(removerPerfil(perfil))}>
          Remover
        </Button>
      </ActionsModal>
    </Modal>
  )
}
