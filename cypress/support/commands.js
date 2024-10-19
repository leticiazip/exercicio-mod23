// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { email, senha } = require('../fixtures/data.json')
import { homePage } from "./pages/home.page"

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(senha)
    cy.get('[data-testid="btnLogin"]').click()
})

Cypress.Commands.add('addProdutoCarrinho', (produto) => {
    homePage.openMenu('Browse').click()
    cy.get('[data-testid="searchInput"]').type(produto)
    cy.get('[data-testid="browse-product-list"]').contains(produto).click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[style="font-size: 22px; font-family: Montserrat-Bold; color: rgb(79, 79, 79);"]').should('contain', produto)

})

Cypress.Commands.add('adicionarEndereco', (primeiroNome, telefone, logradouro, cidade, estado, CEP) => {
    cy.get('[data-testid="addNewAddress"]').click()
    // Chamado o comando de "login" pois o usuário não está logado ainda
    cy.login(email, senha)
    cy.get('[style="z-index: 0; display: flex;"] > [style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
    cy.get('[data-testid="addNewAddress"]').first().click()
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
    cy.get('[style="z-index: 0; display: flex;"] > [style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r').should('contain', 'Order Success')
})

