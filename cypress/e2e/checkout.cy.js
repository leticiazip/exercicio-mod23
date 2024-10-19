/// <reference types = "cypress" />

const { primeiroNome, telefone } = require('../fixtures/data.json')

describe('Checkout', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve realizar o checkout sem endereço previamente cadastrado', () => {
    cy.addProdutoCarrinho('Mouse Gamer RGB')
    cy.adicionarEndereco(primeiroNome, telefone, 'Rua Teste da Silva', 'São Paulo', 'RS', '01304-000')
    cy.checkout()
  })
})