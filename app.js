import express from "express";
import usuariosRoutes from "./routes/usuario.routes.js";
import './database.js';
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();


app.use(express.json());
app.use(express.urlencoded({extends:false}));
app.use(express.static('./public'));

app.use('/api',usuariosRoutes);

app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en el puerto 3000');
});