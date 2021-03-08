import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Language from '../../component/translate/translate'
import './lancamentos.css'
import Listar from './lista'
import Pesquisa from './pesquisa'

export default () => {
  const textoDefault = require(`${Language()}`)
  const [pesquisa, setPesquisa] = useState({quantidade:{ id: 10, name: 'Apresentando 10 itens'}})
  const [lancamentosListaDefault, setLancamentosListaDefault] = useState([])
  const [lancamentosLista, setLancamentosLista] = useState([])
  
  const query = gql`
  query {
    launchesPast(limit: ${pesquisa.quantidade.id}, sort: "launch_date_local", offset: 0) {
      id
      mission_name
      launch_date_local
      details
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
  `
  const {loading, data} = useQuery(query)

  useEffect(()=> {
    if (!loading) {
      setLancamentosLista(data.launchesPast)
      setLancamentosListaDefault(data.launchesPast)
    }
  },[loading])
 
  const pesquisar = (e) => {
    setPesquisa(e)
    const listaPesquisa = lancamentosLista.filter((lista)=>{
      return lista.mission_name === e.pesquisa
    })
    
    setLancamentosLista(e.pesquisa === ''? lancamentosListaDefault : listaPesquisa)
  }

  const limparPesquisa = () => {
    setLancamentosLista(lancamentosListaDefault)
  }

  return (
    <div className='box-lancamento'>
      <div className='lancamento-header'>
        <h2 className='titulo'>{textoDefault.title}</h2>
        <Pesquisa action={(e)=> pesquisar(e)} actionClean={(e)=> limparPesquisa(e)} />
      </div>
      {!loading && <Listar data={lancamentosLista} textoDefault={textoDefault} />}
    </div>
  )
}
