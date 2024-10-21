// contato.model.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para criar um novo contato
async function criarContato(dadosContato) {
  try {
    // Insere um novo contato no banco de dados usando o Prisma
    const novoContato = await prisma.contato.create({
      data: {
        nome: dadosContato.nome,
        email: dadosContato.email,
        telefone: dadosContato.telefone,
      },
    });

    return novoContato; // Retorna o contato recém-criado
  } catch (error) {
    console.error('Erro ao criar contato: ', error);
    throw new Error('Erro ao criar contato');
  } finally {
    // Fecha a conexão com o banco de dados
    await prisma.$disconnect();
  }
}

// Função para listar todos os contatos
async function listarContatos() {
  try {
    // Busca todos os contatos no banco de dados usando o Prisma
    const contatos = await prisma.contato.findMany();
    return contatos; // Retorna a lista de contatos
  } catch (error) {
    console.error('Erro ao listar contatos: ', error);
    throw new Error('Erro ao listar contatos');
  } finally {
    // Fecha a conexão com o banco de dados
    await prisma.$disconnect();
  }
}

module.exports = { listarContatos, criarContato };