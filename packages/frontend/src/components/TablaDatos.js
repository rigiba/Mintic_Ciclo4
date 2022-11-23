import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
//import FormEntrada from './FormEntrada';

export default function TablaDatos(){
    const tablaVehiculos=[
        {id:'FHI737',horaEntrada:'17-11-2022 8:20 pm',tipoVehiculo:"automovil"},
        {id:'GHT590',horaEntrada:'17-11-2022 8:22 pm',tipoVehiculo:"automovil"},
        {id:'MAH495',horaEntrada:'17-11-2022 8:30 pm',tipoVehiculo:"automovil"}
      ];
      
      const columnas=[
        {
            name: 'Placa',
            selector:'id',
            sortable: true
        },
        {
            name: 'Hora Entrada',
            selector:'horaEntrada',
            sortable: true
        },
        {
            name: 'Tipo de Vehiculo',
            selector:'tipoVehiculo',
            sortable: true
        }
      ];
      
      const paginacionOpciones={
        rowsPerPageText:'Filas por pagina',
        rangeSeparatorText:'de',
        selecAllRowsItem:true,
        selecAllRowsItemText:'Todos'
      }
      return(
        <div className="table-responsive">
    <DataTable
              columns={columnas}
              data={tablaVehiculos}
              title="Registro de Vehiculos"
              pagination
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight='600px'
     />
    </div>
      )
}

