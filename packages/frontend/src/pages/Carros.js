import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default class Carros extends Component {
  state = {
    placa: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:3005/parqueaderos");
    this.setState({ placa: res.data });
    console.log(this.state.placa);
  }

deleteplaca = async (id) => {
  await axios.delete('http://localhost:3005/parqueaderos/'+id);
  this.obtener();
  //console.log(id);
}

async obtener() {
  const res = await axios.get("http://localhost:3005/parqueaderos");
  this.setState({ placa: res.data });
}



  render() {
    return (
      <div className="row">

         <div className="col-md-1">
          <ul className="list-group">
            {this.state.placa.map((data) => (
              <li
                className="list-group-item list-group-item-action"
                key={data._id}
                onDoubleClick={()=> this.deleteplaca(data._id)}
              >
                {data.id_parq}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="list-group">
            {this.state.placa.map((data) => (
              <li
                className="list-group-item list-group-item-action"
                key={data._id}
              >
                {data.placa}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="list-group">
            {this.state.placa.map((data) => (
              <li
                className="list-group-item list-group-item-action"
                key={data._id}
              >
                {data.tipo_vehiculo}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="list-group">
            {this.state.placa.map((data) => (
              <li
                className="list-group-item list-group-item-action"
                key={data._id}
              >
                {data.createdAt}
              </li>
            ))}
          </ul>
        </div> 
 
        <div className="col-md-2">
          <ul className="list-group">
            {this.state.placa.map((data) => (
              <li
                className="list-group-item list-group-item-action"
                key={data._id}
              >
                $ {data.valor_tarifa}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
