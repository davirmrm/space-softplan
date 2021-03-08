import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsModal, Button, IcoClose, IcoSearch, Input, Modal, Select } from '../../component'
import { listarPerfis } from '../perfis/redux/perfisActions'
import { modalFechar, editarColaborador, salvarColaborador, changeInformacao } from './redux/colaboradoresActions'

export default () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.perfisState.modalStatus)
  const colaborador = useSelector(state => state.colaboradoresState.colaborador)
  const perfis = useSelector(state => state.perfisState.perfis)

  useEffect(() => {
    dispatch(listarPerfis())
  }, [dispatch])
  return (
    <Modal
      title={modalStatus === 'novo' ? 'Novo colaborador' : 'Editar colaborador'}
      open={modalStatus === 'editar' || modalStatus === 'novo' ? true : false}
      close={() => dispatch(modalFechar())}
      closeText='Fechar'
    >
      <section>
        <Input label='Nome' name='nome' action={e => dispatch(changeInformacao(e))} value={colaborador.nome} />
        <Input label='E-mail' name='email' action={e => dispatch(changeInformacao(e))} value={colaborador.email} />
        <Select
          label='Perfil'
          name='perfis'
          action={e => dispatch(changeInformacao(e))}
          options={perfis}
          optionLabel='nome'
          optionValue='_id'
          selected={colaborador.perfis}
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
          action={() =>
            modalStatus === 'novo' ? dispatch(salvarColaborador(colaborador)) : dispatch(editarColaborador(colaborador))
          }
        >
          Salvar
        </Button>
      </ActionsModal>
    </Modal>
  )
}
