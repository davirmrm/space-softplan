import { gql, useMutation } from '@apollo/client';
import React from 'react'
import { useDispatch } from 'react-redux'
import { ActionsModal, AddAlert, Button, Modal } from '../../component'
import Language from '../../component/translate/translate'

const REMOVE_POST = gql`
  mutation deletePost($id: String!) {
    delete_users(where: { id: {_eq: $id} }) {
      affected_rows
    }
  }
`;

export default ({dados, actionModal = () => null, openModal}) => {
  const dispatch = useDispatch()
  const textoDefault = require(`${Language()}`)

  const [deletePost] = useMutation(REMOVE_POST);

  const remover = () => {
    dispatch(AddAlert('success', `${textoDefault.mensagem.removerSucesso}`))
    actionModal(false)
  }

  return (
    <Modal
      title={textoDefault.modalRemover}
      size='small'
      open={openModal}
      close={() => actionModal(false)}
      closeText='Fechar'
    >
      <div>
        <p>{dados?.name}</p>
        <p>{textoDefault.mensagem.confirmar}</p>
      </div>

      <ActionsModal>
        <Button
          color='danger'
          action={() => remover()}
        >
          {textoDefault.remover}
        </Button>
      </ActionsModal>
    </Modal>
  )
}