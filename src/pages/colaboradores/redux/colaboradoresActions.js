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
export const campoPesquisaLimpar = e => [atuallisaCampoPesquisa(''), listarColaboradores()]

export const MODAL_OPEN = 'MODAL_OPEN'
const modalOpen = e => ({
  type: MODAL_OPEN,
  payload: e
})

const modalClose = () => ({
  type: MODAL_OPEN,
  payload: ''
})

export const COLABORADOR_CARREGAR = 'COLABORADOR_CARREGAR'
export const setCarregarColaborador = e => ({
  type: COLABORADOR_CARREGAR,
  payload: e
})

export const COLABORADOR_LIMPAR = 'COLABORADOR_LIMPAR'
export const setColaboradorLimpar = () => ({
  type: COLABORADOR_LIMPAR
})
export const modalNovo = () => [modalOpen('novo'), setColaboradorLimpar()]
export const modalEditar = e => [modalOpen('editar'), setCarregarColaborador(e)]
export const modalRemover = e => [modalOpen('remover'), setCarregarColaborador(e)]
export const modalFechar = e => [modalClose(), listarColaboradores()]

export const CHANGE_COLABORADOR = 'CHANGE_COLABORADOR'
export const changeInformacao = e => ({
  type: CHANGE_COLABORADOR,
  payload: e
})

export const LISTAR_COLABORADORES = 'LISTAR_COLABORADORES'
export const setListarColaboradores = e => ({
  type: LISTAR_COLABORADORES,
  payload: e
})

export const listarColaboradores = e => {
  return dispatch => {
    axios
      .get(`${urlCustom}/colaboradores/listar`)
      .then(resposta => {
        dispatch(setListarColaboradores(resposta.data))
      })
      .catch(error => {
        // dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const pesquisarColaborador = e => {
  return dispatch => {
    axios
      .get(`${urlCustom}/colaboradores/pesquisar/${e}`)
      .then(resposta => {
        dispatch(setListarColaboradores(resposta.data))
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const salvarColaborador = e => {
  return dispatch => {
    axios
      .post(`${urlCustom}/colaboradores/novo`, e)
      .then(() => {
        dispatch([modalFechar(), AddAlert('success', 'Colaborador salvo com sucesso.')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}

export const editarColaborador = e => {
  console.log(e, 'editarColaborador')
  return dispatch => {
    axios
      .put(`${urlCustom}/colaboradores/editar/${e['_id']}`, e)
      .then(resposta => {
        dispatch([modalFechar(), AddAlert('success', 'Colaborador editado com sucesso.')])
      })
      .catch(error => {
        console.log(JSON.stringify(error))
        dispatch(AddAlert('error', textoDefault.mensagem[error.request && error.request.response]))
      })
  }
}

export const removerColaborador = e => {
  return dispatch => {
    axios
      .get(`${urlCustom}/colaboradores/remover/${e['_id']}`)
      .then(resposta => {
        dispatch([modalFechar(), AddAlert('success', 'Colaborador removido com sucesso.')])
      })
      .catch(error => {
        dispatch(AddAlert('error', textoDefault.mensagem[error.request.response]))
      })
  }
}
