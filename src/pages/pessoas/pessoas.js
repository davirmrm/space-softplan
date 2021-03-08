import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Language from '../../component/translate/translate'
import './pessoas.css'
import Listar from './lista'
import Pesquisa from './pesquisa'

export default () => {
  const textoDefault = require(`${Language()}`)
  const [pesquisa, setPesquisa] = useState({quantidade:{ id: 10, name: 'Apresentando 10 itens'}})
  const [listaDefault, setListaDefault] = useState([])
  const [load, setLoad] = useState(false)
  const [lista, setLista] = useState([])
  
  const query = gql`
  query {
    users(limit: ${pesquisa.quantidade.id}, order_by: {name: asc}) {
      id
      name
      rocket
    }
  }
  `
  const {loading, data} = useQuery(query)

  useEffect(()=> {
    if (!loading) {
      setLista(data.users)
      setListaDefault(data.users)
    }
  },[loading])
 
  const pesquisar = (e) => {
    setPesquisa(e)
    const listaPesquisa = lista.filter((l)=>{
      return l.name === e.pesquisa
    })
    
    setLista(e.pesquisa === ''? listaDefault : listaPesquisa)
  }

  const limparPesquisa = () => {
    setLista(listaDefault)
  }

  const refresh = (e) => {
    setLoad(!load)
  }

  return (
    <div className='box-pessoas'>
      <div className='page-header-acao'>
        <h2 className='titulo'>{textoDefault.title}</h2>
        <Pesquisa action={(e)=> pesquisar(e)} actionClean={(e)=> limparPesquisa(e)} refresh={(e)=> refresh(e)} />
      </div>
      {!loading && <Listar data={lista} textoDefault={textoDefault} />}
    </div>
  )
}
