import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsModal, Button, IcoClose, IcoSearch, Input, Modal, Select } from '../../component'
import './perfis.css'
import { listarPermissoes, changePerfil, salvarPerfil, editarPerfil, modalFechar } from './redux/perfisActions'

export default () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.perfisState.modalStatus)
  const perfil = useSelector(state => state.perfisState.perfil)
  const permissoes = useSelector(state => state.perfisState.permissoes)

  useEffect(() => {
    dispatch(listarPermissoes())
  }, [dispatch])
  return (
    <Modal
      title={modalStatus === 'novo' ? 'Novo perfil' : 'Editar perfil'}
      open={modalStatus === 'editar' || modalStatus === 'novo' ? true : false}
      close={() => dispatch(modalFechar())}
      closeText='Fechar'
    >
      <section>
        <Input label='Nome' name='nome' action={e => dispatch(changePerfil(e))} value={perfil.nome} />
        <Select
          label='Permissões'
          name='permissoes'
          action={e => dispatch(changePerfil(e))}
          options={permissoes}
          optionLabel='label'
          optionValue='id'
          selected={perfil.permissoes}
          multiSelect
          closeOnSelect={false}
          filter={{
            clean: <IcoClose />,
            text: <IcoSearch />,
            title: 'Filtrar'
          }}
        ></Select>
      </section>
      <ActionsModal>
        <Button
          color='success'
          action={() => (modalStatus === 'novo' ? dispatch(salvarPerfil(perfil)) : dispatch(editarPerfil(perfil)))}
        >
          Salvar
        </Button>
      </ActionsModal>
    </Modal>
  )
}
