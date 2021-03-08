import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ActionsModal, AddAlert, Button, Input, Modal } from '../../component'
import Language from '../../component/translate/translate'

const CREATE_POST = gql`
  mutation CreatePost($name: String!, $rocket: String!, $twitter: String!) {
    insert_users(objects: { name: $name, rocket: $rocket, twitter: $twitter }) {
      affected_rows
    }
  }
`;

const inputsDefault = {nome:'', twitter: '', foguete: '0'}
export default ({actionModal = () => null, openModal, refresh = () => null}) => {
  const dispatch = useDispatch()
  const textoDefault = require(`${Language()}`)
  const [inputsList, setInputsList] = useState(inputsDefault)

  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  const hanldeChange = (e) => {
    setInputsList({...inputsList, [e.target.name]: e.target.value})
  }

  const salvar = (e) => {
    if (inputsList.nome !== '') {
      createPost({ variables: {
        name: inputsList.nome,
        rocket: inputsList.foguete,
        twitter: inputsList.twitter,
      } });
      dispatch(AddAlert('success', textoDefault.mensagem.salvoSucesso))
      actionModal(false)
      setInputsList(inputsDefault)
      refresh()
    } else{
      dispatch(AddAlert('error', `${textoDefault.mensagem.camposObrigatorios}`))
    }
  }

  return (
    <Modal
      title={textoDefault.modalAdd}
      size='small'
      open={openModal}
      close={() => actionModal(false)}
      closeText='Fechar'
    >
      <div>
        <Input label={'* ' + textoDefault.nome} name='nome' action={e => hanldeChange(e)} value={inputsList.nome} />
        <Input label={textoDefault.foguete} name='foguete' action={e => hanldeChange(e)} value={inputsList.foguete} />
        <Input label={textoDefault.twitter} name='twitter' action={e => hanldeChange(e)} value={inputsList.twitter} />
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