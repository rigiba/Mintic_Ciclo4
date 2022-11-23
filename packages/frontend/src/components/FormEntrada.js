import React, {useState} from 'react';
import './estilosComponentes/formEntrada.css'


export default function FormEntrada (){
    const[InitPlaca, setPlaca] = useState(); /*Función para dejar en blanco nuevamente la placa*/
    // obtener captura del tiempo.
    const [initTime, setTime] = useState();
    function enviarDatos(event){
        alert(new Date());
        // var time= tiempoActual.toLocaleString();
        //setTime(5) 
        setPlaca(event.target.value)
    }
    
        return (
            <div className='FormEntrada'>
                <form className='Formulario'>
                <h2 className='titulo-componente'>Registro de Vehiculo</h2>
                    <div className='resgitro-placa'>
                        <label className='label-placa'>Placa Vehiculo:</label>

                        <input type='text'
                        id='placa'
                        name='placa'
                        className='placa'
                        value={InitPlaca} 
                        // onChange={()=>enviarDatos()}
                        placeholder ='Ingrese la placa del vehiculo'
                        />
                    </div>
                     <div className='tiempo-box'>
                        <label 
                            className='titulo-tiempo'>Fecha y hora entrada</label>
                        
                        <p className='tiempo-p'>
                            {InitPlaca}
                        </p>
                     </div>
                    <div className='tipo-vehiculo-box'>

                        <label>Seleccione tipo de vehiculo</label><br/>

                        <select
                        name='tipeoehiculo'
                        className='tipo-vehiculo' 
                        >
                            <option value='auto'>Automovil</option>
                            <option value='moto'>Motocicleta</option>
                        </select>

                    </div>
                    <br/>

                    <button type="submit" className="boton-entrada" onClick={() =>{enviarDatos()}}>Registrar</button>
                    

                </form>
            </div>
        )
    
        
    
}
    


