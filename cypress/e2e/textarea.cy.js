describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/textarea', 'Textarea')
      })

      it('deve preencher o campo de area de texto', () => {
        cy.get('textarea[name="message"]')
        .type("Boas vindas ao Cypress Skills. Um curso de formação completo para você aprender sobre automação de testes com Cypress!")

      })
})

