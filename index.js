const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-vasaj.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3339);

// MÉTODOS HTTP: get, post, put, delete
//get = pegar, receber informação
//post = criar alguma informação
//put = editar informação

//Tipos de parâmetros
//Query Params: request.query (Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
// body request.body (Dados para criação ou alteração de um regoistro)

// MongoDB (Não-relacional)