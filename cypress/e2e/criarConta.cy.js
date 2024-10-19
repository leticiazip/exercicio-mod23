/// <reference types = "cypress" />

const { homePage } = require("../support/pages/home.page")
const { contaPage } = require("../support/pages/conta.page")
const { customerPage } = require("../support/pages/customer.page")
const { primeiroNome, ultimoNome, telefone, email, senha, confirmaSenha } = require('../fixtures/data.json')

describe('Criação de conta', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve criar conta com sucesso', () => {
    homePage.openMenu('Account')
    contaPage.criarConta(primeiroNome, ultimoNome, telefone, email, senha, confirmaSenha)

    homePage.openMenu('Account')
    customerPage.validarUsuarioLogado().should('contain', email)
  })
})