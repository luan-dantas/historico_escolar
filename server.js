const express = require('express');

const app = express();

// iniciar o servidor
app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
});