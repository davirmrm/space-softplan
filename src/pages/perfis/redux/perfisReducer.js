import {
  MODAL_OPEN,
  LISTAR_PERMISSOES,
  LISTAR_PERFIS,
  PERFIL_CARREGAR,
  PERFIL_LIMPAR,
  CHANGE_PERFIL,
  CHANGE_PESQUISA
} from './perfisActions'

const initialState = {
  modalStatus: '',
  campoPesquisa: '',
  perfis: [],
  perfil: { nome: '', permissoes: [] },
  permissoes: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return { ...state, modalStatus: payload }
    case LISTAR_PERFIS:
      return { ...state, perfis: payload }
    case LISTAR_PERMISSOES:
      return { ...state, permissoes: payload }
    case PERFIL_CARREGAR:
      return { ...state, perfil: payload }
    case PERFIL_LIMPAR:
      return { ...state, perfil: initialState.perfil }
    case CHANGE_PERFIL:
      return { ...state, perfil: { ...state.perfil, [payload.target.name]: payload.target.value } }
    case CHANGE_PESQUISA:
      return { ...state, campoPesquisa: payload }
    default:
      return state
  }
}
