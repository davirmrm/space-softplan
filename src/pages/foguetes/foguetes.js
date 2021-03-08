import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Language from '../../component/translate/translate'
import './foguetes.css'
import Listar from './lista'
import Pesquisa from './pesquisa'

export default () => {
  const textoDefault = require(`${Language()}`)
  const [pesquisa, setPesquisa] = useState({quantidade:{ id: 10, name: 'Apresentando 10 itens'}})
  const [listaDefault, setListaDefault] = useState([])
  const [lista, setLista] = useState([])
  
  const query = gql`
  query {
    rockets(limit: ${pesquisa.quantidade.id}) {
      name
      id
      height {
        meters
      }
      stages
      company
      diameter {
        meters
      }
      description
      country
    }
  }
  `
  const {loading, data} = useQuery(query)

  useEffect(()=> {
    if (!loading) {
      setLista(data.rockets)
      setListaDefault(data.rockets)
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

  return (
    <div className='box-lancamento'>
      <div className='lancamento-header'>
        <h2 className='titulo'>{textoDefault.title}</h2>
        <Pesquisa action={(e)=> pesquisar(e)} actionClean={(e)=> limparPesquisa(e)} />
      </div>
      {!loading && <Listar data={lista} textoDefault={textoDefault} />}
    </div>
  )
}
