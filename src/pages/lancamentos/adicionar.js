import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsModal, AddAlert, Button, Input, Modal } from '../../component'
import Language from '../../component/translate/translate'
import { modalOpen } from '../../layout/redux/AppActions'

const inputsDefault = {nome:'', local: '', foguete: ''}
export default () => {
  const dispatch = useDispatch()
  const textoDefault = require(`${Language()}`)
  const [inputsList, setInputsList] = useState(inputsDefault)
  const statusModal = useSelector(state => state.appState.modalOpen)

  const hanldeChange = (e) => {
    setInputsList({...inputsList, [e.target.name]: e.target.value})
  }

  const salvar = (e) => {
    if (inputsList.nome !== '') {
      dispatch(AddAlert('success', textoDefault.mensagem.salvoSucesso))
      setInputsList(inputsDefault)
    } else{
      dispatch(AddAlert('error', `${textoDefault.mensagem.camposObrigatorios}`))
    }
  }

  return (
    <Modal
      title={textoDefault.modalAdd}
      size='small'
      open={statusModal === 'novosLancamentos'}
      close={() =>  dispatch(modalOpen(''))}
      closeText='Fechar'
    >
      <div>
        <Input label={'* ' + textoDefault.nome} name='nome' action={e => hanldeChange(e)} value={inputsList.nome} />
        <Input label={textoDefault.local} name='local' action={e => hanldeChange(e)} value={inputsList.local} />
        <Input label={textoDefault.foguete} name='foguete' action={e => hanldeChange(e)} value={inputsList.foguete} />
      </div>

      <ActionsModal>
        <Button
          color='success'
          action={() => salvar(inputsList)}
        >
          {textoDefault.salvar}
        </Button>
      </ActionsModal>
    </Modal>
  )
}