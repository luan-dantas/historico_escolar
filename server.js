const express = require('express');

const app = express();

// Estrutura de dados para armazenar as informações do aluno e seu histórico escolar
const alunos = [
    {
      nome: 'John Doe',
      matricula: '12345',
      historico: [
        { disciplina: 'Matemática', media: 8.5 },
        { disciplina: 'Português', media: 9.0 },
        { disciplina: 'História', media: 7.0 }
      ]
    },
    {
      nome: 'Jane Doe',
      matricula: '67890',
      historico: [
        { disciplina: 'Matemática', media: 7.0 },
        { disciplina: 'Português', media: 9.5 },
        { disciplina: 'História', media: 6.5 }
      ]
    }
  ];


// iniciar o servidor
app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
});