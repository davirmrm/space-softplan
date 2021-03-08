import React, { useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { history } from './helpers'
import { loged } from './pages/usuario/redux/UsuarioActions'

import login from './pages/login/login'
import registrar from './pages/usuario/registrar'
import AuthLayout from './layout/App'
import Home from './pages/home/home'
import Component from './pages/component/component'
import Perfis from './pages/perfis/perfis'
import Colaboradores from './pages/colaboradores/colaboradores'

import Lancamentos from './pages/lancamentos/lancamentos'
import Foguetes from './pages/foguetes/foguetes'
import Pessoas from './pages/pessoas/pessoas'

const PrivateRoute = ({ component: Component }) => {
  const dispatch = useDispatch()
  const autenticado = useSelector(state => state.usuarioState)
  useEffect(() => dispatch(loged()), [dispatch])

  return (
    <Route
      exact
      render={props =>
        autenticado.logIn === undefined || autenticado.logIn ? (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default () => (
  <Router history={history}>
    <Switch>
      {/* <Route path='/' exact={true} component={AppCotent} /> */}
      <Route path='/login' exact={true} component={login} />
      <Route path='/registrar' exact={true} component={registrar} />

      <PrivateRoute path='/' exact component={Lancamentos} />
      <PrivateRoute path='/lancamentos' exact component={Lancamentos} />
      <PrivateRoute path='/foguetes' exact component={Foguetes} />
      <PrivateRoute path='/pessoas' exact component={Pessoas} />

      <PrivateRoute path='/home' exact component={Home} />
      <PrivateRoute path='/componentes' exact component={Component} />
      <PrivateRoute path='/perfis' exact component={Perfis} />
      <PrivateRoute path='/colaboradores' exact component={Colaboradores} />
      <Redirect from='*' to='/login' />
    </Switch>
  </Router>
)
