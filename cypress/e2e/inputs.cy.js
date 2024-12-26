describe('Input Fields', ()=> {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/input-fields', 'Input Fields')
      })

    it('deve preencher o campo texto', ()=> {
        cy.get('[data-cy="fullname"]')
            .type('Fernando Papito')

        cy.get('input[name="email"]')
            .type('fernando@papito.dev')

        cy.get('input[name="number"]')
            .type('123')

        cy.get('input[name="date"]')
            .type('2024-10-06')
   }) 

})