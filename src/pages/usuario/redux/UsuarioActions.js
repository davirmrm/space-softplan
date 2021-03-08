import axios from 'axios'
import { AddAlert } from '../../../component'
import { history } from '../../../helpers'
import { modalOpen } from '../../../layout/redux/AppActions'
import textoDefault from '../nls/pt-BR.json'

const urlCustom = 'http://localhost:3002/api'

export const LOG_IN = 'LOG_IN'
const setLogIn = e => ({
  type: LOG_IN,
  payload: e
})

export const logIn = e => {
  return dispatch => {
    axios
      .post(`${urlCustom}/autenticacao`, e)
      .then(response => {
        dispatch([setLogIn({ logIn: true }), setCarregarUsuario(response.data), history.push('/home')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

const user = {
  language: 'pt-BR'
}

export const loged = e => {
  // localStorage.setItem('tolken', '5f64c9e865a8593748c115df')
  return dispatch => {
    dispatch([setLogIn({ logIn: true }), setCarregarUsuario(user)])
  //   axios
  //     .get(`${urlCustom}/${localStorage['tolken']}`)
  //     .then(response => {
  //       dispatch([setLogIn({ logIn: true }), setCarregarUsuario(response.data)])
  //     })
  //     .catch(error => {
  //       dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
  //     })
  }
}

export const USUARIO_EDITAR = 'USUARIO_EDITAR'
export const changeUsuarioDados = e => ({
  type: USUARIO_EDITAR,
  payload: e
})

export const USUARIO_CARREGAR = 'USUARIO_CARREGAR'
export const setCarregarUsuario = e => ({
  type: USUARIO_CARREGAR,
  payload: e
})

export const salvarUsuario = e => {
  return dispatch => {
    axios
      .post(`${urlCustom}/usuario/registrar`, e)
      .then(() => {
        dispatch([AddAlert('success', 'Usuário registrado com sucesso.'), history.push('/login')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const editarUsuario = e => {
  return dispatch => {
    axios
      .put(`${urlCustom}/usuario/editar/${localStorage['tolken']}`, e)
      .then(() => {
        dispatch([loged(), modalOpen(''), AddAlert('success', 'Usuário editado com sucesso.')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const editarUsuarioSenha = (id, e) => {
  return dispatch => {
    axios
      .put(`${urlCustom}/usuario/senha/${localStorage['tolken']}`, e)
      .then(resposta => {
        dispatch([loged(), modalOpen(''), AddAlert('success', 'Senha modificada com sucesso.')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}
