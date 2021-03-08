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

import {
  campoPesquisa,
  campoPesquisaLimpar,
  listarColaboradores,
  modalEditar,
  modalNovo,
  modalRemover,
  pesquisarColaborador
} from './redux/colaboradoresActions'
import NovoEditar from './colaboradoresNovoEditar'
import Remover from './colaboradoresRemover'

export default () => {
  const dispatch = useDispatch()
  const pesquisa = useSelector(state => state.colaboradoresState.campoPesquisa)
  const colaboradores = useSelector(state => state.colaboradoresState.colaboradores)

  useEffect(() => {
    dispatch(listarColaboradores())
  }, [dispatch])

  const headDefault = [
    {
      colunm: 'nome',
      text: 'Nome',
      className: ''
    },
    {
      colunm: 'email',
      text: 'E-mail',
      className: ''
    },
    {
      colunm: 'perfisList',
      text: 'Perfil',
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
        <h2 className='titulo'>Colaboradores</h2>
        <div className='box-pesquisa'>
          <div>
            <Input label='Pesquisar' name='input' action={e => dispatch(campoPesquisa(e))} value={pesquisa}>
              {pesquisa ? (
                <ActionForm action={e => dispatch(campoPesquisaLimpar())} title='Limpar'>
                  <IcoClose />
                </ActionForm>
              ) : null}

              <ActionForm
                action={e => dispatch(pesquisarColaborador(pesquisa))}
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
          data={colaboradores}
          listCustom={e => {
            const custom = e
            custom['perfisList'] = <p>{e.perfis.map((lp, i) => (i > 0 ? ` - ${lp.nome}` : lp.nome))}</p>
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
