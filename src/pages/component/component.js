import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './component.css'

import ButonsPage from '../buttons'
import {
  AddAlert,
  ActionForm,
  IcoClose,
  Textarea,
  Input,
  Checkbox,
  Select,
  List,
  ActionsModal,
  Modal,
  Button,
  RadioButton,
  FilterSelect,
  FilterAction,
  Paginate,
  IcoEye,
  IcoEyeBlocked,
  Data,
  Calendario
} from '../../component'

const headDefault = [
  {
    colunm: 'id',
    text: 'Identificador',
    className: ''
  },
  {
    colunm: 'name',
    text: 'Nome',
    className: ''
  },
  {
    colunm: 'acoes',
    text: 'Acoes',
    className: 'actions'
  }
]
const selectFakeDefault = [
  {
    id: 1,
    name: 'item 1'
  },
  {
    id: 2,
    name: 'item 2'
  },
  {
    id: 3,
    name: 'item 3'
  }
]

export default () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [senha, setSenha] = useState(false)
  const [inputsList, setInputsList] = useState({
    input: '',
    senha: '',
    data1: '',
    data2: '',
    select: {},
    multiselect: [],
    checkboxg: [],
    checkboxSwitchg: [],
    radio: {},
    multiselectcustom: {}
  })
  const [selectFake, setselectFake] = useState(selectFakeDefault)

  const [modal, setModal] = useState({title: 'titulo default', content: 'conteudo default', size: 'medium'})

  const alert = useSelector(state => state.alerts)

  const hanldeChange = e => {
    setInputsList({ ...inputsList, [e.target.name]: e.target.value })
  }

 const modalCustom = (m) => {   
  switch (m) {
    case "small":
      return setModal({title: 'Modal small', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: m})
    case "large":
      return setModal({title: 'Modal large', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', size: m})
    case "fullScreen":
      return setModal({title: 'Modal fullScreen', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', size: m})
   
    default:
      return setModal({title: 'Modal medium', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', size: m})
  }
 }

  return (
    <div className='componentes'>
      <h2 className='titulo'>Componentes</h2>
      <div>
        <h5>Calendário</h5>
        <Calendario
          name='data'
          action={e => setInputsList({...inputsList, data1: e})}
          value={inputsList.data1}
        />
      </div>
      <div>
        <h5>Alertas</h5>
        <div className='grupo-botao'>
          <Button color='primary' action={()=> dispatch(AddAlert('primary', 'Alerta primary'))}>Alerta primary</Button>
          <Button color='secondary' action={()=> dispatch(AddAlert('secondary', 'Alerta secondary'))}>Alerta secondary</Button>
          <Button color='warning' action={()=> dispatch(AddAlert('warning', 'Alerta warning'))}>Alerta warning</Button>
          <Button color='danger' action={()=> dispatch(AddAlert('error', 'Alerta error'))}>Alerta error</Button>
          <Button color='success' action={()=> dispatch(AddAlert('success', 'Alerta success'))}>Alerta success</Button>
        </div>
      </div>
      <div>
        <h5>Modais</h5>
        <div className='grupo-botao'>
          <Button color='secondary' action={()=> [modalCustom('small'), setOpen(!open)]}>Modal Small</Button>
          <Button color='secondary' action={()=> [modalCustom('medium'), setOpen(!open)]}>Modal medium</Button>
          <Button color='secondary' action={()=> [modalCustom('large'), setOpen(!open)]}>Modal large</Button>
          <Button color='secondary' action={()=> [modalCustom('fullScreen'), setOpen(!open)]}>Modal fullScreen</Button>
        </div>
      </div>
      <div>
        <h5>Form</h5>
        <Input label='label' name='input' action={e => hanldeChange(e)} value={inputsList.input}>
          <ActionForm action={e => setInputsList({ ...inputsList, input: '' })} title='Limpar'>
            <IcoClose />
          </ActionForm>
        </Input>

        <Input
          label='label senha'
          type={senha ? 'password' : 'text'}
          name='senha'
          action={e => hanldeChange(e)}
          value={inputsList.senha}
        >
          <ActionForm action={e => setSenha(!senha)} title={senha ? 'visivel' : 'invisivel'}>
            {senha ? <IcoEye /> : <IcoEyeBlocked />}
          </ActionForm>
        </Input>

        <Input label='label data' type='date' name='data' action={e => hanldeChange(e)} value={inputsList.data} />

        <Data
          label='Data de '
          name='data2'
          action={e => hanldeChange(e)}
          value={inputsList.data2}
          // inicioFim={tipoIdaVolta.id === '0' ? true : false}
          className='col-3'
        />
        
        <Input
          label='label numero'
          type='number'
          name='numero'
          action={e => hanldeChange(e)}
          value={inputsList.numero}
        />

        <Textarea label='label textarea' name='textarea' action={e => hanldeChange(e)} value={inputsList.textarea} />

        <Select
          label='label select '
          name='select'
          action={e => hanldeChange(e)}
          options={selectFake}
          selected={inputsList.select}
          // textCustom={['Selecione', 'Selecionado', 'Selecionados', 'Marcar todos', 'Desmarcar todos']}
          // closeOnSelect={false}
          filter
          // ={{
          //   clean: <IcoClose />,
          //   text: <IcoSearch />,
          //   title: 'Filtrar'
          // }}
        />

        <Select
          label='label multiselect'
          name='multiselect'
          action={e => hanldeChange(e)}
          options={selectFake}
          selected={inputsList.multiselect}
          // textCustom={['Selecione', 'Selecionado', 'Selecionados', 'Marcar todos', 'Desmarcar todos']}
          multiSelect
          closeOnSelect={false}
          // filter={{
          //   clean: <IcoClose />,
          //   text: <IcoSearch />,
          //   title: 'Filtrar'
          // }}
        >
          <FilterSelect
            // clean={<IcoClose />}
            // filter={<IcoSearch />}
            action={e => setselectFake(FilterAction(selectFakeDefault, e))}
            title='Filtrar'
          />
        </Select>

        <Select
          label='label multiselect custom'
          name='multiselectcustom'
          action={e => hanldeChange(e)}
          options={selectFake}
          selected={inputsList.multiselectcustom}
          optionCustom={e => (
            <div>
              <span>{e.id}</span> <span>{e.name}</span>
            </div>
          )}
        ></Select>

        <Checkbox
          label='label checkbox'
          name='checkbox'
          action={e => hanldeChange(e)}
          checked={inputsList.checkbox}
          text={inputsList.checkbox ? 'Ativo' : 'Inativo'}
        />

        <Checkbox
          label='label checkbox group'
          // type='number'
          name='checkboxg'
          action={e => hanldeChange(e)}
          checked={inputsList.checkboxg}
          options={selectFakeDefault}
        />

        <Checkbox
          label='label checkbox Switch'
          type='switch'
          name='checkboxSwitch'
          action={e => hanldeChange(e)}
          checked={inputsList.checkboxSwitch}
          text={inputsList.checkboxSwitch ? 'Ativo' : 'Inativo'}
        />

        <Checkbox
          label='label checkbox Switch'
          type='switch'
          name='checkboxSwitchg'
          action={e => hanldeChange(e)}
          checked={inputsList.checkboxSwitchg}
          options={selectFakeDefault}
        />

        <RadioButton
          label='label radio'
          name='radio'
          action={e => hanldeChange(e)}
          checked={inputsList.radio}
          options={selectFakeDefault}
        />
      </div>
      <div>
        <h5>Lista</h5>
        <List
          head={headDefault}
          data={selectFakeDefault}
          listCustom={e => (
            <div className='acoes'>
              <Button color='primary' type='btn circle' action={() => null} title='Ver'>
                <IcoEye />
              </Button>
            </div>
          )}
        />
      </div>
      <div>
        <h5>Paginação</h5>
        <Paginate />
      </div>
      <div>
        <h5>Button</h5>
          <ButonsPage />
      </div>

      <Modal
        title={modal.title}
        size={modal.size}
        // size='large'
        open={open}
        close={() => setOpen(false)}
        closeText='Fechar'
      >
        {modal.content}
        <ActionsModal>
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
        </ActionsModal>
      </Modal>
    </div>
  )
}
