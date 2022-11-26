import React, { useState } from "react";
import "./estilosComponentes/formEntrada.css";
import axios from "axios";

export default function FormEntrada() {
  const [InitPlaca, setPlaca] = useState(''); /*Función para dejar en blanco nuevamente la placa*/
  // obtener captura del tiempo.
  const [park, setPark] = useState(''); /*Función para dejar en blanco nuevamente la placa*/

  const handleChange = e => {
    setPlaca(prev => ({...prev, [e.target.placa]: e.target.value}));
  };


  const [initTime, setTime] = useState();

  var tiempoActual = new Date();
  var time = tiempoActual.toLocaleString();

     function enviarDatos(e) {
        alert("Vehiculo registrado");

        //e.preventDefault();

    const data = {
      id_parq: "203",
      placa: "ABC123",
      tipo_vehiculo: "CAMPERO"
    };

    // onsubmit = async (e) => {
    //     await axios.post(`http://localhost:3005/parqueaderos/`+data)
    //    .then(res => console.log(res))
    //     .catch(err => console.log(err));
    // }

       onsubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        await axios.post('http://localhost:3005/parqueaderos/',{
            id_parq: e.target.park.value,
            placa: e.target.placa.value,
            tipo_vehiculo: e.target.tipo_vehiculo.value
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
       }

    // onchange = (e) => {
    //     this.setState({
    //         placa: e.target.value
    //     })

    // onsubmit = async (e) => {
    //   await axios
    //     .post("http://localhost:3005/parqueaderos/", {
    //       id_parq: "203",
    //       placa: "ABC123",
    //       tipo_vehiculo: "CAMPERO",
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };

    //setTime(5)
    // setPlaca(event.target.value)
    // const datas = new Date()



  }



  return (
    <div className="FormEntrada">
      <form className="Formulario" >
        <h2 className="titulo-componente">Registro de Vehiculo</h2>
        <div className="resgitro-placa">
          <label className="label-placa"># Park:</label>
          <br></br>
          <input
            type="text"
            id="park"
            name="park"
            className="placa"
            value={park.park}
            // onChange={()=>enviarDatos()}
            placeholder="Ingrese #"
          />
        </div>
        <div className="resgitro-placa">
          <label className="label-placa">Placa Vehiculo:</label>
          <br></br>
          <input
            type="text"
            id="placa"
            name="placa"
            className="placa"
            value={InitPlaca.placa}
            // onChange={()=>enviarDatos()}
            placeholder="Ingrese la placa del vehiculo"
          />
        </div>
        <div className="tiempo-box">
          <label className="titulo-tiempo">Fecha y hora entrada</label>
          <p className="time" id="time">
            {time}
          </p>
          <p className="tiempo-p">{InitPlaca}</p>
        </div>
        <div className="tipo-vehiculo-box">
          <label>Seleccione tipo de vehiculo</label>
          <br />

          <select name="tipo_vehiculo" className="tipo-vehiculo">
            <option value="AUTO">Automovil</option>
            <option value="MOTO">Motocicleta</option>
          </select>
        </div>
        <br />

        <button
          type="submit"
          className="boton-entrada"
          onClick={() => {
            enviarDatos();
          }}>
          Registrar
        </button>
      </form>
    </div>
  );
}
