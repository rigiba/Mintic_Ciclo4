import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import DataTable from 'react-data-table-component';
//import { setSelectionRange } from '@testing-library/user-event/dist/utils';
//import { Container } from "@material-ui/core";
import React from "react";
import FormEntrada from "./components/FormEntrada";
import FormSalida from "./components/FormSalida";
import TablaDatos from "./components/TablaDatos";
//import DataTable from './components/DataTable.js';
 //import MaterialTable from "material-table";
//import { type } from "@testing-library/user-event/dist/type";


function App() {

  
  return (
    <div className="container-principal">
    <div className="container-1">
  
    <FormEntrada/>
    <FormSalida/>
  
    </div>
      <div className="container-2">
        <TablaDatos/>
      </div>
      

    </div>
  );
}

export default App;
