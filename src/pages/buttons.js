import React from 'react'
import { Button } from '../component/button/button'
import { IcoClose } from '../component/icon/icon'

export default () => {
  return (
    <>
      <div className='grupo-botao'>
        <Button color='primary'>Botão primary</Button>
        <Button color='secondary'>Botão secondary</Button>
        <Button color='warning'>Botão warning</Button>
        <Button color='danger'>Botão danger</Button>
        <Button color='success'>Botão success</Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' variant='outline'>
          Botão primary
        </Button>
        <Button color='secondary' variant='outline'>
          Botão secondary
        </Button>
        <Button color='warning' variant='outline'>
          Botão warning
        </Button>
        <Button color='danger' variant='outline'>
          Botão danger
        </Button>
        <Button color='success' variant='outline'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' variant='outlined'>
          Botão primary
        </Button>
        <Button color='secondary' variant='outlined'>
          Botão secondary
        </Button>
        <Button color='warning' variant='outlined'>
          Botão warning
        </Button>
        <Button color='danger' variant='outlined'>
          Botão danger
        </Button>
        <Button color='success' variant='outlined'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' type='link'>
          Botão primary
        </Button>
        <Button color='secondary' type='link'>
          Botão secondary
        </Button>
        <Button color='warning' type='link'>
          Botão warning
        </Button>
        <Button color='danger' type='link'>
          Botão danger
        </Button>
        <Button color='success' type='link'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' type='link' variant='outlined'>
          Botão primary
        </Button>
        <Button color='secondary' type='link' variant='outlined'>
          Botão secondary
        </Button>
        <Button color='warning' type='link' variant='outlined'>
          Botão warning
        </Button>
        <Button color='danger' type='link' variant='outlined'>
          Botão danger
        </Button>
        <Button color='success' type='link' variant='outlined'>
          Botão success
        </Button>
      </div>
      <div className='grupo-botao'>
        <Button color='primary' type='btn circle'>
          <IcoClose />
        </Button>
        <Button color='secondary' type='btn circle'>
          <IcoClose />
        </Button>
        <Button color='warning' type='btn circle'>
          <IcoClose />
        </Button>
        <Button color='danger' type='btn circle'>
          <IcoClose />
        </Button>
        <Button color='success' type='btn circle'>
          <IcoClose />
        </Button>

        <Button color='primary' type='btn circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='secondary' type='btn circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='warning' type='btn circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='danger' type='btn circle' variant='outlined'>
          <IcoClose />
        </Button>
        <Button color='success' type='btn circle' variant='outlined'>
          <IcoClose />
        </Button>

        <Button color='primary' type='btn circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='secondary' type='btn circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='warning' type='btn circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='danger' type='btn circle' variant='outline'>
          <IcoClose />
        </Button>
        <Button color='success' type='btn circle' variant='outline'>
          <IcoClose />
        </Button>
      </div>
    </>
  )
}
