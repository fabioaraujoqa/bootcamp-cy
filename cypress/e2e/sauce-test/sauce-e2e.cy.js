/// <reference types="cypress" />
import login from "../../fixtures/login.json";
import usuario from "../../fixtures/usuarios.json";

describe('Teste de ponta a ponta no Saucelab', () => {

    beforeEach(() => {
        cy.login(login.usuario, login.senha)
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer um pedido de ponta a ponta', () => {
        cy.escolherProduto('Sauce Labs Fleece Jacket')
        cy.escolherProduto('Sauce Labs Onesie')
        cy.escolherProduto('Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.cadastro(usuario[1].nome, usuario[1].sobrenome, usuario[1].cep)
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank yosdfsdfdsu for your order!' )
    });
});


