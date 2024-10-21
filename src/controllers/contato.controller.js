const contatoModel = require('../models/contato.model');

// Exibe o formulário para criar um novo contato
const exibirFormulario = (req, res) => {
  res.render('contatos/novo');
};

// Cria um novo contato
const criarContato = (req, res) => {
  const { nome, sobrenome, email } = req.body;
  contatoModel.criarContato(nome, sobrenome, email);
  res.redirect('/');
};

// Lista os contatos
const listarContatos = (req, res) => {
  const contatos = contatoModel.listarContatos();
  res.render('contatos/listar', { contatos });
};

module.exports = { exibirFormulario, criarContato, listarContatos };
