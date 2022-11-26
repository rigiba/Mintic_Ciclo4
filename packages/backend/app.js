const express = require("express");
const indexRouter = require('./routes/index.routes');
const path = require ("path");
const database = require("./config/database"); // conexion base datos desde config con database.js
var parqueaderosRouter = require('./routes/parqueaderos.router');
const logger = require('morgan'); // identificar las peticiones que llegan - codigos http
var cookieParser = require("cookie-parser");


var cors = require("cors");


const app = express();

//setear la carpeta de vistas
app.set('views', path.join(__dirname, 'views'))


// Connection Srv
const PORT = process.env.PORT || 3005
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})

//funcion llamado base de datos
database.mongoConnect();

//midelware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()); 



//Routes
// app.use('/', indexRouter);
app.use(indexRouter);
// app.use(parqueaderosRouter);
app.use('/parqueaderos', parqueaderosRouter);







module.exports = app;
