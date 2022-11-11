//conexion data baseconst { default: mongoose } = require("mongoose");
const { default: mongoose } = require("mongoose");

const host = "localhost";
const port = 27017;
const db = "Parking";

// (async ()=> {
    
//     try {
//         const data = await connect(`mongodb://localhost:27027/Parking`)
//         console.log('Conecting ...', + data.connection.name);
        
//     } catch (error) {
//         console.error(error);
//     }
// })();


exports.mongoConnect = () =>{

    const mongoStringConnetion = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnetion);
    mongoose.Promise = (global.Promise);
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb error al conectar"))

}
