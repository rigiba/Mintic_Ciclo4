import React, {useState} from 'react';
import './estilosComponentes/formSalida.css'


export default function FormEntrada (){
    const[InitPlaca, setPlaca] = useState(''); /*reiniciar el valor inicial*/
    // obtener tipo de vehiculo según la placa registrada en FormEntrada.
    // obtener captura del tiempo.
    var tiempoActual = new Date();
    var time= tiempoActual.toLocaleString();
        return (
            <div className='FormSalida'>
                <form className='Formulario'>
                    <h2 className='titulo'>Salida de Vehiculo</h2>
                    <label>Placa Vehiculo</label>
                    <br></br>
                    <input type='text'
                    className='placa'
                     id='placa'
                     name='placa'
                     value={InitPlaca} 
                     onChange={(e)=>setPlaca(e.target.value)}
                     placeholder ='Ingrese la placa del vehiculo'
                     required/>
                     <div className='time-box'>
                     <label className='title-time'>Fecha y hora salida</label>
                     <p className='time'
                     id='time'>{time}
                     </p>
                     </div>
                    <button type="submit" className="boton-salida">Finalizar Servicio</button>
                    <p>
                        El valor a cancelar es ****
                    </p>
                </form>
            </div>
        )
    
        
    
}
    