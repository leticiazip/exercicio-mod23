/// <reference types = "cypress" />

import 'cypress-if'
const { primeiroNome, telefone, email, senha } = require('../fixtures/data.json')

describe('Checkout', () => {

  beforeEach(() => {
    cy.login(email, senha)
  })

  it('Deve realizar o checkout', () => {
    cy.addProdutoCarrinho('Eos V-Neck')
    //Condição para verificar se já possui endereço cadastrado, se sim vai direto para o checkout, caso contrário, cadastra o primeiro endereço do cliente
    cy.get('[data-testid="addressName"]')
      .if('exist')
      .then(() => {
        cy.checkout()
      })
      .else()
      .then(() => {
        cy.adicionarEndereco(primeiroNome, telefone, 'Rua Teste', 'São Paulo', 'SP', '93546060')
        cy.checkout()
      })
  })
})
