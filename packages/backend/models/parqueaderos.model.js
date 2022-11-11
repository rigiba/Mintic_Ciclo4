const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParqueaderosSchema = new Schema(
  {
    id_parq: { type: String, required: true, max: 60 },
    tipo_vehiculo: { type: String, required: true, max: 40 },
    placa: { type: String, required: true, max: 40 },
    fecha_ingreso: { type: String, required: false, max: 25 },
    fecha_salida: { type: String, required: false, max: 25 },
    valor_tarifa: { type: String, required: false, max: 20 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("parqueaderos", ParqueaderosSchema);
