import { LOG_IN, USUARIO_CARREGAR, USUARIO_EDITAR } from './UsuarioActions'

const initialState = {
  logIn: true,
  usuario: { nome: '', email: '', senha: '' }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      return { ...state, payload }
    case USUARIO_CARREGAR:
      return { ...state, usuario: payload }
    case USUARIO_EDITAR:
      return { ...state, usuario: { ...state.usuario, [payload.target.name]: payload.target.value } }
    default:
      return state
  }
}
