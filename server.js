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
    },
    {
        nome: 'Luan',
        matricula: '123',
        historico: [
          { disciplina: 'Matemática', media: 7.0 },
          { disciplina: 'Português', media: 9.5 },
          { disciplina: 'História', media: 6.5 }
        ]
      }
  ];

// Definir rota para receber a requisição do cliente
app.get('/historico', (req, res) => {

    // Recebe o nome e matrícula do aluno na requisição
    const nome = req.query.nome;
    const matricula = req.query.matricula;

    console.log(matricula, nome);
    // busca o aluno
    const aluno = alunos.find(a => a.nome === nome && a.matricula == matricula);

    if(aluno){
        // calcula o coeficiente do aluno
        const coeficiente = aluno.historico.reduce((total, h) => total + h.media, 0) / aluno.historico.length 
        
        //retorna as informações do aluno
        res.json({
            historico: aluno.historico,
            coeficiente, coeficiente
        });
    } else {
        res.status(404).json({message: 'Aluno não encontrado.'})
    }
});

// iniciar o servidor
app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
});