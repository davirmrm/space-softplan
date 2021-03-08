import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, IcoEye, IcoEyeBlocked, ActionForm, Button, Alert } from '../../component'
import './login.css'
import { history } from '../../helpers'
import App from '../../layout/app.json'
import { logIn } from '../usuario/redux/UsuarioActions'

export default () => {
  const dispatch = useDispatch()
  const [inputState, setInputState] = useState({ email: '', senha: '' })
  const [senha, setSenha] = useState(false)
  const hanldeChange = e => {
    setInputState({ ...inputState, [e.target.name]: e.target.value })
  }

  return (
    <div className='box-login'>
      <Alert />
      <div>
        <header>
          <h3>{App.titulo}</h3>
        </header>
        <section>
          <Input label='E-mail' name='email' action={e => hanldeChange(e)} value={inputState.email} />
          <Input
            label='Senha'
            type={senha ? 'password' : 'text'}
            name='senha'
            action={e => hanldeChange(e)}
            value={inputState.senha}
          >
            <ActionForm action={e => setSenha(!senha)} title={senha ? 'visivel' : 'invisivel'}>
              {senha ? <IcoEye /> : <IcoEyeBlocked />}
            </ActionForm>
          </Input>
          <div className='box-btn-login'>
            <Button color='secondary' action={() => history.push('/registrar')}>
              Registrar
            </Button>
            <Button color='primary' action={() => dispatch(logIn(inputState))}>
              Entrar
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
