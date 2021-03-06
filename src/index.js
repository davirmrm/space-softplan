import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routers from './router'
import * as serviceWorker from './serviceWorker'
import { Store } from './helpers'
import './index.css'
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.spacex.land/graphql/"
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
     <Provider store={Store}>
       <Routers />
     </Provider>,
  </ApolloProvider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Provider store={Store}>
//     <Routers />
//   </Provider>,
//   document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
