import mongoose from "mongoose";

mongoose.connect('mongodb+srv://wald:gta5ygta6@cluster0.ucr3zfe.mongodb.net/')
    .then(data => console.log('Base Conectada'))
    .catch(err => console.log(err));