import React, { useState } from 'react'
import { Button } from '../../component'
 
export default ({textoDefault, data}) => {
  const [visivel, setVisivel] = useState({})

  const clickVer = (e) => {
    const resp = data.filter((f)=> f.id === visivel[e] )
    setVisivel({...visivel, [e]: resp.length? false : e})
  }

  return (
    data.map((lancamento)=> <div key={lancamento.id} className='lancamento-lista'>
        <div className='info'>
          <p><label>{textoDefault.nome}: </label> {lancamento.name}</p>
          <p><label>{textoDefault.local}: </label> {lancamento.country}</p>
        </div>
        <div className='info'>
          <p><label>{textoDefault.companhia}: </label> {lancamento.company}</p>
          <Button action={()=> clickVer(lancamento.id)} color='primary' type='link' variant='outlined'>
            {textoDefault[visivel[lancamento.id]?'verMenos':'verMais']}
          </Button>
        </div>
        {
          visivel[lancamento.id] ? 
            <MaisDetalhe textoDefault={textoDefault} lancamento={lancamento} />
          : null
        }
    </div>)
  )
}

const MaisDetalhe = ({textoDefault, lancamento}) => (
  <div>
    <p><label>{textoDefault.tamanho}: </label> 
      {textoDefault.altura} {lancamento.height.meters} {textoDefault.metros}, {textoDefault.diametro} {lancamento.diameter.meters} {textoDefault.metros} 
    </p>
    <p><label>{textoDefault.descricao}: </label> {lancamento.description}</p>
  </div>
)