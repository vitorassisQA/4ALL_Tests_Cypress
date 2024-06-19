/// <reference types="cypress" />

describe('Menu 4ALL Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.4alltests.com.br/');
    });

    it('Validar acesso a página ferramentas', () => {
        cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()

    });
    it('Validar acesso a página Eventos', () => {
        cy.get('#nav > :nth-child(1) > :nth-child(3) > a').click()

    });

    it('Validar acesso a página Vagas', () => {
        cy.get('#nav > :nth-child(1) > :nth-child(4) > a').click()

    });

    it('Validar acesso a página Comunidade', () => {
       cy.get('#nav > :nth-child(1) > :nth-child(5) > a').click()

    });

    
    it('Validar acesso a página Cursos', () => {
        cy.get(':nth-child(6) > a').click()
 
     });
    it('Validar acesso a página Referências', () => {
        cy.get(':nth-child(7) > a').click()
 
     });
 
     it('Validar acesso a página Blog', () => {
        cy.get(':nth-child(8) > a').click()
 
     });
 
});
