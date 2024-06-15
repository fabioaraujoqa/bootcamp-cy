
Cypress.Commands.add('login', (usuario, senha) => { 
    cy.visit('')
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
 })

 Cypress.Commands.add('cadastro', (nome, sobrenome, cep) => { 
    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)
    cy.get('[data-test="continue"]').click()
 })

 Cypress.Commands.add('escolherProduto', (nomeProduto) => { 
    cy.contains(nomeProduto).click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="back-to-products"]').click()
 })






