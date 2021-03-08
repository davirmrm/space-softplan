import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ActionForm,
  Button,
  IcoAdd,
  IcoBin,
  IcoClose,
  IcoPencil,
  IcoSearch,
  Input,
  List,
  Paginate
} from '../../component'
import './perfis.css'
import {
  campoPesquisa,
  campoPesquisaLimpar,
  listarPerfis,
  modalEditar,
  modalNovo,
  modalRemover,
  pesquisarPerfil
} from './redux/perfisActions'
import NovoEditar from './perfilNovoEditar'
import Remover from './perfilRemover'

export default () => {
  const dispatch = useDispatch()
  const pesquisa = useSelector(state => state.perfisState.campoPesquisa)
  const perfis = useSelector(state => state.perfisState.perfis)

  useEffect(() => {
    dispatch(listarPerfis())
  }, [dispatch])

  const headDefault = [
    {
      colunm: 'nome',
      text: 'Nome',
      className: ''
    },
    {
      colunm: 'permissoesLista',
      text: 'Permissões',
      className: ''
    },
    {
      colunm: 'acoes',
      text: 'Ações',
      className: 'actions'
    }
  ]

  return (
    <>
      <div>
        <h2 className='titulo'>Perfis</h2>
        <div className='box-pesquisa'>
          <div>
            <Input label='Pesquisar' name='input' action={e => dispatch(campoPesquisa(e))} value={pesquisa}>
              {pesquisa ? (
                <ActionForm action={e => dispatch(campoPesquisaLimpar())} title='Limpar'>
                  <IcoClose />
                </ActionForm>
              ) : null}

              <ActionForm
                action={e => dispatch(pesquisarPerfil(pesquisa))}
                title='pesquisar'
                disabled={pesquisa ? false : true}
              >
                <IcoSearch />
              </ActionForm>
            </Input>
          </div>
          <div className='adicionar'>
            <Button color='primary' type='btn circle' action={() => dispatch(modalNovo('novo'))} title='Novo'>
              <IcoAdd />
            </Button>
          </div>
        </div>
        <List
          head={headDefault}
          data={perfis}
          listCustom={e => {
            const custom = e
            custom['permissoesLista'] = <p>{e.permissoes.map((lp, i) => (i > 0 ? ` - ${lp.label}` : lp.label))}</p>
            custom['acoes'] = (
              <div className='acoes'>
                <Button color='secondary' type='btn circle' action={() => dispatch(modalEditar(e))} title='Editar'>
                  <IcoPencil />
                </Button>
                <Button color='danger' type='btn circle' action={() => dispatch(modalRemover(e))} title='Remover'>
                  <IcoBin />
                </Button>
              </div>
            )
            return custom
          }}
        />
        <Paginate />
        <NovoEditar />
        <Remover />
      </div>
    </>
  )
}
