/// <reference types = "cypress" />

const { email, senha } = require('../fixtures/data.json')

describe('Carrinho - Intercept', () => {

    let idUsuario = '6726d308094935897eb00e10'

    beforeEach(() => {
        cy.login(email, senha)
    })

    it('Adicionar produtos ao carrinho', () => {
        cy.intercept('GET', '**/public/getCart?userId='+idUsuario+'', { fixture: 'itensCarrinho.json' }).as('getItensCheckout')
        cy.addProdutoCarrinho('Handmade Leather Donddi sandals For Women')
        cy.retornarProdutoCarrinho().should('have.text', 'Handmade Leather Donddi sandals For Women')
    })

    it('Atualizar carrinho', () => {
        cy.intercept('GET', '**/public/getCart?userId='+idUsuario+'', { fixture: 'itensCarrinho.json' }).as('getItensCheckout')
        cy.intercept('PUT', '**/public/updateCart/'+idUsuario+'',  { fixture: 'mensagemCarrinho.json' }).as('carrinhoAtualizado')
        cy.carrinho();
        cy.get('[data-testid="addItem"] > .css-146c3p1').click()
        cy.wait('@carrinhoAtualizado').its('response.body.message').should('eq', 'cart updated')
})

    it('Deletar item do carrinho', () => {
        cy.intercept('GET', '**/public/getCart?userId='+idUsuario+'', { fixture: 'itensCarrinho.json' }).as('getItensCheckout')
        cy.intercept('PUT', '**/public/updateCart/'+idUsuario+'',  { fixture: 'payloadCarrinho.json' }).as('carrinhoAtualizado')
        cy.carrinho();
        cy.get('[data-testid="removeItem"]').click()
        cy.wait('@carrinhoAtualizado').its('request.body.quantity').should('eq', 2)
    })


})