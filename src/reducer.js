import { combineReducers } from 'redux'
import alerts from './component/alert/alertsRedux'
import appState from './layout/redux/AppReducer'
import usuarioState from './pages/usuario/redux/UsuarioReducer'
import perfisState from './pages/perfis/redux/perfisReducer'
import colaboradoresState from './pages/colaboradores/redux/colaboradoresReducer'

export const rootReducer = combineReducers({
  alerts,
  appState,
  usuarioState,
  perfisState,
  colaboradoresState,
})

export default rootReducer
