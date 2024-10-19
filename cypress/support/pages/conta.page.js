/// <reference types = "cypress" />

export const contaPage = {
    criarConta(primeiroNome, ultimoNome, telefone, email, senha, confirmacaoSenha) {
        cy.get('[data-testid="signUp"]').click()
        cy.get('[data-testid="firstName"]').type(primeiroNome)
        cy.get('[data-testid="lastName"]').type(ultimoNome)
        cy.get('[data-testid="phone"]').type(telefone)
        cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email)
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(senha)
        cy.get('[data-testid="repassword"]').type(confirmacaoSenha)
        cy.get('[data-testid="create"]').click()
    }
}