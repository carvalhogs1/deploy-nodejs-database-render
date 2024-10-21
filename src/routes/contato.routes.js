const express = require('express');
const router = express.Router();

const contatoController = require('../controllers/contato.controller');

// Rota para exibir o formulário de novo contato
router.get('/novo', contatoController.exibirFormulario);

// Rota para criar um novo contato
router.post('/novo', contatoController.criarContato);

// Rota para listar os contatos
router.get('/', contatoController.listarContatos);

module.exports = router;
