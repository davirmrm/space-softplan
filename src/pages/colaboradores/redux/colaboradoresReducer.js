import {
  MODAL_OPEN,
  LISTAR_COLABORADORES,
  COLABORADOR_CARREGAR,
  COLABORADOR_LIMPAR,
  CHANGE_COLABORADOR,
  CHANGE_PESQUISA
} from './colaboradoresActions'

const initialState = {
  modalStatus: '',
  campoPesquisa: '',
  colaboradores: [],
  colaborador: { nome: '', email: '', perfis: [] }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return { ...state, modalStatus: payload }
    case LISTAR_COLABORADORES:
      return { ...state, colaboradores: payload }
    case COLABORADOR_CARREGAR:
      return { ...state, colaborador: payload }
    case COLABORADOR_LIMPAR:
      return { ...state, colaborador: initialState.colaborador }
    case CHANGE_COLABORADOR:
      return { ...state, colaborador: { ...state.colaborador, [payload.target.name]: payload.target.value } }
    case CHANGE_PESQUISA:
      return { ...state, campoPesquisa: payload }
    default:
      return state
  }
}
