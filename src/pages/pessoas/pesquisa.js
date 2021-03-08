import React, { useState } from 'react'
import { ActionForm, Button, IcoAdd, IcoClose, IcoSearch, Input, Select } from '../../component'
import Adicionar from './adicionar'
 
const selectFake = [
  { id: 10, name: 'Apresentando 10 itens'},
  { id: 20, name: 'Apresentando 20 itens'},
  { id: 30, name: 'Apresentando 30 itens'},
  { id: 40, name: 'Apresentando 40 itens'},
  { id: 50, name: 'Apresentando 50 itens'},
  { id: 80, name: 'Apresentando 80 itens'},
  { id: 100, name: 'Apresentando 100 itens'}
]
export default ({action = () => null, actionClean = () => null, refresh = () => null}) => {
  const [pesquisa, setPesquisa] = useState('')
  const [itens, setItens] = useState({ id: 10, name: 'Apresentando 10 itens'})
  const [open, setOpen] = useState()

  const pesquisar = (e) => {
    action({pesquisa: e, quantidade: itens})
  }

  const quantidade = (e) => {
    setItens(e)
    action({pesquisa: pesquisa, quantidade: e})
  }

  const limparPesquisa = (e) => {
    setPesquisa('')
    actionClean()
  }

  const add = (e) => {
    setOpen(e)
  }

  return (
    <>
    <div>
      <div className='pesquisa'>
        <Input label='' name='input' action={e => setPesquisa(e.target.value)} value={pesquisa}>
          <ActionForm action={e => limparPesquisa()} title='Limpar'>
            <IcoClose />
          </ActionForm>
          <ActionForm action={e => pesquisar(pesquisa)} title='Pesquisar'>
            <IcoSearch />
          </ActionForm>
        </Input>
      </div>
      <div>
        <Select
          label=''
          name='multiselectcustom'
          action={e => quantidade(e.target.value)}
          options={selectFake}
          selected={itens}
        ></Select>
      </div>
      <div className='pesquisa-acao'>
        <Button action={()=> add(true)} color='primary' type='btn circle' variant='normal'>
          <IcoAdd />
        </Button>
      </div>
    </div>
    <Adicionar actionModal={(e) => add(e)}  openModal={open} refresh={(e)=> refresh(e)} />
    </>
  )
}
{/* <ActionsModal>
  <Button
    color='success'
    action={() => dispatch(AddAlert('success', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
  >
    Ação
  </Button>
  <Button
    color='danger'
    action={() => dispatch(AddAlert('error', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
  >            
    Ação
  </Button>
</ActionsModal> */}