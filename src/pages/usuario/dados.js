import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button, Modal, ActionsModal } from '../../component'
import { modalOpen } from '../../layout/redux/AppActions'
import { loged, changeUsuarioDados, editarUsuario } from './redux/UsuarioActions'

export default () => {
  const dispatch = useDispatch()
  const statusModal = useSelector(state => state.appState.modalOpen)
  const usuario = useSelector(state => state.usuarioState.usuario)

  return (
    <Modal
      title='Meus Dados'
      open={statusModal === 'dados' ? true : false}
      close={() => dispatch([loged(), modalOpen('')])}
      closeText='Fechar'
    >
      <section>
        <Input label='Nome' name='nome' action={e => dispatch(changeUsuarioDados(e))} value={usuario.nome} />
        <Input
          label='E-mail'
          name='email'
          action={e => dispatch(changeUsuarioDados(e))}
          value={usuario.email}
          disabled
        />
      </section>
      <ActionsModal>
        <Button color='primary' action={() => dispatch(editarUsuario(usuario))}>
          Salvar
        </Button>
      </ActionsModal>
    </Modal>
  )
}
