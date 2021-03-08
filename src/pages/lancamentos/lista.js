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
          <p><label>{textoDefault.nome}: </label> {lancamento.mission_name}</p>
          <p><label>{textoDefault.data}: </label> {lancamento.launch_date_local}</p>
        </div>
        <div className='info'>
          <p><label>{textoDefault.foguete}: </label> {lancamento.rocket.rocket_name}</p>
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
    <p><label>{textoDefault.descricao}: </label> {lancamento.details}</p>
    <label>{textoDefault.listaNaves}: </label> 
    <ul>
      {
        lancamento.ships.map((nave, i)=> <li key={i}>{nave.name}</li>)
      }
    </ul>
  </div>
)