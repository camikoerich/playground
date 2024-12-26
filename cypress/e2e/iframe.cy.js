describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma página que tem IFrame', () => {
        cy.getIframeBody('[data-cy="iframe-inputs"]') // Acessa o conteúdo do iframe
          .find('#fullname') // Busca o campo de texto
          .type('Camila Koerich') // Preenche o campo
    })
})
