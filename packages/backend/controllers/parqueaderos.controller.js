const Parqueadero = require("../models/parqueaderos.model");
let response ={
    msg: "",
    exito: false
}

// const fecha = new date();
// fecha.getFullYear();
// console.log(fecha);

exports.create = function(req,res){
    let parqueadero = new Parqueadero({
        id_parq: req.body.id_parq,
        tipo_vehiculo: req.body.tipo_vehiculo,
        placa: req.body.placa,
        fecha_ingreso: req.body.fecha_ingreso,
        fecha_salida: req.body.fecha_salida,
        valor_tarifa: req.body.valor_tarifa
    })

    parqueadero.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el registro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "el registro se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Parqueadero.find(function(err, parqueaderos){
        res.json(parqueaderos)
    })
}

exports.findOne = function(req,res){
    Parqueadero.findOne({_id: req.params.id},function(err, parqueadero){
        res.json(parqueadero)
    })
}

exports.update = function(req,res){
    let parqueadero = {
        id_parq: req.body.id_parq,
        tipo_vehiculo: req.body.tipo_vehiculo,
        placa: req.body.placa,
        fecha_ingreso: req.body.fecha_ingreso,
        fecha_salida: req.body.fecha_salida,
        valor_tarifa: req.body.valor_tarifa
    }

    Parqueadero.findByIdAndUpdate(req.params.id, {$set: parqueadero}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el registro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "el registro modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Parqueadero.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el registro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "el registro eliminado correctamente"
        res.json(response)
    })
}

