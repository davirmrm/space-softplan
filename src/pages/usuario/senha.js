import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, IcoEye, IcoEyeBlocked, ActionForm, Button, Modal, ActionsModal } from '../../component'
import { modalOpen } from '../../layout/redux/AppActions'
import { editarUsuarioSenha } from './redux/UsuarioActions'

export default () => {
  const dispatch = useDispatch()
  const statusModal = useSelector(state => state.appState.modalOpen)
  const usuario = useSelector(state => state.usuarioState.usuario)
  const [inputState, setInputState] = useState({ senhaAntiga: '', senha: '', senhaConfirmar: '' })
  const [visivel, setVisivel] = useState({ senha: true, senhaConfirmar: true, senhaAntiga: true })
  const hanldeChange = e => {
    setInputState({ ...inputState, [e.target.name]: e.target.value })
  }

  const hanldeChangeVisible = e => {
    setVisivel({ ...visivel, [e]: !visivel[e] })
  }

  return (
    <Modal
      title='Mudar Senha'
      open={statusModal === 'senha' ? true : false}
      close={() => dispatch(modalOpen(''))}
      closeText='Fechar'
    >
      <section>
        <Input
          label='Antiga senha'
          type={visivel.senhaAntiga ? 'password' : 'text'}
          name='senhaAntiga'
          action={e => hanldeChange(e)}
          value={inputState.senhaAntiga}
        >
          <ActionForm action={e => hanldeChangeVisible('senhaAntiga')} title={visivel.senha ? 'visivel' : 'invisivel'}>
            {visivel.senhaAntiga ? <IcoEye /> : <IcoEyeBlocked />}
          </ActionForm>
        </Input>
        <Input
          label='Nova senha'
          type={visivel.senha ? 'password' : 'text'}
          name='senha'
          action={e => hanldeChange(e)}
          value={inputState.senha}
        >
          <ActionForm action={e => hanldeChangeVisible('senha')} title={visivel.senha ? 'visivel' : 'invisivel'}>
            {visivel.senha ? <IcoEye /> : <IcoEyeBlocked />}
          </ActionForm>
        </Input>
        <Input
          label='Confirmar nova senha'
          type={visivel.senhaConfirmar ? 'password' : 'text'}
          name='senhaConfirmar'
          action={e => hanldeChange(e)}
          value={inputState.senhaConfirmar}
        >
          <ActionForm
            action={e => hanldeChangeVisible('senhaConfirmar')}
            title={visivel.senhaConfirmar ? 'visivel' : 'invisivel'}
          >
            {visivel.senhaConfirmar ? <IcoEye /> : <IcoEyeBlocked />}
          </ActionForm>
        </Input>
      </section>
      <ActionsModal>
        <Button color='primary' action={() => dispatch(editarUsuarioSenha(usuario.id, inputState))}>
          Mudar
        </Button>
      </ActionsModal>
    </Modal>
  )
}
