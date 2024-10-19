/// <reference types = "cypress" />

export const customerPage = {
    validarUsuarioLogado() {
        return cy.get('[data-testid="CustomerEmail"]')
    }
}