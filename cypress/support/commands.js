const { email, senha, primeiroNome } = require('../fixtures/data.json')
const {homePage} = require("./pages/home.page");

Cypress.Commands.add('openMenu', (menu) => {
    return cy.get(`[href="/Tab/${menu}"]`).click()
})

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', 'lojaebac.ebaconline.art.br')
    cy.visit('/')
    homePage.openMenu('Account')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(senha)
    cy.get('[data-testid="btnLogin"]').click()
})

Cypress.Commands.add('addProdutoCarrinho', (produto) => {
    cy.openMenu('Browse').click()
    cy.get('[data-testid="searchInput"]').type(produto)
    cy.get('[data-testid="browse-product-list"]').contains(produto).click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[data-testid="productName"]').should('contain', produto)

})

Cypress.Commands.add('adicionarEndereco', (primeiroNome, telefone, logradouro, cidade, estado, CEP) => {
    cy.get('[data-testid="addNewAddress"]').click()
    cy.get('[placeholder="Enter your name"]').type(primeiroNome)
    cy.get('[placeholder="Enter your mobile number"]').type(telefone)
    cy.get('[placeholder="Enter your address"]').type(logradouro)
    cy.get('[placeholder="City"]').type(cidade)
    cy.get('[placeholder="State"]').type(estado)
    cy.get('[placeholder="ZipCode"]').type(CEP)
    cy.get('[data-testid="save"]').click()

})

Cypress.Commands.add('checkout', () => {
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').contains('Continue to payment').click()
    cy.get('[data-testid="completeCheckout"]').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1').should('contain', 'Order Success')
})

Cypress.Commands.add('retornarProdutoCarrinho',() => {
    return cy.get('[data-testid="productName"]');
})

Cypress.Commands.add('retornarQuantidadeProduto', () => {
    return cy.get('[data-testid="itemsQty"]');
})

Cypress.Commands.add('carrinho', () => {
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click();
})

