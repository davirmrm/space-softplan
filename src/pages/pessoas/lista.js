import React, { useState } from 'react'
import { Button, IcoBin } from '../../component'
import Remover from './remover'
 
export default ({textoDefault, data}) => {
  const [open, setOpen] = useState()
  const [info, setInfo] = useState({name:''})
  
  const remover = (e) => {
    setInfo(e)
    setOpen(true)
  }  

  const action = (e) => {
    setOpen(e)
  }

  return (
    <>
    {
      data.map((pessoa)=> <div key={pessoa.id} className='pessoas-lista'>
          <div className='info'>
            <p><label>{textoDefault.nome}: </label> {pessoa.name}</p>
            <p><label>{textoDefault.nLancamentos}: </label> {pessoa.rocket}</p>
            <Button action={()=> remover(pessoa)} color='danger' type='btn circle' variant='normal'>
              <IcoBin title={'Remover'} />
            </Button>
          </div>
      </div>)
    }
    <Remover dados={info} actionModal={(e) => action(e)}  openModal={open} />
    </>
  )
}