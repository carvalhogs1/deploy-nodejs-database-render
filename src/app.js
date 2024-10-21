const express = require('express');
const path = require('path');
const contatoRoutes = require('./routes/contato.routes');

const app = express();
const PORT = 3000;

// Configurando EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para tratar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/', contatoRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
