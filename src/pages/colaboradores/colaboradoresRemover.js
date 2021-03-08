import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsModal, Button, Modal } from '../../component'
import { modalFechar, removerColaborador } from './redux/colaboradoresActions'
import './colaboradores.css'

export default () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.colaboradoresState.modalStatus)
  const colaborador = useSelector(state => state.colaboradoresState.colaborador)

  return (
    <Modal
      title={'Remover colaborador'}
      open={modalStatus === 'remover' ? true : false}
      close={() => dispatch(modalFechar())}
      closeText='Fechar'
      size='small'
    >
      <section>
        <p>Tem certeza que deseja remover este Colaborador?</p>
        <p>{colaborador.nome}</p>
      </section>
      <ActionsModal>
        <Button color='danger' action={() => dispatch(removerColaborador(colaborador))}>
          Remover
        </Button>
      </ActionsModal>
    </Modal>
  )
}
