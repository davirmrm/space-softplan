import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, IcoEye, IcoEyeBlocked, ActionForm, Button, Alert } from '../../component'
import { history } from '../../helpers'
import App from '../../layout/app.json'
import { salvarUsuario } from './redux/UsuarioActions'
import './usuario.css'

export default () => {
  const dispatch = useDispatch()
  const [inputState, setInputState] = useState({ nome: '', email: '', senha: '', senhaConfirmar: '' })
  const [visivel, setVisivel] = useState({ senha: true, senhaConfirmar: true })
  const hanldeChange = e => {
    setInputState({ ...inputState, [e.target.name]: e.target.value })
  }

  const hanldeChangeVisible = e => {
    setVisivel({ ...visivel, [e]: !visivel[e] })
  }

  return (
    <div className='box-login'>
      <Alert />
      <div>
        <header>
          <h3>{App.titulo}</h3>
        </header>
        <section>
          <h3 className='titulo'>Registrar</h3>
          <Input label='Nome' name='nome' action={e => hanldeChange(e)} value={inputState.nome} />
          <Input label='E-mail' name='email' action={e => hanldeChange(e)} value={inputState.email} />
          <Input
            label='Senha'
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
            label='Confirmar Senha'
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
          <div className='box-btn-login'>
            <Button color='secondary' action={() => history.push('/login')}>
              Voltar
            </Button>
            <Button color='primary' action={() => dispatch(salvarUsuario(inputState))}>
              Registrar
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
