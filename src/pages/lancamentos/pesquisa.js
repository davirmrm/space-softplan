import React, { useState } from 'react'
import { ActionForm, Button, IcoClose, IcoSearch, Input, Select } from '../../component'
 
const selectFake = [
  { id: 10, name: 'Apresentando 10 itens'},
  { id: 20, name: 'Apresentando 20 itens'},
  { id: 30, name: 'Apresentando 30 itens'},
  { id: 40, name: 'Apresentando 40 itens'},
  { id: 50, name: 'Apresentando 50 itens'},
  { id: 80, name: 'Apresentando 80 itens'},
  { id: 100, name: 'Apresentando 100 itens'}
]
export default ({action = () => null, actionClean = () => null}) => {
  const [pesquisa, setPesquisa] = useState('')
  const [itens, setItens] = useState({ id: 10, name: 'Apresentando 10 itens'})

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

  return (
    <div>
      <div className='lancamento-pesquisa'>
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
    </div>
  )
}