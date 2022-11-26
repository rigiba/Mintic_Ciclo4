import FormSalida from './FormSalida'
import FormEntrada from './FormEntrada'

import 'bootstrap/scss/bootstrap.scss';
import'./estilosComponentes/Servicios.css';

const Servicios = ()=>{
    return (
        <div className='container'>
            <FormEntrada />
            <FormSalida />
        </div>
    )
}
export default Servicios