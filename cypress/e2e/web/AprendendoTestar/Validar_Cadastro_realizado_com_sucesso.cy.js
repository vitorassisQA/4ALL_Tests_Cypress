describe('Funcionalidade cadastro e exclusão de usuário', () => {
  beforeEach(() => {
    // Acessar a página inicial antes de cada teste
    cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php');
  });

  it('Validar cadastro realizado com sucesso', () => {
    // Preencher os campos de cadastro
    cy.get(':nth-child(2) > td > input').type("usuario");
    cy.get(':nth-child(4) > td > input').type("senha");
    cy.get(':nth-child(6) > td > input').type("jose"); // Nome do usuário a ser cadastrado

    // Clicar no botão enviar
    cy.get('td > .btn').click();

    // Esperar até que o cadastro seja refletido na tabela (timeout de 10 segundos)
    cy.get('tbody > :nth-child(2) > :nth-child(2)', { timeout: 10000 }).should("have.text", "jose");
  });

  it('Validar exclusão de usuário', () => {
    // Verificar se o usuário está presente antes da exclusão
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should("have.text", "jose");

    // Apagar usuário 
    cy.get(':nth-child(2) > :nth-child(5) > a').click();

    // Esperar um momento após a exclusão (opcional)
    cy.wait(1000); // Aguarda 1 segundo para garantir que a exclusão seja processada

    // Verificar se o usuário "jose" não está mais na tabela após a exclusão
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should("not.have.text", "jose");
  });
  it('Validar cadastro sem informar usuário', () => {
    // Preencher os campos de cadastro
    cy.get(':nth-child(4) > td > input').type("senha");
    cy.get(':nth-child(6) > td > input').type("jose"); // Nome do usuário a ser cadastrado
// Clicar no botão enviar
cy.get('td > .btn').click();
// Verifique se o campo de entrada ainda está marcado como obrigatório
cy.get('input[name="form_usuario"]').should('have.attr','required');
  });
  it('Validar cadastro sem informar senha', () => {
    // Preencher os campos de cadastro
    cy.get(':nth-child(6) > td > input').type("jose"); // Nome do usuário a ser cadastrado
// Clicar no botão enviar
cy.get('td > .btn').click();
// Verifique se o campo de entrada ainda está marcado como obrigatório
cy.get('input[name="form_senha"]').should('have.attr','required');
  });

  it.only('Validar cadastro sem informar nome', () => {
    // Preencher os campos de cadastro
    cy.get(':nth-child(2) > td > input').type("usuario");
    cy.get(':nth-child(4) > td > input').type("senha");

// Clicar no botão enviar
cy.get('td > .btn').click();
// Verifique se o campo de entrada ainda está marcado como obrigatório
cy.get('td').invoke('text').should('match', /Existem campos em branco/);
  });

});
