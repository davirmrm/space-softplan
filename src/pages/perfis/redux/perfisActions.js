import axios from 'axios'
import { AddAlert } from '../../../component'
import textoDefault from '../nls/pt-BR.json'

const urlCustom = 'http://localhost:3002/api'

export const CHANGE_PESQUISA = 'CHANGE_PESQUISA'
const atuallisaCampoPesquisa = e => ({
  type: CHANGE_PESQUISA,
  payload: e
})

export const campoPesquisa = e => [atuallisaCampoPesquisa(e.target.value)]
export const campoPesquisaLimpar = e => [atuallisaCampoPesquisa(''), listarPerfis()]

export const MODAL_OPEN = 'MODAL_OPEN'
const modalOpen = e => ({
  type: MODAL_OPEN,
  payload: e
})

const modalClose = () => ({
  type: MODAL_OPEN,
  payload: ''
})

export const PERFIL_CARREGAR = 'PERFIL_CARREGAR'
export const setCarregarPerfil = e => ({
  type: PERFIL_CARREGAR,
  payload: e
})

export const PERFIL_LIMPAR = 'PERFIL_LIMPAR'
export const setPerfilLimpar = () => ({
  type: PERFIL_LIMPAR
})
export const modalNovo = () => [modalOpen('novo'), setPerfilLimpar()]
export const modalEditar = e => [modalOpen('editar'), setCarregarPerfil(e)]
export const modalRemover = e => [modalOpen('remover'), setCarregarPerfil(e)]
export const modalFechar = e => [modalClose(), listarPerfis()]

export const CHANGE_PERFIL = 'CHANGE_PERFIL'
export const changePerfil = e => ({
  type: CHANGE_PERFIL,
  payload: e
})

export const LISTAR_PERFIS = 'LISTAR_PERFIS'
export const setListarPerfis = e => ({
  type: LISTAR_PERFIS,
  payload: e
})

export const listarPerfis = e => {
  return dispatch => {
    axios
      .get(`${urlCustom}/perfis/listar`)
      .then(resposta => {
        dispatch(setListarPerfis(resposta.data))
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const pesquisarPerfil = e => {
  return dispatch => {
    axios
      .get(`${urlCustom}/perfis/pesquisar/${e}`)
      .then(resposta => {
        dispatch(setListarPerfis(resposta.data))
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}
export const LISTAR_PERMISSOES = 'LISTAR_PERMISSOES'
export const setListarPermissoes = e => ({
  type: LISTAR_PERMISSOES,
  payload: e
})
export const listarPermissoes = e => {
  return dispatch => {
    axios
      .get(`${urlCustom}/perfis/permissoes`)
      .then(resposta => {
        dispatch(setListarPermissoes(resposta.data))
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const salvarPerfil = e => {
  return dispatch => {
    axios
      .post(`${urlCustom}/perfis/novo`, e)
      .then(() => {
        dispatch([modalFechar(), AddAlert('success', 'Perfil salvo com sucesso.')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const editarPerfil = e => {
  console.log(e)
  return dispatch => {
    axios
      .put(`${urlCustom}/perfis/editar/${e['_id']}`, e)
      .then(() => {
        dispatch([modalFechar(), AddAlert('success', 'Perfil editado com sucesso.')])
      })
      .catch(error => {
        console.log(error.request)
        dispatch(AddAlert('error', textoDefault.mensagem[error.request && error.request.response]))
      })
  }
}

export const removerPerfil = e => {
  return dispatch => {
    axios
      .get(`${urlCustom}/perfis/remover/${e['_id']}`)
      .then(resposta => {
        dispatch([modalFechar(), AddAlert('success', 'Perfil removido com sucesso.')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}
